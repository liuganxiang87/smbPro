import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { BaseFormControls } from 'src/app/classes';
import { CustomerInProgressModel } from 'src/app/models';
import { FormFourTreeService, NghttpService, ProgressFunWrapService } from 'src/app/services';

import { API } from 'src/app/tools/API';

@Component({
  selector: 'app-four',
  templateUrl: '../step-html/four/four.component.html',
  styleUrls: ['../step-html/four/four.component.css']
})
export class FourComponent implements OnInit {
  _showBottomBt: boolean = true;
  bfcs$: Observable<BaseFormControls<string>[]>;
  progress: CustomerInProgressModel = new CustomerInProgressModel();
  constructor(private service: FormFourTreeService, private router: Router, private activatedRoute: ActivatedRoute, private progressFunWrapService: ProgressFunWrapService, private myhttp: NghttpService, private nzModalService: NzModalService) {
    const snapshot = this.activatedRoute.snapshot;
    const bankList = snapshot.data.bankList;
    this.progress = snapshot.data.progress;
    this.progress = { ...this.progress, ...{ allBank: bankList } };
    this.progressFunWrapService.progressBankInit(this.progress);
    this.bfcs$ = this.service.fourFormData(this.progress);

  }

  ngOnInit() { }
  _submitForm(formData: any) {
    console.log('最终formData', formData);
    let that = this;
    /**
     * 同样不需要传的数据不传，
     * 公章、财务章、法人章是必须的
     */
    delete that.progress['relationOrg'];
    delete that.progress['relationPerson'];
    for (let key in formData) {
      const val = formData[key]
      const keyArr = key.split('.');
      const len = keyArr.length;
      if (len == 1) that.progress[keyArr[0]] = val;
      if (len == 2) that.progress[keyArr[0]][keyArr[1]] = val;
    }
    that.myhttp.POST(API.submitTemplatePublic, that.progress).subscribe(res => {
      // console.log(that.progress.agreement_templet)
      if (res.status) {
        that.nzModalService.success({
          nzTitle: '提示', nzContent: `${res.info}`, nzOnOk: () => {
            that.router.navigate([`../../five/${that.progress.customer_org_reg_sid}`], { relativeTo: this.activatedRoute, queryParams: { agreement_templet: that.progress.agreement_templet } })
          }
        });
      }
    })


  }

}
