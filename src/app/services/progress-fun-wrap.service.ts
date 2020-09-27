import { CompileStylesheetMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CustomerInProgressModel, DefaultBusinessPeriod } from '../models';
import { TimeHelper } from '../tools/Time.helper';
import { PublicService } from '../services/public.service';
@Injectable({
  providedIn: 'root'
})
export class ProgressFunWrapService {
  constructor(private ps: PublicService) { }
  translateForm(formObj: any, progress: CustomerInProgressModel) {
    for (let key in formObj) {
      const val = formObj[key];
      const arr = key.split('.');
      /**目前最多不超过三维 */
      const len = arr.length;
      if (len == 1) progress[arr[0]] = val;
      if (len == 2) progress[arr[0]][arr[1]] = val;
      if (len == 3) progress[arr[0]][arr[1]][arr[2]] = val;
    }
    /**
     * 根据期限 解析customer_org_end_date和customer_org_begin_date
     */
    progress.customer_org_begin_date = new Date().getTime();
    if (progress.businessPeriodInfinite) {  //无限期
      progress.customer_org_end_date = 0;
      progress.businessPeriod = null;
      progress.fileNoFund.operating_period = progress.fileFund.operating_period =
        "长期"
    } else {
      /**
      * businessPeriod  计算customer_org_begin_date和customer_org_end_date；
      * progress.custmoer_org_end_date
      */
      if (!progress.businessPeriod) progress.businessPeriod = DefaultBusinessPeriod;
      progress.customer_org_end_date = progress.last_day_4_pay = TimeHelper.getLaterTimestamp(
        TimeHelper.getLaterTimestamp(
          progress.customer_org_begin_date,
          Number(progress.businessPeriod),
          "year"
        ),
        -1,
        "day"
      );
      //生成经营期限字符串（fileNoFund 和 fileFund中）
      progress.fileNoFund.operating_period = progress.fileFund.operating_period =
        TimeHelper.timestampToString(
          progress.customer_org_begin_date,
          true
        ) +
        "至" +
        TimeHelper.timestampToString(progress.customer_org_end_date, true);
    }


    return {
      formObj: formObj,
      progress: progress
    }


  }


  submitAdjust(progress: CustomerInProgressModel) {
    /**
   * 需要转换处理的数据
   * 1.原公司小类别
   * 2.公司小类别
   * 3.last_day_pay(交付期限)；
   * 4.moveBefore.customer_lifecycle  //原经营期限
   * 5. 部分数字和字符串类型转换，eg: 后台强调org_structure为字符串
   */
    progress.org_structure = progress.org_structure.toString();
    progress.inputArg.start_name = progress.inputArg.start_name.toString();
    console.log('============', progress.type)
    switch (progress.type) {
      case 1:
        break;
      case 2:
        progress.moveBefore.org_small.forEach(el => { if (el > 0) progress.moveBefore.org_structure_detail = el });
        if (progress.moveBefore.isIndefiniteDuration) {
          progress.moveBefore.customer_org_begin_date = new Date(progress.moveBefore.customer_lifecycle[0]).getTime();
          progress.moveBefore.customer_org_end_date = new Date(progress.moveBefore.customer_lifecycle[1]).getTime();
        } else {
          progress.moveBefore.customer_org_begin_date = new Date(progress.moveBefore.customer_lifecycle).getTime();
          progress.moveBefore.customer_org_end_date = 0
        }
        break;
      case 3:
        if (progress.moveBefore.isIndefiniteDuration) {
          progress.moveBefore.customer_org_begin_date = new Date(progress.moveBefore.customer_lifecycle[0]).getTime();
          progress.moveBefore.customer_org_end_date = new Date(progress.moveBefore.customer_lifecycle[1]).getTime();
        } else {
          progress.moveBefore.customer_org_begin_date = new Date(progress.moveBefore.customer_lifecycle).getTime();
          progress.moveBefore.customer_org_end_date = 0
        }
        break;
    }
    progress.small_class.forEach(el => { if (el > 0) progress.org_structure_detail = el });
    // last_day_4_pay有可能是Date类型，有可能是number类型------------最终都转为时间戳；
    if (progress.last_day_4_pay instanceof Date) progress.last_day_4_pay = new Date(this.ps.copyData(progress.last_day_4_pay)).getTime();

    return progress

  }


}
