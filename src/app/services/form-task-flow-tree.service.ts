import { Injectable } from '@angular/core';
import { FormInputText, FormDatePicker, FormSwitch, BaseFormControls, FormRadio, FormDropdown, FormCascader, FormTextarea, FormCheckbox } from '../classes';
import { CustomerInProgressModel } from '../models';
import { bussinseLicenseReg, emailReg, phoneReg } from '../tools/global';
import { of } from 'rxjs';
import { PublicService } from './public.service';



@Injectable({
  providedIn: 'root'
})
export class FormTaskFlowTreeService {
  constructor(private publicService: PublicService) { }
  // 设立Form
  getSetUpForm(progress: CustomerInProgressModel = new CustomerInProgressModel(), isDisabled: boolean = false) {
    const ngStyle = { 'background-color': '#f5f5f5', 'color': 'rgba(0,0,0,0.25)' }
    const formData: BaseFormControls<string>[] = [
      new FormRadio({
        key: 'org_class',
        label: '企业大类',
        required: true,
        isDisabled: isDisabled,
        radioType: 2,
        value: Number(progress.org_class),
        options: [
          { key: '投资类企业', value: 1 },
          { key: '总部企业', value: 2 },
          { key: '双创企业', value: 3 },
          { key: '其他企业', value: 4 },
        ],
        order: 1
      }),
      new FormRadio({
        key: 'org_structure',
        label: '企业架构',
        required: true,
        radioType: 2,
        isDisabled: isDisabled,
        value: Number(progress.org_structure),
        options: [
          { key: '有限合伙', value: 1 },
          { key: '有限公司', value: 2 },
        ],
        order: 2
      }),
      new FormCascader({
        key: 'small_class',
        label: '企业小类别',
        required: true,
        isDisabled: isDisabled,
        value: progress.values,
        nzOptions: this.publicService.copyData(progress.nzOptions),//   /**解决循环引用问题，现在还不明白这里bug的具体机制问题 */
        order: 3
      }),
      new FormDropdown({
        key: 'org_big_type',
        label: '企业类型',
        required: true,
        isDisabled: isDisabled,
        width: '16em',
        value: progress.org_big_type,
        options: progress.org_big_type_options,
        order: 4
      }),
      new FormRadio({
        key: 'inputArg.start_name',
        label: '冠名类型',
        required: true,
        isDisabled: isDisabled,
        radioType: 2,
        value: Number(progress.inputArg.start_name),
        options: [
          { key: '冠省名', value: 1, text: '江西省' },
          { key: '冠市名', value: 2, text: '九江市' },
          { key: '冠县名', value: 3, text: '共青城' }
        ],
        order: 5
      }),
      new FormInputText({
        key: 'inputArg.short_name',
        label: '企业字号',
        required: true,
        isDisabled: isDisabled,
        value: progress.inputArg.short_name || '',
        order: 6
      }),
      new FormInputText({
        key: 'inputArg.biz_desc',
        label: '行业表述',
        required: true,
        isDisabled: isDisabled,
        value: progress.inputArg.biz_desc,
        order: 7
      }),
      new FormInputText({
        key: 'inputArg.org_style',
        label: '组织形式',
        isDisabled: isDisabled,
        value: progress.inputArg.org_style,
        order: 8
      }),

      new FormCheckbox({
        key: 'inputArg.append_city',
        label: '名称整理',
        isDisabled: isDisabled,
        isAsRadio: true,
        isHidden: Number(progress.inputArg.start_name) != 3,
        checkOptions: [
          { label: '加市字', value: 'T', checked: progress.inputArg.append_city == 'T' },
        ],
        order: 9
      }),

      new FormInputText({
        key: 'customer_name',
        label: '企业名称',
        required: true,
        readonly: true,
        ngStyle: ngStyle,
        value: progress.customer_name,
        order: 10
      }),
      new FormSwitch({
        key: 'businessPeriodInfinite',
        label: '经营期限是否长期',
        openText: '是',
        closeText: '否',
        value: progress.businessPeriodInfinite,
        order: 11
      }),

      new FormDatePicker({
        key: 'last_day_4_pay',
        label: '缴付期限', //付款最后期限，通常=customer_org_end_date，当customer_org_end_date 为空时，需要客户填写
        required: progress.businessPeriodInfinite,
        isDisabled: isDisabled,
        isRange: false,
        isHidden: !progress.businessPeriodInfinite,
        value: progress.last_day_4_pay ? new Date(progress.last_day_4_pay) : null,
        order: 12
      }),

      new FormInputText({
        key: 'businessPeriod',
        label: '经营期限',
        required: !progress.businessPeriodInfinite,
        isDisabled: isDisabled,
        addOnAffter: '年',
        isHidden: !!progress.businessPeriodInfinite,
        value: progress.businessPeriod,
        order: 13
      }),

      new FormInputText({
        key: 'inputArg.registered_capital',
        label: '注册认缴资金',
        type: 'number',
        required: true,
        addOnAffter: '万元',
        isDisabled: isDisabled,
        value: progress.inputArg.registered_capital,
        order: 14
      }),
      new FormInputText({
        key: 'inputArg.paid_capital',
        label: '注册实缴资金',
        required: true,
        type: 'number',
        addOnAffter: '万元',
        isDisabled: isDisabled,
        value: progress.inputArg.paid_capital || 0,
        order: 15
      }),
      // 有限公司叫  股东个数   有限合伙 ---合伙人个数
      new FormInputText({
        key: 'inputArg.partner_count',
        label: progress.org_structure == 1 ? '合伙人个数' : '股东个数',
        required: true,
        placeholder: '（含机构）',
        isDisabled: isDisabled,
        type: 'number',
        addOnAffter: '个',
        value: progress.inputArg.partner_count,
        order: 16
      }),
      // 有限公司叫  机构股东人数   有限合伙 ---机构合伙人数
      new FormInputText({
        key: 'inputArg.org_partner_count',
        label: progress.org_structure == 1 ? '机构合伙人数' : '机构股东人数',
        required: true,
        isDisabled: isDisabled,
        type: 'number',
        addOnAffter: '个',
        placeholder: '（含资管产品）',
        value: progress.inputArg.org_partner_count || "0",
        order: 17
      }),
      new FormInputText({
        key: 'inputArg.GP_count',
        label: 'GP个数',
        type: 'number',
        addOnAffter: '个',
        required: progress.org_structure == 1,
        isDisabled: isDisabled,
        isHidden: progress.org_structure == 2,
        value: progress.inputArg.GP_count || 1,
        order: 18
      }),

      new FormInputText({
        key: 'inputArg.exection_count',
        label: '执行事务合伙人个数',
        required: progress.org_structure == 1,
        isDisabled: isDisabled,
        type: 'number',
        addOnAffter: '个',
        isHidden: progress.org_structure == 2,
        value: progress.inputArg.exection_count || 1,
        order: 19
      }),
      new FormInputText({
        key: 'inputArg.GP_total_capital',
        label: 'GP认缴金额',
        type: 'number',
        addOnAffter: '万元',
        required: progress.org_structure == 1,
        isDisabled: isDisabled,
        isHidden: progress.org_structure == 2,
        value: progress.inputArg.GP_total_capital,
        order: 20
      }),

      new FormInputText({
        key: 'inputArg.real_control_name',
        label: '实控人名称',
        required: true,
        placeholder: '请输入实控人名称',
        isDisabled: isDisabled,
        value: progress.inputArg.real_control_name,
        order: 21
      }),
      new FormInputText({
        key: 'inputArg.real_control_phone',
        label: '实控人电话',
        required: true,
        isDisabled: isDisabled,
        placeholder: '请输入实控人电话',
        customCheck: phoneReg,
        value: progress.inputArg.real_control_phone,
        order: 22
      }),
      new FormInputText({
        key: 'inputArg.real_control_email',
        label: '实控人Email',
        placeholder: '请输入实控人Email',
        customCheck: emailReg,
        isDisabled: isDisabled,
        value: progress.inputArg.real_control_email,
        order: 23
      }),
      new FormTextarea({
        key: 'inputArg.capital_investment',
        label: '资金投向',
        required: true,
        placeholder: '资金投向',
        isDisabled: isDisabled,
        value: progress.inputArg.capital_investment,
        order: 24
      }),

      new FormInputText({
        key: 'customerFromSource.text',
        label: '客户来源 ',
        required: true,
        addOnAffter: '选择',
        readonly: true,
        ngStyle: ngStyle,
        hasAffterEvent: true,
        button_isDisabled: isDisabled,
        value: progress.customerFromSource.text,
        order: 25
      }),
      new FormInputText({
        key: 'customerPerson.c_person_name',
        label: '客户联络人',
        required: true,
        addOnAffter: '选择',
        readonly: true,
        ngStyle: ngStyle,
        hasAffterEvent: true,
        button_isDisabled: isDisabled,
        value: progress.customerPerson ? progress.customerPerson.c_person_name : '',
        order: 26
      }),
    ]

    return of(formData.sort((a, b) => a.order - b.order));
  }
  // 迁入Form
  getImmigrationForm(progress: CustomerInProgressModel = new CustomerInProgressModel(), isDisabled: boolean = false, type: number | string = 2) {
    const ngStyle = { 'background-color': '#f5f5f5', 'color': 'rgba(0,0,0,0.25)' };
    const moveBeforeBusinessPeriod = progress.moveBefore.isIndefiniteDuration ?
      (progress.moveBefore.customer_org_begin_date ? new Date(progress.moveBefore.customer_org_begin_date) : null) :
      (progress.moveBefore.customer_org_end_date ? [new Date(progress.moveBefore.customer_org_begin_date), new Date(progress.moveBefore.customer_org_end_date)] : null);
    const formData: BaseFormControls<string>[] = [
      new FormInputText({
        key: 'moveBefore.customer_name',
        label: '原公司名称',
        required: true,
        value: progress.moveBefore.customer_name,
        isDisabled: isDisabled,
        order: 1
      }),
      new FormTextarea({
        key: 'moveBefore.scope_of_operation',
        label: '原经营范围',
        required: true,
        isDisabled: isDisabled,
        rows: 3,
        value: progress.moveBefore.scope_of_operation,
        order: 2
      }),
      new FormInputText({
        key: 'moveBefore.registered_address',
        label: '原注册地址',
        required: true,
        isDisabled: isDisabled,
        value: progress.moveBefore.registered_address,
        order: 3
      }),

      new FormSwitch({
        key: 'moveBefore.isIndefiniteDuration',
        label: '原经营期限是否无限期',
        required: true,
        isDisabled: isDisabled,
        openText: '是',
        closeText: '否',
        value: progress.moveBefore.isIndefiniteDuration,
        order: 4
      }),
      // public customer_org_begin_date: any;  // 经营期限开始时间
      // public customer_org_end_date: any;  // 经营期限结束时间
      new FormDatePicker({
        key: 'moveBefore.customer_lifecycle',
        label: '原经营期限',
        required: true,
        isDisabled: isDisabled,
        isRange: !(progress.moveBefore.isIndefiniteDuration),
        value: moveBeforeBusinessPeriod || null,
        order: 5
      }),
      new FormInputText({
        key: 'moveBefore.customer_org_id',
        label: '原统一社会信用代码',
        required: true,
        isDisabled: isDisabled,
        customCheck: bussinseLicenseReg,
        hintError: '请填写正确的统一社会信用代码',
        value: progress.moveBefore.customer_org_id,
        order: 6
      }),

      new FormRadio({
        key: 'org_class',
        label: '迁入的企业大类',
        required: true,
        isDisabled: isDisabled,
        radioType: 2,
        // isHidden: false,
        value: Number(progress.org_class),
        options: [
          { key: '投资类企业', value: 1 },
          { key: '总部企业', value: 2 },
          { key: '双创企业', value: 3 },
          { key: '其他企业', value: 4 },
        ],
        order: 7
      }),
      new FormRadio({
        key: 'org_structure',
        label: '迁入的企业架构',
        required: true,
        radioType: 2,
        isDisabled: isDisabled,
        value: Number(progress.org_structure),
        options: [
          { key: '有限合伙', value: 1 },
          { key: '有限公司', value: 2 },
        ],
        order: 8
      }),
      new FormCascader({
        key: 'small_class',
        label: '迁入的企业小类别',
        // width: '8em',
        required: true,
        isDisabled: isDisabled,
        value: progress.values,
        nzOptions: this.publicService.copyData(progress.nzOptions),
        order: 9
      }),
      new FormDropdown({
        key: 'org_big_type',
        label: '迁入的企业类型',
        required: true,
        isDisabled: isDisabled,
        width: '16em',
        value: progress.org_big_type,
        options: progress.org_big_type_options,
        order: 10
      }),
      new FormRadio({
        key: 'inputArg.start_name',
        label: '迁入的冠名类型',
        required: true,
        isDisabled: isDisabled,
        radioType: 2,
        value: Number(progress.inputArg.start_name),
        options: [
          { key: '冠省名', value: 1, text: '江西省' },
          { key: '冠市名', value: 2, text: '九江市' },
          { key: '冠县名', value: 3, text: '共青城' }
        ],
        order: 11
      }),
      new FormInputText({
        key: 'inputArg.short_name',
        label: '迁入的企业字号',
        required: true,
        isDisabled: isDisabled,
        value: progress.inputArg.short_name || '',
        order: 12
      }),
      new FormInputText({
        key: 'inputArg.biz_desc',
        label: '迁入的行业表述',
        required: true,
        isDisabled: isDisabled,
        value: progress.inputArg.biz_desc,
        order: 13
      }),
      new FormInputText({
        key: 'inputArg.org_style',
        label: '迁入的组织形式',
        isDisabled: isDisabled,
        value: progress.inputArg.org_style,
        order: 14
      }),

      new FormCheckbox({
        key: 'inputArg.append_city',
        label: '迁入的名称整理',
        isDisabled: isDisabled,
        isAsRadio: true,
        isHidden: Number(progress.inputArg.start_name) != 3,
        checkOptions: [
          { label: '加市字', value: 'T', checked: progress.inputArg.append_city == 'T' },
        ],
        order: 15
      }),

      new FormInputText({
        key: 'customer_name',
        label: '迁入的企业名称',
        required: true,
        readonly: true,
        ngStyle: ngStyle,
        value: progress.customer_name,
        order: 16
      }),
      new FormSwitch({
        key: 'businessPeriodInfinite',
        label: '经营期限是否长期',
        openText: '是',
        closeText: '否',
        value: progress.businessPeriodInfinite,
        order: 17
      }),

      new FormDatePicker({
        key: 'last_day_4_pay',
        label: '缴付期限', //付款最后期限，通常=customer_org_end_date，当customer_org_end_date 为空时，需要客户填写
        required: progress.businessPeriodInfinite,
        isDisabled: isDisabled,
        isRange: false,
        isHidden: !progress.businessPeriodInfinite,
        value: progress.last_day_4_pay || null,
        order: 18
      }),

      new FormInputText({
        key: 'businessPeriod',
        label: '经营期限',
        required: !progress.businessPeriodInfinite,
        isDisabled: isDisabled,
        addOnAffter: '年',
        isHidden: !!progress.businessPeriodInfinite,
        value: progress.businessPeriod,
        order: 19
      }),

      new FormInputText({
        key: 'inputArg.registered_capital',
        label: '注册认缴资金',
        type: 'number',
        required: true,
        addOnAffter: '万元',
        isDisabled: isDisabled,
        value: progress.inputArg.registered_capital,
        order: 20
      }),
      new FormInputText({
        key: 'inputArg.paid_capital',
        label: '注册实缴资金',
        required: true,
        type: 'number',
        addOnAffter: '万元',
        isDisabled: isDisabled,
        value: progress.inputArg.paid_capital || 0,
        order: 21
      }),
      // 有限公司叫  股东个数   有限合伙 ---合伙人个数
      new FormInputText({
        key: 'inputArg.partner_count',
        label: progress.org_structure == 1 ? '合伙人个数' : '股东个数',
        required: true,
        placeholder: '（含机构）',
        isDisabled: isDisabled,
        type: 'number',
        addOnAffter: '个',
        value: progress.inputArg.partner_count,
        order: 22
      }),
      // 有限公司叫  机构股东人数   有限合伙 ---机构合伙人数
      new FormInputText({
        key: 'inputArg.org_partner_count',
        label: progress.org_structure == 1 ? '机构合伙人数' : '机构股东人数',
        required: true,
        isDisabled: isDisabled,
        type: 'number',
        addOnAffter: '个',
        placeholder: '（含资管产品）',
        value: progress.inputArg.org_partner_count,
        order: 23
      }),
      new FormInputText({
        key: 'inputArg.GP_count',
        label: 'GP个数',
        type: 'number',
        addOnAffter: '个',
        required: true,
        isDisabled: isDisabled,
        isHidden: progress.org_structure == 2,
        value: progress.inputArg.GP_count || 1,
        order: 24
      }),

      new FormInputText({
        key: 'inputArg.exection_count',
        label: '执行事务合伙人个数',
        required: true,
        isDisabled: isDisabled,
        type: 'number',
        addOnAffter: '个',
        isHidden: progress.org_structure == 2,
        value: progress.inputArg.exection_count || 1,
        order: 25
      }),
      new FormInputText({
        key: 'inputArg.GP_total_capital',
        label: 'GP认缴金额',
        type: 'number',
        addOnAffter: '万元',
        required: true,
        isDisabled: isDisabled,
        isHidden: progress.org_structure == 2,
        value: progress.inputArg.GP_total_capital,
        order: 26
      }),

      new FormInputText({
        key: 'inputArg.real_control_name',
        label: '实控人名称',
        required: true,
        placeholder: '请输入实控人名称',
        isDisabled: isDisabled,
        value: progress.inputArg.real_control_name,
        order: 27
      }),
      new FormInputText({
        key: 'inputArg.real_control_phone',
        label: '实控人电话',
        required: true,
        isDisabled: isDisabled,
        placeholder: '请输入实控人电话',
        customCheck: phoneReg,
        value: progress.inputArg.real_control_phone,
        order: 28
      }),
      new FormInputText({
        key: 'inputArg.real_control_email',
        label: '实控人Email',
        placeholder: '请输入实控人Email',
        customCheck: emailReg,
        isDisabled: isDisabled,
        value: progress.inputArg.real_control_email,
        order: 29
      }),
      new FormTextarea({
        key: 'inputArg.capital_investment',
        label: '资金投向',
        required: true,
        placeholder: '资金投向',
        isDisabled: isDisabled,
        value: progress.inputArg.capital_investment,
        order: 30
      }),

      new FormInputText({
        key: 'customerFromSource.text',
        label: '客户来源 ',
        required: true,
        addOnAffter: '选择',
        readonly: true,
        ngStyle: ngStyle,
        hasAffterEvent: true,
        button_isDisabled: isDisabled,
        value: progress.customerFromSource.text,
        order: 31
      }),
      new FormInputText({
        key: 'customerPerson.c_person_name',
        label: '客户联络人',
        required: true,
        addOnAffter: '选择',
        readonly: true,
        ngStyle: ngStyle,
        hasAffterEvent: true,
        button_isDisabled: isDisabled,
        value: progress.customerPerson ? progress.customerPerson.c_person_name : '',
        order: 32
      }),
    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }
  // 迁转Form
  getMovingForm(progress: CustomerInProgressModel = new CustomerInProgressModel(), isDisabled: boolean = false, type: number | string = 3) {
    const ngStyle = { 'background-color': '#f5f5f5', 'color': 'rgba(0,0,0,0.25)' };
    const moveBeforeBusinessPeriod = progress.moveBefore.isIndefiniteDuration ? (progress.moveBefore.customer_org_begin_date ? new Date(progress.moveBefore.customer_org_begin_date) : null) : (progress.moveBefore.customer_org_end_date ? [new Date(progress.moveBefore.customer_org_begin_date), new Date(progress.moveBefore.customer_org_end_date)] : null);
    const formData: BaseFormControls<string>[] = [
      new FormRadio({
        key: 'moveBefore.org_structure',
        label: '迁转类型',
        required: true,
        isDisabled: true,
        value: 1,
        options: [
          { key: '有限公司转合伙', value: 1 },
        ],
        order: 2
      }),
      // 
      new FormCascader({
        key: 'moveBefore.small_class',
        label: '原公司小类别',
        required: true,
        isDisabled: isDisabled,
        value: progress.moveBefore.values,
        nzOptions: this.publicService.copyData(progress.moveBefore.nzOptions),
        order: 3
      }),
      new FormInputText({
        key: 'moveBefore.customer_name',
        label: '原公司名称',
        required: true,
        value: progress.moveBefore.customer_name,
        isDisabled: isDisabled,
        order: 4
      }),
      new FormTextarea({
        key: 'moveBefore.scope_of_operation',
        label: '原经营范围',
        required: true,
        rows: 3,
        isDisabled: isDisabled,
        value: progress.moveBefore.scope_of_operation,
        order: 5
      }),
      new FormInputText({
        key: 'moveBefore.registered_address',
        label: '原注册地址',
        required: true,
        isDisabled: isDisabled,
        value: progress.moveBefore.registered_address,
        order: 6
      }),

      new FormSwitch({
        key: 'moveBefore.isIndefiniteDuration',
        label: '无限期',
        required: true,
        isDisabled: isDisabled,
        value: progress.moveBefore.isIndefiniteDuration,
        order: 7
      }),
      new FormDatePicker({
        key: 'moveBefore.customer_lifecycle',
        label: '原经营期限',
        required: true,
        isDisabled: isDisabled,
        isRange: !(progress.moveBefore.isIndefiniteDuration),
        value: moveBeforeBusinessPeriod || null,
        order: 8
      }),

      // new FormDatePicker({
      //   key: 'moveBefore.customer_lifecycle',
      //   label: '原经营期限',
      //   required: true,
      //   isDisabled: isDisabled,
      //   isRange: !(progress.moveBefore.isIndefiniteDuration),
      //   value: moveBeforeBusinessPeriod || null,
      //   order: 8
      // }),

      new FormInputText({
        key: 'moveBefore.customer_org_id',
        label: '原统一社会信用代码',
        required: true,
        isDisabled: isDisabled,
        customCheck: bussinseLicenseReg,
        hintError: '请填写正确的统一社会信用代码',
        value: progress.moveBefore.customer_org_id,
        order: 9
      }),

      new FormRadio({
        key: 'org_class',
        label: '企业大类',
        required: true,
        isDisabled: isDisabled,
        radioType: 2,
        // isHidden: false,
        value: Number(progress.org_class),
        options: [
          { key: '投资类企业', value: 1 },
          { key: '总部企业', value: 2 },
          { key: '双创企业', value: 3 },
          { key: '其他企业', value: 4 },
        ],
        order: 10
      }),
      new FormRadio({
        key: 'org_structure',
        label: '企业架构',
        required: true,
        radioType: 2,
        isDisabled: isDisabled,
        value: Number(progress.org_structure),
        options: [
          { key: '有限合伙', value: 1 },
          { key: '有限公司', value: 2 },
        ],
        order: 11
      }),
      new FormCascader({
        key: 'small_class',
        label: '企业小类别',
        // width: '8em',
        required: true,
        isDisabled: isDisabled,
        value: progress.values,
        nzOptions: this.publicService.copyData(progress.nzOptions),
        order: 12
      }),
      new FormDropdown({
        key: 'org_big_type',
        label: '企业类型',
        required: true,
        isDisabled: isDisabled,
        width: '16em',
        value: progress.org_big_type,
        options: progress.org_big_type_options,
        order: 13
      }),
      new FormRadio({
        key: 'inputArg.start_name',
        label: '冠名类型',
        required: true,
        isDisabled: isDisabled,
        radioType: 2,
        value: Number(progress.inputArg.start_name),
        options: [
          { key: '冠省名', value: 1, text: '江西省' },
          { key: '冠市名', value: 2, text: '九江市' },
          { key: '冠县名', value: 3, text: '共青城' }
        ],
        order: 14
      }),
      new FormInputText({
        key: 'inputArg.short_name',
        label: '企业字号',
        required: true,
        isDisabled: isDisabled,
        value: progress.inputArg.short_name || '',
        order: 15
      }),
      new FormInputText({
        key: 'inputArg.biz_desc',
        label: '行业表述',
        required: true,
        isDisabled: isDisabled,
        value: progress.inputArg.biz_desc,
        order: 16
      }),
      new FormInputText({
        key: 'inputArg.org_style',
        label: '组织形式',
        isDisabled: isDisabled,
        value: progress.inputArg.org_style,
        order: 17
      }),

      new FormCheckbox({
        key: 'inputArg.append_city',
        label: '名称整理',
        isDisabled: isDisabled,
        isAsRadio: true,
        isHidden: Number(progress.inputArg.start_name) != 3,
        checkOptions: [
          { label: '加市字', value: 'T', checked: progress.inputArg.append_city == 'T' },
        ],
        order: 18
      }),

      new FormInputText({
        key: 'customer_name',
        label: '企业名称',
        required: true,
        readonly: true,
        ngStyle: ngStyle,
        value: progress.customer_name,
        order: 19
      }),
      new FormSwitch({
        key: 'businessPeriodInfinite',
        label: '经营期限是否长期',
        openText: '是',
        closeText: '否',
        value: progress.businessPeriodInfinite,
        order: 20
      }),

      new FormDatePicker({
        key: 'last_day_4_pay',
        label: '缴付期限', //付款最后期限，通常=customer_org_end_date，当customer_org_end_date 为空时，需要客户填写
        required: progress.businessPeriodInfinite,
        isDisabled: isDisabled,
        isRange: false,
        isHidden: !progress.businessPeriodInfinite,
        value: progress.last_day_4_pay,
        order: 21
      }),

      new FormInputText({
        key: 'businessPeriod',
        label: '经营期限',
        required: !progress.businessPeriodInfinite,
        isDisabled: isDisabled,
        addOnAffter: '年',
        isHidden: !!progress.businessPeriodInfinite,
        value: progress.businessPeriod,
        order: 22
      }),

      new FormInputText({
        key: 'inputArg.registered_capital',
        label: '注册认缴资金',
        type: 'number',
        required: true,
        addOnAffter: '万元',
        isDisabled: isDisabled,
        value: progress.inputArg.registered_capital,
        order: 23
      }),
      new FormInputText({
        key: 'inputArg.paid_capital',
        label: '注册实缴资金',
        required: true,
        type: 'number',
        addOnAffter: '万元',
        isDisabled: isDisabled,
        value: progress.inputArg.paid_capital || 0,
        order: 24
      }),
      // 有限公司叫  股东个数   有限合伙 ---合伙人个数
      new FormInputText({
        key: 'inputArg.partner_count',
        label: progress.org_structure == 1 ? '合伙人个数' : '股东个数',
        required: true,
        placeholder: '（含机构）',
        isDisabled: isDisabled,
        type: 'number',
        addOnAffter: '个',
        value: progress.inputArg.partner_count,
        order: 25
      }),
      // 有限公司叫  机构股东人数   有限合伙 ---机构合伙人数
      new FormInputText({
        key: 'inputArg.org_partner_count',
        label: progress.org_structure == 1 ? '机构合伙人数' : '机构股东人数',
        required: true,
        isDisabled: isDisabled,
        type: 'number',
        addOnAffter: '个',
        placeholder: '（含资管产品）',
        value: progress.inputArg.org_partner_count,
        order: 26
      }),
      new FormInputText({
        key: 'inputArg.GP_count',
        label: 'GP个数',
        type: 'number',
        addOnAffter: '个',
        required: true,
        isDisabled: isDisabled,
        isHidden: progress.org_structure == 2,
        value: progress.inputArg.GP_count || 1,
        order: 27
      }),

      new FormInputText({
        key: 'inputArg.exection_count',
        label: '执行事务合伙人个数',
        required: true,
        isDisabled: isDisabled,
        type: 'number',
        addOnAffter: '个',
        isHidden: progress.org_structure == 2,
        value: progress.inputArg.exection_count || 1,
        order: 28
      }),
      new FormInputText({
        key: 'inputArg.GP_total_capital',
        label: 'GP认缴金额',
        type: 'number',
        addOnAffter: '万元',
        required: true,
        isDisabled: isDisabled,
        isHidden: progress.org_structure == 2,
        value: progress.inputArg.GP_total_capital,
        order: 29
      }),

      new FormInputText({
        key: 'inputArg.real_control_name',
        label: '实控人名称',
        required: true,
        placeholder: '请输入实控人名称',
        isDisabled: isDisabled,
        value: progress.inputArg.real_control_name,
        order: 30
      }),
      new FormInputText({
        key: 'inputArg.real_control_phone',
        label: '实控人电话',
        required: true,
        isDisabled: isDisabled,
        placeholder: '请输入实控人电话',
        customCheck: phoneReg,
        value: progress.inputArg.real_control_phone,
        order: 31
      }),
      new FormInputText({
        key: 'inputArg.real_control_email',
        label: '实控人Email',
        placeholder: '请输入实控人Email',
        customCheck: emailReg,
        isDisabled: isDisabled,
        value: progress.inputArg.real_control_email,
        order: 32
      }),
      new FormTextarea({
        key: 'inputArg.capital_investment',
        label: '资金投向',
        required: true,
        placeholder: '资金投向',
        isDisabled: isDisabled,
        value: progress.inputArg.capital_investment,
        order: 33
      }),

      new FormInputText({
        key: 'customerFromSource.text',
        label: '客户来源 ',
        required: true,
        addOnAffter: '选择',
        readonly: true,
        ngStyle: ngStyle,
        hasAffterEvent: true,
        button_isDisabled: isDisabled,
        value: progress.customerFromSource.text,
        order: 34
      }),
      new FormInputText({
        key: 'customerPerson.c_person_name',
        label: '客户联络人',
        required: true,
        addOnAffter: '选择',
        readonly: true,
        ngStyle: ngStyle,
        hasAffterEvent: true,
        button_isDisabled: isDisabled,
        value: progress.customerPerson ? progress.customerPerson.c_person_name : '',
        order: 35
      }),
    ]

    return of(formData.sort((a, b) => a.order - b.order));
  }
}