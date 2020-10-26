import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { CustomerInProgressModel, CustomerPartnerModel } from 'src/app/models';
import { NghttpService } from 'src/app/services';
import { API } from 'src/app/tools/API';
NzModalService
@Component({
  selector: 'app-two',
  templateUrl: '../step-html/two/two.component.html',
  styleUrls: ['../step-html/two/two.component.css']
})
export class TwoComponent implements OnInit, OnDestroy {
  progress: CustomerInProgressModel = new CustomerInProgressModel();
  cur_partner_index: number;
  isShowModal: boolean = false;
  _isVisible: boolean = false;
  timeout: any;
  _page = {
    index: 1,
    size: 15,
    total: 15
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private myhttp: NghttpService, private modalService: NzModalService) {
    const statePs = this.activatedRoute.snapshot;
    this.progress = statePs.data.progress;
  }
  ngOnInit() {
  }
  // 新增
  add() {
    this.cur_partner_index = null;
    this.showPop()
  }
  // 修改
  modify(index: number) {
    // console.log(index)
    this.cur_partner_index = index;
    this.showPop()
  }
  // 删除
  del(index: number) {
    let that = this;
    const partner = that.progress.partner[index]
    that.myhttp.POST(API.partnerDel, { partnerId: partner.customer_partner_sid }).subscribe(res => {
      if (res.status) {
        that.progress.partner.splice(index, 1);
        that.progress.partner = [...that.progress.partner];
        that.modalService.success({ nzTitle: "提示", nzContent: res.info });
      }
    })
  }
  _touchOk(e: CustomerPartnerModel[]) {
    this.progress.partner = [...e];
    this.closePop();
  }
  _touchCancel() {
    this.closePop()
  }
  showPop() {
    let that = this;
    that.isShowModal = true;
    that.timeout = setTimeout(() => {
      that._isVisible = true;
    }, 100);
  }
  closePop() {
    let that = this;
    that._isVisible = false;
    that.timeout = setTimeout(() => {
      that.isShowModal = false;
    }, 300);
  }

  save() {
    let that = this;
    that.myhttp.POST(API.partnerFitVerify, { id: that.progress.customer_org_reg_sid }).subscribe(res => {
      if (res.status) {
        that.modalService.success({ nzTitle: "提示", nzContent: res.info });
        // 路由
        that.router.navigate([`../../three/${that.progress.customer_org_reg_sid}`], { relativeTo: this.activatedRoute })
      }
    })

  }
  ngOnDestroy() {
    this.closePop();
    if (this.timeout) clearTimeout(this.timeout);
  }
}
