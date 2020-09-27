import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CustomerPersonModel } from "src/app/models";

import { NzModalService } from "ng-zorro-antd";
import { NghttpService } from 'src/app/services';
import { API } from 'src/app/tools/API';
// import { MyHttpService } from 'src/app/core';



@Component({
  selector: "app-choose-customer",
  templateUrl: "./choose-customer.component.html",
  styleUrls: ["./choose-customer.component.css"]
})
export class ChooseCustomerComponent implements OnInit {
  @Input() display = false;
  @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() personChange: EventEmitter<CustomerPersonModel> = new EventEmitter<CustomerPersonModel>();

  selName: string = "";
  selPhone: string = "";
  personList: CustomerPersonModel[] = [];
  public page: number = 1;
  public size: number = 10;
  public count: number = 0;

  constructor(
    private httpService: NghttpService,
    private modalService: NzModalService
  ) { }

  ngOnInit() { }

  getCustomerPersons(page = 1) {

    let that = this;
    const ps = { selName: that.selName, selPhone: that.selPhone, page: page, size: that.size }
    that.httpService.POST(API.getCustomerPersons, ps).subscribe(res => {
      if (res.status) {
        that.personList = res.data;
        that.count = res.count;
        that.page = page;
      }
    })
    // this.httpService
    //   .getCustomerPersons(this.selName, this.selPhone, page, this.size)
    //   .subscribe(res => {
    //     that.requestFlag = false;
    //     this.requestFlagChange.emit(this.requestFlag);
    //     if (res.status) {
    //       that.personList = res.data;
    //       that.count = res.count;
    //       that.page = page;
    //     } else {
    //       that.modalService.error({ nzTitle: "错误", nzContent: res.err });
    //     }
    //   });
  }

  choose(person: CustomerPersonModel) {
    this.dataFormatBack();
    this.personChange.emit(person);
  }

  handleOk() { }

  handleCancel() {
    this.dataFormatBack();
  }

  dataFormatBack() {
    this.display = false;
    this.displayChange.emit(this.display);
    this.personList = [];
  }
}
