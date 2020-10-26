import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { AgreementTemplet, AgreementTempletObj, CustomerInProgressModel, OrgStructure } from 'src/app/models';
import { NghttpService } from 'src/app/services';
import { API } from 'src/app/tools/API';

@Component({
  selector: 'app-three',
  templateUrl: '../step-html/three/three.component.html',
  styleUrls: ['../step-html/three/three.component.css']
})
export class ThreeComponent implements OnInit {
  AgreementTempletObj = AgreementTempletObj;
  AgreementTemplet = AgreementTemplet;
  OrgStructure = OrgStructure;
  progress: CustomerInProgressModel;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private myhttp: NghttpService, private modalService: NzModalService) {
    const snapshot = this.activatedRoute.snapshot
    this.progress = snapshot.data.progress;
    // if (this.progress.org_structure == '1') this.progress.agreement_templet = '3';
    // console.log('****', this.progress.org_structure)
  }

  ngOnInit() {
  }
  save() {
    let that = this;
    const ps = {
      id: that.progress.customer_org_reg_sid,
      template: that.progress.agreement_templet
    };

    console.log('6666666666666', ps)

    that.myhttp.POST(API.chooseTempalte, ps).subscribe(res => {
      if (res.status) {
        that.modalService.success({ nzTitle: "提示", nzContent: res.info });
        // console.log(res)
        that.router.navigate([`../../four/${that.progress.customer_org_reg_sid}`], { relativeTo: that.activatedRoute });
      }
    })
  }

}
