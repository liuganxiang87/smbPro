import { Injectable } from '@angular/core';
import { CustomerInProgressModel, WorkerModel, OrgBigTypeArrValue, StartName, OrgStructure, StartNameTextObj } from '../models';
import { API } from '../tools/API';
import { Small_clasess, SourceArr } from '../tools/global';
import { TimeHelper } from '../tools/Time.helper';
import { NghttpService } from './nghttp.service';
import { PublicService } from './public.service';
@Injectable({
  providedIn: 'root'
})
export class ProgressInitService {
  constructor(private myhttp: NghttpService, private publicService: PublicService) { }
  async initData(progress: CustomerInProgressModel, type: number = 1) {
    let that = this;
    progress.type = type;

    progress.businessPeriodInfinite = progress.customer_org_end_date == 0;

    that.smallClassFormat(progress);

    that.customer_name_format(progress);
    /**
     * 如果customer_org_end_date！=0；计算 businessPeriod  经营期限
     */
    if (progress.customer_org_end_date) {
      progress.businessPeriod = TimeHelper.getBetweenNum(new Date(progress.customer_org_begin_date), new Date(progress.customer_org_end_date));
    }
    /**
     * 对客户来源对初始化
     */
    const sourceBig = SourceArr.find(item => {
      return item.id == progress.source
    });
    progress.customerFromSource = {
      source: 0,
      source_id: 0,
      text: ''
    };
    progress.customerFromSource.source = progress.source || 0;
    progress.customerFromSource.source_id = progress.source_id || 0;
    let ps = {}
    switch (progress.source) {
      case 0:
        progress.customerFromSource.text = null;
        break
      case 1:
      case 2:
        progress.customerFromSource.text = sourceBig.text
        break;
      case 3:
        /**请求客户 经理开发列表*/
        ps = {
          page: 1,
          size: 100,
        }
        const res = await that.getData(API.customerMan, ps);
        const arr = res.data;
        const small_target = arr.find((item: WorkerModel) => { return item.worker_id == progress.source_id });
        progress.customerFromSource.text = sourceBig.text + '（' + small_target.w_name + '）'
        // console.log('constructor 执行完成')
        break;
      case 4:
        ps = {
          page: 1,
          size: 100,
          name: '',
          phone: ''
        }
        const res4 = await that.getData(API.customerRecommend, ps);
        const arr4 = res4.data;
        const small_target4 = arr4.find((item: WorkerModel) => { return item.worker_id == progress.source_id });
        progress.customerFromSource.text = sourceBig.text + '（' + small_target4.c_person_name + '）'
        break;
      case 5:
        ps = {
          page: 1,
          size: 88,
          status: 1,
          idCode: '',
          phone: ''
        }
        const res5 = await that.getData(API.customerChannels, ps);
        const arr5 = res5.data;
        const small_target5 = arr5.find((item: WorkerModel) => { return item.worker_id == progress.source_id })
        progress.customerFromSource.text = sourceBig.text + '（' + small_target5.referrer_name + '）'
        break;
      case 6:
        break;
    }
    /**企业大类关联着企业类型 */
    progress.org_big_type_options = OrgBigTypeArrValue[progress.org_class - 1];
    if (type = 2) {  //如果是迁转企业  ，涉及之前 的小类别  
      that.moveBeforesSmallClassFormat(progress)
    }
    // console.log('@----------@', progress)

    return progress
  }
  customer_name_format(progress: CustomerInProgressModel) {
    // 解決老企业【冠名类型】为空，导致无法修改冠名的异常
    if (!progress.inputArg.start_name) {
      progress.inputArg.start_name = StartName.county;
    }
    // 有限公司，组织形式无需填写
    if (progress.org_structure == OrgStructure.company) {
      progress.inputArg.org_style = "";
    }
    // 企业名称【冠名类型 + 企业字号 + 行业表述 + 组织形式（有限合伙存在）+ 组织形式】
    progress.customer_name = progress.inputArg.customer_register_name =
      (StartNameTextObj[progress.inputArg.start_name] == undefined
        ? ""
        : StartNameTextObj[progress.inputArg.start_name]) +
      (progress.inputArg.start_name == StartName.county &&
        progress.inputArg.append_city == 'T'
        ? "市"
        : "") +
      (progress.inputArg.short_name == undefined
        ? ""
        : progress.inputArg.short_name) +
      (progress.inputArg.biz_desc == undefined
        ? ""
        : progress.inputArg.biz_desc) +
      (progress.inputArg.org_style == undefined
        ? ""
        : progress.inputArg.org_style) +
      (progress.org_structure == OrgStructure.partner
        ? "（有限合伙）"
        : "有限公司");
    return progress
  }

  smallClassFormat(progress: CustomerInProgressModel) {
    /**
      * 对小类别对初始化
      */
    [progress.nzOptions, progress.values] = [[], []];
    progress.nzOptions = progress.org_structure == 1 ? Small_clasess.type_one : Small_clasess.type_two;
    //如果是查看，之前对org_structure_detail没有定义，需要给与一个默认数值；
    let small_class: any;
    if (!progress.org_structure_detail) {
      small_class = progress.org_structure == 1 ? Small_clasess.type_one[0].value : Small_clasess.type_two[0].children[1].value;
    } else {
      small_class = progress.org_structure_detail;
    }
    //根据 small_class 可以找到上级  得到默认值that.values

    progress.nzOptions.forEach(item => {
      if (!item.isLeaf) {
        item.children.forEach(element => {
          if (element.value == small_class) {
            progress.values = [item.value, element.value]
          }
        });
      } else {
        if (item.value == small_class) {
          progress.values.push(item.value)
        }
      }
    })
    console.log('===================', JSON.stringify(progress.nzOptions))

    return progress

  }

  moveBeforesSmallClassFormat(progress: CustomerInProgressModel) {
    /**
      * 对小类别对初始化
      */
    progress.moveBefore.nzOptions = [];
    progress.moveBefore.org_structure = 2
    progress.moveBefore.nzOptions = Small_clasess.type_two;
    //如果是查看，之前对org_structure_detail没有定义，需要给与一个默认数值；
    let small_class: any;
    if (!progress.org_structure_detail) {
      small_class = Small_clasess.type_two[0].children[1].value;
    } else {
      small_class = progress.moveBefore.org_structure_detail;
    }
    // console.log('---->>>>', small_class, progress.moveBefore.nzOptions)
    //根据 small_class 可以找到上级  得到默认值that.values
    progress.moveBefore.values = [];
    progress.moveBefore.nzOptions.forEach(item => {
      if (!item.isLeaf) {
        item.children.forEach(element => {
          if (element.value == small_class) {
            progress.moveBefore.values = [item.value, element.value]
          }
        });
      } else {
        if (item.value == small_class) {
          progress.moveBefore.values.push(item.value)
        }
      }
    })

    return progress

  }
  getData(url: string, ps: any) {
    return this.myhttp.POST(url, ps).toPromise();
  }
}
