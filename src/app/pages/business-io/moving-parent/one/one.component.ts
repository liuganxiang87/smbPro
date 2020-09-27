import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseFormControls } from 'src/app/classes';
import { Observable } from 'rxjs';
import { CustomerInProgressModel, DefaultBusinessPeriod } from 'src/app/models';
import { FormHorComponent } from 'src/app/components/form-hor/form-hor.component';
import { NghttpService, ProgressFunWrapService, ProgressInitService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { FormTaskFlowTreeService } from 'src/app/services/form-task-flow-tree.service';
import { API } from 'src/app/tools/API';
import { TimeHelper } from 'src/app/tools/Time.helper';
import { NzModalService } from 'ng-zorro-antd';




@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  index: number = 0;
  _showBottomBt: boolean = true;
  bfcs$: Observable<BaseFormControls<string>[]>;
  progress: CustomerInProgressModel;
  source_isVisible: boolean = false;
  operateFormIndex: number;
  /**表单是否可编辑 */
  form_isDisabled: boolean = false;
  @ViewChild('movingCreateForm', { static: true }) createForm: FormHorComponent;
  CPersonDisplay: boolean = false;
  constructor(private service: FormTaskFlowTreeService, private nghttp: NghttpService, private activatedRoute: ActivatedRoute, private modal: NzModalService, private progressFun: ProgressFunWrapService) {
    let that = this;
    const statePs = that.activatedRoute.snapshot;
    this.form_isDisabled = statePs.queryParams.isDisabled == 'true';
    try {
      statePs.data.progress.then((res: CustomerInProgressModel) => {
        this.progress = res;
        that.bfcs$ = this.service.getMovingForm(that.progress, false);
      })
    } catch (error) {
      console.log(error)

    }


  }

  ngOnInit() {
    // console.log('初始化------------------------------------------------')
  }
  _submitForm(formObj: any) {
    const result = this.progressFun.translateForm(formObj, this.progress);
    this.progress = result.progress;

  }
  // , nzFooter: null

  _formModelChange(index: number) {
    this.bfcs$.subscribe(res => {
      const changeKey = res[index].key
      console.log('------------->', changeKey)
      /**
    * 第一个参数代表发生change 的索引
    * 第二个参数表示第一个参数关联需要修改的fom索引
    */
      switch (changeKey) {
        // 企业大类
        // case 'org_class':
        //   this.createForm.modifyControl(index, index + 3);
        //   break;
        // // break;
        // case 'inputArg.start_name':  //
        //   this.translateForm(this.createForm.getFormData());
        //   this.progressService.customer_name_format(this.progress);
        //   this.bfcs$ = this.service.getSetUpForm(this.progress, false);
        //   break
        // case 'org_structure':   //企业架构
        //   this.translateForm(this.createForm.getFormData());
        //   this.progressService.smallClassFormat(this.progress);
        //   this.bfcs$ = this.service.getSetUpForm(this.progress, false);
        //   break;
        // // 是否无限期
        // case 'businessPeriodInfinite':
        //   this.translateForm(this.createForm.getFormData());
        //   this.bfcs$ = this.service.getSetUpForm(this.progress, false);
        //   break;
        // case 'inputArg.append_city':

        //   this.translateForm(this.createForm.getFormData());
        //   this.progressService.customer_name_format(this.progress);
        //   this.createForm.modifyControl(index, index + 1, { text: this.progress.customer_name });
        //   break;

        case 'customerFromSource.text':
          this.source_isVisible = true;
          this.operateFormIndex = index;
          break;
        case 'customerPerson.c_person_name':
          this.CPersonDisplay = true;
          this.operateFormIndex = index;
          break;

      }



    })


  }




  _handCancle() {
    let that = this;
    that.source_isVisible = false;
  }
  _handOK(e: any) {
    let that = this;
    that.source_isVisible = false;
    that.progress.customerFromSource = {
      source: e.bigClass.id,
      source_id: e.smallClass.id,
      text: e.bigClass.text + (e.smallClass.text ? '（' + e.smallClass.text + '）' : '')
    }
    that.progress.source = that.progress.customerFromSource.source;
    that.progress.source_id = that.progress.customerFromSource.source_id;
    that.createForm.modifyForm(that.operateFormIndex, { text: e.bigClass.text + (e.smallClass.text ? '（' + e.smallClass.text + '）' : '') })

  }
  personHandler(event: any) {
    this.progress.customerPerson = event;
    // console.log(event)
    this.progress.customer_person_id = this.progress.customerPerson.c_person_id;
    this.createForm.modifyForm(this.operateFormIndex, { text: event.c_person_name })
  }

}
