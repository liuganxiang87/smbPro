import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseFormControls } from 'src/app/classes';
import { Observable } from 'rxjs';
import { CustomerInProgressModel } from 'src/app/models';
import { FormHorComponent } from 'src/app/components/form-hor/form-hor.component';
import { NghttpService, ProgressFunWrapService } from 'src/app/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormTaskFlowTreeService } from 'src/app/services/form-task-flow-tree.service';
import { API } from 'src/app/tools/API';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-one',
  templateUrl: '../step-html/one/one.component.html',
  styleUrls: ['../step-html/one/one.component.css']
})
export class OneComponent implements OnInit {
  _showBottomBt: boolean = true;
  bfcs$: Observable<BaseFormControls<string>[]>;
  progress: CustomerInProgressModel;
  source_isVisible: boolean = false;
  operateFormIndex: number;
  /**表单是否可编辑 */
  form_isDisabled: boolean = false;
  @ViewChild('createForm', { static: true }) createForm: FormHorComponent;
  CPersonDisplay: boolean = false;
  constructor(private service: FormTaskFlowTreeService, private myhttp: NghttpService, private router: Router, private activatedRoute: ActivatedRoute, private progressFun: ProgressFunWrapService, private msg: NzMessageService) {
    let that = this;
    const statePs = that.activatedRoute.snapshot;
    that.form_isDisabled = statePs.queryParams.isDisabled == 'true';
    statePs.data.progress.then((res: CustomerInProgressModel) => {
      that.progress = res
      that.bfcs$ = that.service.getSetUpForm(that.progress, false);
    })

  }

  ngOnInit() { console.log('>>>>>>>>>>>>', this.createForm) }


  _submitForm(formObj: any) {
    let that = this;
    const progress = that.progressFun.submitAdjust(that.progressFun.translateForm(formObj, that.progress));
    delete this.progress['nzOptions'];
    that.requestService(progress)
      .subscribe(res => {
        if (res.status) {
          that.msg.success(res.info);
          that.router.navigate([`../../two/${res.progress.customer_org_reg_sid}`], {
            relativeTo: that.activatedRoute,
            queryParams: { isDisabled: that.form_isDisabled }
          })
        }
      })
  }





  // : Observable<any>
  requestService(progress: CustomerInProgressModel) {
    const _progress = { ...new CustomerInProgressModel(), ...progress };
    console.log(_progress)
    delete _progress.nzOptions;
    delete _progress.org_big_type_options;
    delete _progress.customerFromSource;
    delete _progress.businessPeriodInfinite;

    return this.myhttp.POST(API.progressEdit, _progress)
  }

  _formModelChange(index: number) {
    this.bfcs$.subscribe(res => {
      const changeKey = res[index].key;

      /**
      * 第一个参数代表发生change 的索引
      * 第二个参数表示第一个参数关联需要修改的fom索引
      */
      switch (changeKey) {
        // 企业大类
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
