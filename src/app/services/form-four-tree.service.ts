import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BaseFormControls, FormCheckbox, FormDivider, FormDropdown, FormInputText, FormRadio } from '../classes';
import { FormUpload } from '../classes/form-upload';
import { CustomerInProgressModel, CustomerRelationOrgModel, CustomerRelationPersonModel, OrgBigType, OrgClass, RelationOrgMode, RelationPersonMode } from '../models';
import { API } from '../tools/API';
import { fundInvestOptions, otherInvestOptions, status_arr, status_num_arr } from '../tools/global'
import { MyStorageService } from './my-storage.service';
import { ProgressFunWrapService } from './progress-fun-wrap.service';

@Injectable({
  providedIn: 'root'
})
export class FormFourTreeService {
  // 是否刻章
  stamp_carving_boo: number = 1;
  //企业类型是否是基金类
  isFund: boolean = false;
  constructor(private mystor: MyStorageService) { }
  fourFormData(progress: CustomerInProgressModel = new CustomerInProgressModel) {
    let [docking, financialDocking, cashier, accounting, parentCompany] = [new CustomerRelationPersonModel(), new CustomerRelationPersonModel(), new CustomerRelationPersonModel(), new CustomerRelationPersonModel(), new CustomerRelationOrgModel()]
    /**这里必须给 R_person_mode赋值*/
    docking.R_person_mode = RelationPersonMode.docking;
    financialDocking.R_person_mode = RelationPersonMode.financialDocking; CustomerRelationPersonModel
    cashier.R_person_mode = RelationPersonMode.cashier;
    accounting.R_person_mode = RelationPersonMode.accounting;
    parentCompany.R_org_mode = RelationOrgMode.parentCompany;
    for (let item of progress.relationPerson) {
      switch (item.R_person_mode) {
        case RelationPersonMode.docking:
          docking = item;
          break;
        case RelationPersonMode.financialDocking:
          financialDocking = item;
          break;
        case RelationPersonMode.cashier:
          cashier = item;
          break;
        case RelationPersonMode.accounting:
          accounting = item;
          break;
        default:
          break;
      }
    }


    for (let item of progress.relationOrg) {
      switch (item.R_org_mode) {
        case RelationOrgMode.parentCompany:
          parentCompany = item;
          // console.log('parentCompany::', parentCompany)
          break;
        default:
          break;
      }
    }



    const ngStyle = { 'background-color': '#f5f5f5', 'color': 'rgba(0,0,0,0.25)' }
    let formData: BaseFormControls<string>[] = [
      new FormInputText({
        label: '注册地址',
        key: 'registered_address',
        placeholder: '请输入注册地址',
        required: true,
        isDisabled: false,
        value: progress.registered_address,
        order: 3
      }),

      new FormInputText({
        label: '企业对接人',
        key: 'docking.R_person_name',
        placeholder: '请添加企业对接人',
        required: true,
        readonly: true,
        ngStyle: ngStyle,
        addOnAffter: '查看',
        hasAffterEvent: true,
        value: docking.R_person_name,
        completeData: docking,
        order: 4
      }),
      new FormInputText({
        label: '财务对接人',
        key: 'financialDocking.R_person_name',
        placeholder: '请添加财务对接人',
        required: true,
        readonly: true,
        ngStyle: ngStyle,
        addOnAffter: '查看',
        hasAffterEvent: true,
        completeData: financialDocking,
        value: financialDocking.R_person_name || '',
        order: 5
      }),


      new FormInputText({
        label: '财务出纳',
        key: 'cashier.R_person_name',
        placeholder: '请添加财务出纳',
        required: true,
        isDisabled: false,
        readonly: true,
        ngStyle: ngStyle,
        addOnAffter: '查看',
        hasAffterEvent: true,
        completeData: cashier,
        value: cashier.R_person_name || '',
        order: 6
      }),
      new FormInputText({
        label: '财务复核',
        key: 'accounting.R_person_name',
        placeholder: '请添加财务复核',
        required: true,
        isDisabled: false,
        readonly: true,
        ngStyle: ngStyle,
        addOnAffter: '查看',
        hasAffterEvent: true,
        completeData: accounting,
        value: accounting.R_person_name || '',
        order: 7
      }),

      new FormInputText({
        label: '母公司',
        key: 'parentCompany.R_org_name',
        placeholder: '请添加母公司',
        required: true,
        isDisabled: false,
        readonly: true,
        ngStyle: ngStyle,
        addOnAffter: '查看',
        hasAffterEvent: true,
        completeData: parentCompany,
        value: parentCompany.R_org_name || '',
        order: 8
      }),
      new FormInputText({
        label: '企业传真',
        key: 'org_fax',
        placeholder: '请输入企业传真',
        required: true,
        isDisabled: false,
        value: progress.org_fax || '',
        order: 9
      }),
      new FormInputText({
        label: '员工个数',
        key: 'num_of_employee',
        placeholder: '请输入员工个数',
        required: true,
        // isDisabled: false,
        value: progress.num_of_employee || '',
        order: 10
      }),
      new FormInputText({
        label: '管理人名称',
        key: 'administrant_name',
        placeholder: '请输入管理人名称',
        required: true,
        isDisabled: false,
        value: progress.administrant_name || '',
        order: 11
      }),

      new FormInputText({
        label: '管理人编码',
        key: 'administrant_id',
        placeholder: '请输入管理人编码',
        required: true,
        isDisabled: false,
        value: progress.administrant_id,
        order: 12
      }),
      new FormRadio({
        label: '分页签署',
        key: 'if_paging_sign',
        required: true,
        radioType: 2,
        value: progress.if_paging_sign || 'T',
        options: status_arr,
        order: 13
      }),

      new FormUpload({
        label: '上传法人代表 / 执行事务<br />合伙人（委派代表）证件',
        key: 'real_control_url',
        nzAction: API.UploadFile,
        icon: 'plus',
        errorHint: '请上传证件',
        nzFileList: progress.real_control_url ? [
          {
            uid: '-1',
            name: progress.real_control || '证件',
            status: 'done',
            url: progress.real_control_url,
            thumbUrl: progress.real_control_url
          }
        ] : [],
        nzText: '上传',
        nzVisible: false,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        nzHeaders: { Authorization: 'Bearer ' + this.mystor.getObject(this.mystor.storKey.USER_INFO).token },
        order: 14
      }),
      new FormDivider({
        label: '刻章',
        key: 'divider1',
        gridCol: 24,
        dividerOrientation: 'left',
        order: 15
      }),

      new FormRadio({
        label: '是否刻公章/法人章/财务章',
        key: 'stamp_carving',
        required: true,
        radioType: 2,
        value: this.stamp_carving_boo,
        isDisabled: true,
        options: status_num_arr,
        order: 16
      }),
      new FormRadio({
        label: '是否刻发票章',
        key: 'preDemand.if_invoice_seal',
        required: true,
        radioType: 2,
        value: progress.preDemand.if_invoice_seal || 0,
        options: status_num_arr,
        order: 17
      }),
      new FormRadio({
        label: '是否刻合同专用章',
        key: 'preDemand.if_contract_seal',
        required: true,
        radioType: 2,
        value: progress.preDemand.if_contract_seal,
        options: status_num_arr,
        order: 18
      }),
      new FormDivider({
        label: '银行',
        key: 'divider2',
        gridCol: 24,
        dividerOrientation: 'left',
        order: 19
      }),
      new FormRadio({
        label: '是否开通银行短信通知',
        key: 'preDemand.if_short_message',
        required: true,
        radioType: 2,
        value: progress.preDemand.if_short_message,
        options: status_num_arr,
        order: 20
      }),
      new FormRadio({
        label: '是否开通银行理财账户',
        key: 'preDemand.if_financial_account',
        required: true,
        radioType: 2,
        value: progress.preDemand.if_financial_account,
        options: status_num_arr,
        order: 21
      }),
      new FormRadio({
        label: '后期是否涉及外汇业务',
        key: 'preDemand.if_foreign_exchange',
        required: true,
        radioType: 2,
        value: progress.preDemand.if_foreign_exchange,
        options: status_num_arr,
        order: 22
      }),


      new FormRadio({
        label: '后期是否涉及期货业务',
        key: 'preDemand.if_biz_futures',
        required: true,
        radioType: 2,
        value: progress.preDemand.if_biz_futures,
        options: status_num_arr,
        order: 23
      }),
      new FormRadio({
        label: '后期是否涉及证券业务',
        key: 'preDemand.if_biz_security',
        required: true,
        radioType: 2,
        value: progress.preDemand.if_biz_security,
        options: status_num_arr,
        order: 24
      }),

      new FormRadio({
        label: '是否需要开通募集监管账户',
        key: 'preDemand.if_raise_money_account',
        required: true,
        radioType: 2,
        value: progress.preDemand.if_raise_money_account,
        options: status_num_arr,
        order: 25
      }),

      new FormRadio({
        label: '是否需要开通基金托管账户',
        key: 'preDemand.if_fund_custody_account',
        required: true,
        radioType: 2,
        value: progress.preDemand.if_fund_custody_account,
        options: status_num_arr,
        order: 26
      }),

      new FormRadio({
        label: '开户银行选择',
        key: 'preDemand.pre_bank_sid',
        required: true,
        radioType: 2,
        gridCol: 16,
        value: progress.preDemand.pre_bank_sid,
        options: progress.allBank,
        order: 27
      }),
    ]

    //企业类型是否是基金类
    if (progress.org_class == OrgClass.investment) {
      switch (progress.org_big_type) {
        case OrgBigType.administrator:
        case OrgBigType.fund:
          this.isFund = true;
          break;
        // default:
        //   this.isFund = false;
      }
    }

    formData.unshift(this.isFund ? new FormDropdown({
      label: '行业投资方向',
      key: 'fund_focus',
      required: true,
      isDisabled: false,
      width: '12em',
      value: progress.fund_focus,
      options: fundInvestOptions[progress.org_big_type],
      order: 1
    }) : new FormDropdown({
      label: '行业投资方向',
      key: 'industry_focus',
      required: true,
      isDisabled: false,
      hor_label_nzSpan: 6,
      width: '12em',
      value: progress.industry_focus,
      options: otherInvestOptions,
      order: 2
    })
    )



    return of(formData.sort((a, b) => a.order - b.order));
  }

}
