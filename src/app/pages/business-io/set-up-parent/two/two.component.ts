import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerInProgressModel } from 'src/app/models';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  progress: CustomerInProgressModel
  cur_partner_index: number;
  isShowModal: boolean = false;
  _page = {
    index: 1,
    size: 15,
    total: 15
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const statePs = this.activatedRoute.snapshot;
    this.progress = statePs.data.progress || new CustomerInProgressModel();
    console.log('@@@:::', this.progress.partner)
  }
  ngOnInit() {
  }
  // 新增
  add() {
    this.isShowModal = true;
    this.cur_partner_index = null;
  }
  // 修改
  modify(index: number) {
    // const item = this.progress.partner[index];
    this.isShowModal = true;
    this.cur_partner_index = index;

  }
  // 删除
  del(index: number) {

  }
  _touchOk(e) {

  }
  _touchCancel() {
    console.log('----------')
    this.isShowModal = false;
  }

}
