import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BaseFormControls, FormDivider, FormDropdown, FormInputText, FormRadio, FormTextarea } from '../classes';
import { CustomerInProgressModel, FileCompanyModel } from '../models';
import {
  status_arr, fund_open_type_arr, fund_risk_ratingArr, fund_risk_enduranceArr
} from '../tools/global';

@Injectable({
  providedIn: 'root'
})
export class FormFiveTreeService {

  constructor() { }

  fiveNotFundFormData(progress: CustomerInProgressModel = new CustomerInProgressModel, isDisabled: boolean = false) {
    let formData: BaseFormControls<string>[] = [
      new FormRadio({
        label: '全体合伙人授权执行事务合伙人代签工商登记文件',
        key: 'fileNoFund.if_exec_2_biz_reg',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        radioType: 2,
        value: progress.fileNoFund.if_exec_2_biz_reg,
        options: status_arr,
        order: 1
      }),
      new FormRadio({
        label: '允许有限合伙人与普通合伙人相互转变',
        key: 'fileNoFund.if_GP_LP_can_change',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        radioType: 2,
        value: progress.fileNoFund.if_GP_LP_can_change,
        options: status_arr,
        order: 2
      }),
      new FormRadio({
        label: '允许合伙份额出质',
        key: 'fileNoFund.if_portion_can_pledge',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        radioType: 2,
        value: progress.fileNoFund.if_portion_can_pledge,
        options: status_arr,
        order: 3
      }),
      new FormInputText({
        label: '合伙目的',
        key: 'fileNoFund.purpose_of_partnership',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        value: progress.fileNoFund.purpose_of_partnership,
        order: 4
      }),
      new FormInputText({
        label: '利润分配方式',
        key: 'fileNoFund.profit_distribution_mode',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        value: progress.fileNoFund.profit_distribution_mode,
        order: 5
      }),
      new FormInputText({
        label: '利润分配币种',
        key: 'fileNoFund.profit_distribution_currency',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        value: progress.fileNoFund.profit_distribution_currency,
        order: 6
      }),
      new FormTextarea({
        label: '利润分配时间',
        key: 'fileNoFund.profit_distribution_time',
        required: true,
        rows: 1,
        isDisabled: isDisabled,
        hasNoColon: true,
        value: progress.fileNoFund.profit_distribution_time,
        order: 7
      }),
      new FormRadio({
        label: '先回本再分配',
        key: 'fileNoFund.if_recovery_then_distribution',
        required: true,
        radioType: 2,
        isDisabled: isDisabled,
        hasNoColon: true,
        value: progress.fileNoFund.if_recovery_then_distribution,
        options: status_arr,
        order: 8
      }),

      new FormInputText({
        label: '企业亏损分担',
        key: 'fileNoFund.loss_share_responsibility',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        value: progress.fileNoFund.loss_share_responsibility,
        order: 9
      }),

      new FormInputText({
        label: '执行事务合伙人的费用和报酬',
        key: 'fileNoFund.excution_partner_fee',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        value: progress.fileNoFund.excution_partner_fee,
        order: 10
      }),


      new FormInputText({
        label: '逾期多少天及以上的，执行事务合伙人有权（但非义务）要求该有限合伙人退伙',
        key: 'fileNoFund.overdue_days',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        gridCol: 12,
        value: progress.fileNoFund.overdue_days,
        order: 11
      }),
      new FormTextarea({
        label: '经营范围',
        key: 'fileNoFund.scope_of_operation',
        required: true,
        isDisabled: isDisabled,
        gridCol: 12,
        rows: 4,
        value: progress.fileNoFund.scope_of_operation,
        order: 12
      }),
      new FormTextarea({
        label: '合伙协议特别约定',
        key: 'fileNoFund.special_appointment',

        isDisabled: isDisabled,
        gridCol: 12,
        rows: 4,
        value: progress.fileNoFund.special_appointment,
        order: 13
      }),

    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }
  fiveFileFundFormData(progress: CustomerInProgressModel = new CustomerInProgressModel, isDisabled: boolean = false) {
    let formData: BaseFormControls<string>[] = [
      new FormDivider({
        label: '协议合作基础信息',
        key: 'divider1',
        gridCol: 24,
        order: 1
      }),
      new FormRadio({
        label: '是否股权投资',
        key: 'fileFund.if_stock_right',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        radioType: 2,
        value: progress.fileFund.if_stock_right || 'F',
        options: status_arr,
        order: 2
      }),
      new FormRadio({
        label: '全体合伙人是否授权执行事务合伙人代签工商登记文件',
        key: 'fileFund.if_exec_2_biz_reg',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        radioType: 2,
        value: progress.fileFund.if_exec_2_biz_reg || 'F',
        options: status_arr,
        order: 3
      }),
      new FormRadio({
        label: '是否允许合伙份额出质',
        key: 'fileFund.if_portion_can_pledge',
        required: true,
        isDisabled: isDisabled,
        radioType: 2,
        hasNoColon: true,
        value: progress.fileFund.if_portion_can_pledge || 'F',
        options: status_arr,
        order: 4
      }),
      new FormRadio({
        label: '是否允许有限合伙人与普通合伙人相互转变',
        key: 'fileFund.if_GP_LP_can_change',
        required: true,
        isDisabled: isDisabled,
        radioType: 2,
        hasNoColon: true,
        value: progress.fileFund.if_GP_LP_can_change,
        options: status_arr,
        order: 5
      }),
      new FormDropdown({
        label: '基金产品风险评级',
        key: 'fileFund.fund_risk_rating',
        required: true,
        hasNoColon: true,
        width: '10em',
        isDisabled: isDisabled,
        value: progress.fileFund.fund_risk_rating,
        options: fund_risk_ratingArr,
        order: 6
      }),
      new FormDropdown({
        label: '客户风险识别/评估/承受能力',
        key: 'fileFund.fund_risk_endurance',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        width: '10em',
        value: progress.fileFund.fund_risk_endurance,
        options: fund_risk_enduranceArr,
        order: 7
      }),

      new FormInputText({
        label: '经营期限',
        key: 'fileFund.operating_period',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        value: progress.fileFund.operating_period,
        order: 8
      }),

      new FormInputText({
        label: '经营期限延长',
        key: 'fileFund.period_extend',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        value: progress.fileFund.period_extend,
        order: 9
      }),
      new FormTextarea({
        label: '合伙企业经营目的',
        key: 'fileFund.purpose_of_partnership',
        required: true,
        rows: 3,
        isDisabled: isDisabled,
        gridCol: 12,
        hasNoColon: true,
        value: progress.fileFund.purpose_of_partnership,
        order: 10
      }),
      new FormTextarea({
        label: '经营范围',
        key: 'fileFund.scope_of_operation',
        required: true,
        hasNoColon: true,
        gridCol: 12,
        rows: 3,
        isDisabled: isDisabled,
        value: progress.fileFund.scope_of_operation,

        order: 11
      }),

      new FormDivider({
        label: '管理与运作方式',
        key: 'divider2',
        gridCol: 24,
        order: 12
      }),

      new FormRadio({  //1.开放式；2、封闭式
        label: '基金类型',
        key: 'fileFund.fund_open_type',
        required: true,
        hasNoColon: true,
        radioType: 2,
        isDisabled: isDisabled,
        options: fund_open_type_arr,
        value: progress.fileFund.fund_open_type,
        order: 13
      }),


      new FormRadio({  //1.开放式；2、封闭式
        label: '执行事务合伙人管理',
        key: 'fileFund.manage_by_executive_partner',
        required: true,
        radioType: 2,
        hasNoColon: true,
        isDisabled: isDisabled,
        value: progress.fileFund.manage_by_executive_partner,
        options: [{ value: 'T', key: '是' }, { value: 'F', key: '委托其他私募管理机构管理' }],
        order: 14
      }),
      new FormTextarea({
        label: '第三方基金管理机构名称',
        key: 'fileFund.third_fund_agency_name',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        rows: 4,
        value: progress.fileFund.third_fund_agency_name,
        order: 15
      }),


      new FormInputText({
        label: '第三方基金管理机构登记证书号',
        key: 'fileFund.third_fund_agency_id',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        rows: 4,
        value: progress.fileFund.third_fund_agency_id,
        order: 16
      }),

      new FormRadio({
        label: '设置锁定期',
        key: 'fileFund.if_open_locking',
        required: true,
        hasNoColon: true,
        radioType: 2,
        isDisabled: isDisabled,
        value: progress.fileFund.if_open_locking || 'F',
        options: status_arr,
        order: 17
      }),

      // 设置锁定期  STATR

      new FormInputText({
        label: '开放式基金的锁定期',
        key: 'fileFund.locking_period',
        required: true,
        hasNoColon: true,
        addOnAffter: '个月',

        value: progress.fileFund.locking_period,
        isDisabled: isDisabled,
        order: 18
      }),
      new FormRadio({
        label: '封闭期内可入伙申购',
        key: 'fileFund.if_lock_period_can_apply',
        required: true,
        hasNoColon: true,
        radioType: 2,
        value: progress.fileFund.if_lock_period_can_apply || 'F',
        options: status_arr,
        order: 19
      }),

      // 设置锁定期  END
      new FormRadio({
        label: '设置准锁定期',
        key: 'fileFund.if_pre_locking',
        required: true,
        hasNoColon: true,
        radioType: 2,
        isDisabled: isDisabled,
        value: progress.fileFund.if_pre_locking || 'F',
        options: status_arr,
        order: 20

      }),
      new FormInputText({
        label: '开放式基金的准锁定期',
        key: 'fileFund.pre_locking_period',
        addOnAffter: '个月',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.pre_locking_period,
        order: 21
      }),

      new FormInputText({
        label: '基金开放日',
        key: 'fileFund.fund_open_date',
        isDisabled: isDisabled,
        required: true,
        hasNoColon: true,
        value: progress.fileFund.fund_open_date,
        order: 22
      }),


      new FormInputText({
        label: '追加投资起点',
        key: 'fileFund.append_fund_start',
        addOnAffter: '万元',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.append_fund_start,
        order: 23
      }),



      new FormInputText({
        label: '追加投资增量',
        key: 'fileFund.append_fund_increase',
        addOnAffter: '万元',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.append_fund_increase,
        order: 24
      }),

      /**
       *  <!-- 开放式基金 end -->
          <!-- 封闭式基金 start-->
       */
      new FormInputText({
        label: '封闭式基金提前退伙费率',
        key: 'fileFund.withdraw_rate',
        addOnAffter: '%',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.withdraw_rate,
        order: 25
      }),

      //     <!-- 封闭式基金 end-->
      new FormInputText({
        label: '准锁定期减资费率',
        key: 'fileFund.pre_lock_withdraw_rate',
        addOnAffter: '%',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.pre_lock_withdraw_rate,
        order: 26
      }),
      new FormInputText({
        label: '托管费比率',
        key: 'fileFund.stock_trusteeship_rate',
        addOnAffter: '%',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.stock_trusteeship_rate,
        order: 27
      }),


      new FormInputText({
        label: '基金最低出资额',
        key: 'fileFund.lowest_capital',
        addOnAffter: '万元',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.lowest_capital,
        order: 28
      }),

      new FormInputText({
        label: '出资额递增量',
        key: 'fileFund.increments_capital',
        addOnAffter: '万元',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.increments_capital,
        order: 29
      }),

      new FormInputText({
        label: '投资冷静期',
        key: 'fileFund.investment_calm_period',
        addOnAffter: '小时',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.investment_calm_period,
        order: 30
      }),


      new FormInputText({
        label: '执行事务合伙人收取的基金管理费为合伙企业实缴出资额的',
        key: 'fileFund.management_expense_rate',
        addOnAffter: '"%/年',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.management_expense_rate,
        order: 31
      }),
      new FormDivider({
        label: '违约条款',
        key: 'divider3',
        gridCol: 24,
        order: 32
      }),

      new FormInputText({
        label: '逾期容忍期',
        key: 'fileFund.increments_capital',
        addOnAffter: '"%/年',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        value: progress.fileFund.increments_capital,
        order: 33
      }),
      // 有限合伙人未按照本协议约定的金额和约定的时间、或者未按照执行事务合伙人指定的时间和金额实缴资金的，可给合伙人逾期容忍期限，超过容忍期限的，应承担违约责任。逾期及以上的，执行事务合伙人有权利（但非义务）将该有限合伙人退伙

      // 如果是开放式 fileFund.manage_by_executive_partner == 'F'"
      new FormInputText({
        label: '合伙人违约，需向其他守约合伙人支付其已缴纳出资的金额',
        key: 'fileFund.liquidated_damages',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        addOnAffter: '%的违约金',
        value: progress.fileFund.liquidated_damages,

        order: 34
      }),
      new FormInputText({
        label: '以实际出资时货币价值的',
        key: 'fileFund.transfer_possession',
        required: true,
        hasNoColon: true,
        addOnAffter: '%为交易价格，违约转让',
        isDisabled: isDisabled,
        gridCol: 12,
        value: progress.fileFund.transfer_possession,
        order: 35
      }),
      new FormInputText({
        label: '其它条款',
        key: 'fileFund.other_clause1',
        addOnAffter: '万元',
        isDisabled: isDisabled,
        gridCol: 12,
        hasNoColon: true,
        required: true,
        value: progress.fileFund.other_clause1,
        order: 36
      }),
    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }
  // TODO:************************
  fiveFileCompanyFormData(progress: CustomerInProgressModel = new CustomerInProgressModel, isDisabled: boolean = false) {
    if (!progress.fileCompany.customer_org_reg_sid) progress.fileCompany = new FileCompanyModel();
    let formData: BaseFormControls<string>[] = [

      new FormTextarea({
        label: '经营范围',
        key: 'fileCompany.scope_of_operation',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        rows: 3,
        gridCol: 24,
        value: progress.fileCompany.scope_of_operation,
        order: 1
      }),
      new FormRadio({
        label: '私募基金管理人',
        key: 'fileCompany.if_administrant',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        radioType: 2,
        value: progress.fileCompany.if_administrant,
        options: status_arr,
        order: 2
      }),
      new FormInputText({
        label: '管理人名称',
        key: 'administrant_name',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        value: progress.administrant_name,
        order: 3
      }),
      new FormInputText({
        label: '管理人证书号',
        key: 'administrant_id',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        value: progress.administrant_id,
        order: 4
      }),
      new FormRadio({
        label: '授权董事长或执行董事对公司管理的私募产品的投资做出决定',
        key: 'fileCompany.if_director_decide_Investment',
        required: true,
        hasNoColon: true,
        radioType: 2,
        isDisabled: isDisabled,
        value: progress.fileCompany.if_director_decide_Investment,
        options: status_arr,
        order: 5
      }),
      new FormRadio({
        label: '设立董事会',
        key: 'fileCompany.set_board_of_directors',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        radioType: 2,
        value: progress.fileCompany.set_board_of_directors,
        options: status_arr,
        order: 6
      }),

      new FormInputText({
        label: '董事每届任期',
        key: 'fileCompany.years_board_of_directors',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        value: progress.fileCompany.years_board_of_directors,
        order: 7
      }),

      new FormRadio({
        label: '设副董事长',
        key: 'fileCompany.set_vice_chairman',
        required: true,
        isDisabled: isDisabled,
        hasNoColon: true,
        radioType: 2,
        value: progress.fileCompany.set_vice_chairman,
        options: status_arr,
        order: 8
      }),
      new FormRadio({
        label: '由董事会决定聘用、解聘承办公司审计业务的会计师事务所',
        key: 'fileCompany.if_accounting_firm',
        required: true,
        radioType: 2,
        isDisabled: isDisabled,
        hasNoColon: true,
        options: status_arr,
        value: progress.fileCompany.if_accounting_firm,
        order: 9
      }),
      new FormRadio({
        label: '设立监事会',
        key: 'fileCompany.set_board_of_supervisors',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        radioType: 2,
        value: progress.fileCompany.set_board_of_supervisors,
        options: status_arr,
        order: 10
      }),

      new FormInputText({
        label: '监事每届任期',
        key: 'fileCompany.years_person_board_of_supervisors',
        required: true,
        hasNoColon: true,
        isDisabled: isDisabled,
        type: 'number',
        addOnAffter: '年',
        value: progress.fileCompany.years_person_board_of_supervisors,
        order: 11
      }),
    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }

}
