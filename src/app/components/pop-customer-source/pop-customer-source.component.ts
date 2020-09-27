import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NzNotificationService } from 'ng-zorro-antd';
// import { NghttpService, ApiUrl } from 'src/app/core';
import { WorkerModel, CustomerPersonModel } from 'src/app/models';
import { ChannelModel } from 'src/app/models/Channel.Model';
import { SourceArr } from 'src/app/tools/global';
import { NghttpService } from 'src/app/services';
import { API } from 'src/app/tools/API';

@Component({
  selector: "pop-customer-source",
  templateUrl: "./pop-customer-source.component.html",
  styleUrls: ["./pop-customer-source.component.css"],
})
export class PopCustomerSourceComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() _handCancle = new EventEmitter<any>();
  @Output() _handOk = new EventEmitter<any>();
  requestFlag: boolean = false;
  name: string;
  phone: string | number;
  idCode: string | number;
  fromSource: any = {
    page: 1,
    size: 10,
    bigClass: {          //来源大类
      id: 0,
      text: '请选择'
    },
    smallClass: {       //来源小类
      id: 0,
      text: null
    }
  }


  SourceArr = SourceArr;

  @Input() dataSet: WorkerModel[] = [];
  // 渠道推荐

  @Input() dataSet2: ChannelModel[] = [];
  // 客户推荐
  @Input() dataSet3: CustomerPersonModel[] = [];
  // 篮子  将每一个数据好比一个鸡蛋 放入篮子中，放一个清除一个，保证篮子里最多能放两个鸡蛋，最后一个就是最新放入对鸡蛋【1】，而【0】就是之前放入的鸡蛋  
  basket: number[] = [];
  constructor(private nzNotice: NzNotificationService, private hp: NghttpService) { }

  ngOnInit() { }

  handleCancel() {
    this._handCancle.emit();
  }
  handleOk() {
    // TODO:客户来源
    switch (this.fromSource.bigClass.id) {
      case 1:

      case 2:

        break;
      case 3:
        const item3 = this.dataSet[this.basket[this.basket.length - 1]];
        this.fromSource.smallClass = item3 && item3.checked ? {
          id: item3.worker_id,
          text: item3.w_name
        } : {
            id: 0,
            text: null
          }
        break;
      case 4:
        const item4 = this.dataSet3[this.basket[this.basket.length - 1]];
        this.fromSource.smallClass = item4 && item4.checked ? {
          id: item4.worker_id,
          text: item4.c_person_name
        } : {
            id: 0,
            text: null
          }

        break;
      case 5:
        const item5 = this.dataSet2[this.basket[this.basket.length - 1]];
        this.fromSource.smallClass = item5 && item5.checked ? {
          id: item5.worker_id,
          text: item5.referrer_name
        } : {
            id: 0,
            text: null
          }

        break

    }

    const smallClass_id = this.fromSource.smallClass.id;
    if (smallClass_id) {
      this._handOk.emit(this.fromSource);
    } else {
      this.nzNotice.warning('提示', '请选择客户来源')
    }

  }
  // 客户经理 选择触发回调
  nzCheckedChange(type: number, index: number) {
    const realIndex = (this.fromSource.page - 1) * this.fromSource.size + index
    const target = this.dataSet[realIndex];
    //   type 1-->点击事件  0 --> checked  change事件
    if (type == 1) target.checked = !target.checked;
    if (target.checked) {
      if (this.basket.length === 2) this.basket.shift();
      this.basket.push(realIndex);
      if (this.basket.length === 2 && index != this.basket[0]) this.dataSet[this.basket[0]].checked = false;
    }
  }
  //客户经理列表 page 变化
  nzPageIndexChange(e: any) {
    this.fromSource.page = e;
  }

  // 客户推荐  选择触发回调
  set3_nzCheckedChange(type: number, index: number) {
    const realIndex = (this.fromSource.page - 1) * this.fromSource.size + index
    const target = this.dataSet3[realIndex];
    //   type 1-->点击事件  0 --> checked  change事件
    if (type == 1) target.checked = !target.checked;
    if (target.checked) {
      if (this.basket.length === 2) this.basket.shift();
      this.basket.push(realIndex);
      console.log("basket:", this.basket)
      if (this.basket.length === 2 && index != this.basket[0]) { this.dataSet3[this.basket[0]].checked = false; }
    }
  }
  // 渠道推荐 选择触发回调
  set2_nzCheckedChange(type: number, index: number) {
    console.log('-------', this.fromSource, this.fromSource.size, index)

    const realIndex = (this.fromSource.page - 1) * this.fromSource.size + index;
    const target = this.dataSet2[realIndex];
    console.log(realIndex, target)
    //   type 1-->点击事件  0 --> checked  change事件
    if (type == 1) target.checked = !target.checked;
    if (target.checked) {
      if (this.basket.length === 2) this.basket.shift();
      this.basket.push(realIndex);
      console.log("basket:", this.basket)
      if (this.basket.length === 2 && index != this.basket[0]) { this.dataSet2[this.basket[0]].checked = false; }
    }
  }
  /** 
   * 搜索
   */
  search_source() {
    /**page  初始为1 */
    this.fromSource.page = 1;
  }
  // 监听客户来源下拉选中值的变化触发函数
  onSelected() {
    let that = this;
    // 注意每次大类选择变化了  篮子需要清空
    that.basket = [];
    that.fromSource.page = 1;
    /**
     *{ id: 1, type: 'webRegister', text: "网站注册" },
    { id: 2, type: 'selfCome', text: "客户自主联系" },
    { id: 3, type: 'worker', text: "客户经理开发" },
    { id: 4, type: 'customer', text: "客户推荐" },
    { id: 5, type: 'channel', text: "渠道推荐" },
    { id: 6, type: 'introducer', text: "介绍人推荐" },
     */
    // console.log('this.fromSource:', that.fromSource);
    const item = that.SourceArr.find(res => {
      return res.id == that.fromSource.bigClass.id;
    })
    /**选择对来源大类 */
    that.fromSource.bigClass = {
      id: item.id,
      text: item.text
    }
    /**来源小类 */
    let ps = {}
    switch (item.id) {
      case 1:
      case 2:

        that.fromSource.smallClass = {
          id: item.id,
          text: null
        }

        break;
      case 3:
        that.fromSource.smallClass = {
          id: 0,
          text: null
        }
        /**请求客户 经理开发列表*/
        ps = {
          page: 1,
          size: 88,
          name: that.name || '',
          phone: that.phone || ''
        }
        that.hp.POST(API.customerMan, ps).subscribe(res => {
          if (res.status) {
            setTimeout(() => {
              that.dataSet = res.data;
            }, 200);
            // console.log(that.dataSet)
          }

        })



        break;
      case 4:
        that.fromSource.smallClass = {
          id: 0,
          text: null
        }
        ps = {
          page: 1,
          size: 88,
          name: that.name || '',
          phone: that.phone || ''
        }
        console.log('客户推荐', API.customerRecommend, ps)
        that.hp.POST(API.customerRecommend, ps).subscribe(res => {
          console.log(res);
          if (res.status) {
            that.dataSet3 = res.data
          }

        })

        break;
      case 5:
        that.fromSource.smallClass = {
          id: 0,
          text: null
        }
        ps = {
          page: 1,
          size: 88,
          status: 1,
          idCode: that.idCode || '',
          phone: that.phone || ''
        }

        console.log('客户渠道', API.customerChannels, ps)
        that.hp.POST(API.customerChannels, ps).subscribe(res => {
          console.log(res);
          if (res.status) {
            that.dataSet2 = res.data
          }

        })
        break;
      default:
        that.fromSource = {
          bigClass: {
            id: item.id,
            text: item.text
          },
          smallClass: {
            id: 0,
            text: null
          }
        }
    }
    // console.log('33', this.source_id);
  }

}
