import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BaseFormControls, FormDatePicker, FormDivider, FormDropdown, FormInputText, FormRadio } from '../classes';
import { FormUpload } from '../classes/form-upload';
import { CustomerPartnerModel, PartnerIdType } from '../models';
import { API } from '../tools/API';
import { emailReg, raceArr, partnerIdType, educationArr, politicalArr, partnerFormOfInvestmentArr, companyTypes } from '../tools/global';
import { MyStorageService } from './my-storage.service';

@Injectable({
  providedIn: 'root'
})

export class FormPartnerTreeService {
  constructor(private mystor: MyStorageService) { }
  partnerControlsForm(partner: CustomerPartnerModel = new CustomerPartnerModel(), org_structure: string = '1') {
    // console.log('@@@@@@@', org_structure, partner)
    const certificate_val = partnerIdType[partner.partner_is_person_or_org][0].value;
    const certificate_options = partnerIdType[partner.partner_is_person_or_org];
    // 是否填写负责人信息
    const is_write_fzr = partner.partner_is_person_or_org == '1'
    let formData: BaseFormControls<string>[] = [
      new FormRadio({
        key: 'partner_is_person_or_org',
        label: `${org_structure == "1" ? '合伙人' : '股东'}类型`,
        radioType: 2,
        required: true,
        value: '1',
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        options: companyTypes,
        order: 1
      }),
      new FormRadio({
        key: 'partner_id_type',
        label: '证件类型',
        radioType: 2,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        required: true,
        value: certificate_val,
        options: certificate_options,
        order: 2
      }),

      new FormRadio({
        key: 'if_limited',
        label: '合伙人属性',
        radioType: 2,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        required: true,
        value: partner.if_limited,
        options: [
          { value: 'F', key: '普通合伙人' },
          { value: 'T', key: '有限合伙人' }
        ],
        order: 3
      }),


      new FormRadio({
        key: 'if_excution_partner',
        label: '是否是执行事务合伙人',
        radioType: 2,
        required: true,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        isHidden: partner.if_limited == 'T',
        value: partner.if_excution_partner || 'F',
        options: [
          { value: "T", key: "是" },
          { value: "F", key: "否" }
        ],
        order: 4
      }),

      new FormRadio({
        key: 'partnar_sex',
        label: '性别',
        radioType: 2,
        value: partner.partnar_sex || 'M',
        required: true,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        options: [
          { key: '男', value: 'M' },
          { key: '女', value: 'F' }
        ],
        order: 5
      }),

      new FormInputText({
        key: 'partner_name',
        label: `${org_structure == "1" ? '合伙人' : '股东'}名称`,
        radioType: 2,
        required: true,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 6
      }),
      new FormInputText({
        key: 'partner_id_or_org_id',
        label: '证件号码',
        radioType: 2,
        required: true,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 7
      }),
      new FormInputText({
        key: 'partner_addr',
        label: '证件地址', // '企业营业场所',
        radioType: 2,
        required: true,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 8
      }),

      new FormDropdown({
        key: 'partner_race',
        label: '民族',
        radioType: 2,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        width: '16em',
        isHidden: partner.partner_id_type == PartnerIdType.idCard,
        required: true,
        value: partner.partner_race,
        options: raceArr,
        order: 9
      }),
      new FormDropdown({
        key: 'partner_education',
        label: '文化程度', // '企业营业场所',
        radioType: 2,
        required: true,
        isHidden: partner.partner_id_type == PartnerIdType.idCard,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        width: '16em',
        options: educationArr,
        order: 10
      }),
      new FormDropdown({
        key: 'partner_political',
        label: '政治面貌', // '企业营业场所',
        radioType: 2,
        required: true,
        isHidden: partner.partner_id_type == PartnerIdType.idCard,
        width: '16em',
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        options: politicalArr,
        order: 11
      }),
      new FormInputText({
        key: 'partner_phone_num',
        label: '手机号码', // '机构电话',
        type: 'tel',
        required: true,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 12
      }),
      new FormInputText({
        key: 'partner_mail_box',
        label: '邮箱',
        placeholder: '请输入邮箱地址',
        customCheck: emailReg,
        required: true,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 13
      }),
      new FormRadio({
        key: 'partner_form_of_investment',
        label: '出资方式',
        radioType: 2,
        value: partner.partner_form_of_investment,
        options: partnerFormOfInvestmentArr,
        required: true,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 14
      }),
      new FormInputText({
        key: 'partner_registered_capital',
        label: '认缴资金',
        radioType: 2,
        required: true,
        type: 'number',
        addOnAffter: '万元',
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 15
      }),
      new FormInputText({
        key: 'partner_paid_in_captial',
        label: '实缴资金',
        required: true,
        addOnAffter: '万元',
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 16
      }),

      new FormDatePicker({
        key: 'partner_investment_date',
        label: '缴付期限',
        required: true,
        isRange: false,
        value: partner.partner_investment_date || null,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 17
      }),
      new FormInputText({
        key: 'partner_wechat_num',
        label: '微信号',

        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 18
      }),
      new FormInputText({
        key: 'partner_qq_num',
        label: 'QQ号',

        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        order: 19
      }),
      // 最后还有一个上传证件
      new FormUpload({
        key: 'upload',
        nzAction: API.UploadFile,
        label: '上传文件',
        icon: 'plus',
        nzFileList: [],
        nzText: '上传',
        nzVisible: false,
        hor_label_nzSpan: 6,
        hor_control_nzSpan: 16,
        nzHeaders: { Authorization: 'Bearer ' + this.mystor.getObject(this.mystor.storKey.USER_INFO).token },
        order: 20
      }),
      new FormDivider({
        label: '法人代表/负责人信息',
        key: 'divider1',
        isHidden: is_write_fzr,

        order: 21
      }),
      new FormInputText({
        key: 'partnerPerson.R_person_name',
        label: '姓名',
        placeholder: '请输入法定代表人/负责人姓名',
        required: true,
        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_person_name,
        order: 22
      }),
      new FormRadio({
        label: '性别',
        key: 'partnerPerson.R_person_sex',
        required: true,
        radioType: 2,
        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_person_sex || 'M',
        options: [
          { key: '男', value: 'M' },
          { key: '女', value: 'F' }
        ],
        order: 23
      }),

      new FormInputText({
        key: 'partnerPerson.R_person_phone_num',
        label: '手机号码',
        required: true,
        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_person_phone_num,
        placeholder: '请输入法定代表人/负责人手机号码',
        order: 24
      }),
      new FormInputText({
        label: '身份证号码',
        key: 'partnerPerson.R_person_id_card_num',
        required: true,
        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_person_id_card_num,
        placeholder: '请输入身份证号码',
        order: 25
      }),

      new FormInputText({
        label: '身份证地址',
        key: 'partnerPerson.R_person_addr',
        required: true,
        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_person_addr,
        placeholder: '请输入身份证地址',
        order: 26
      }),
      new FormDropdown({
        label: '民族',
        key: 'partnerPerson.R_person_race',
        required: true,
        isHidden: is_write_fzr,
        width: '16em',
        options: raceArr,
        value: partner.partnerPerson.R_person_race,
        placeholder: '请输入民族',
        order: 27
      }),
      new FormDropdown({
        label: '文化程度',
        key: 'partnerPerson.R_person_education',
        required: true,
        width: '16em',
        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_person_education,
        placeholder: '请输入文化程度',
        options: educationArr,
        order: 28
      }),
      new FormDropdown({
        label: '政治面貌',
        key: 'partnerPerson.R_person_political',
        required: true,
        width: '16em',
        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_person_political,
        placeholder: '请输入政治面貌',
        options: politicalArr,
        order: 29
      }),
      new FormInputText({
        label: '邮箱',
        key: 'partnerPerson.R_email',
        required: true,
        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_email,
        placeholder: '请输入邮箱',
        order: 30
      }),

      new FormInputText({
        label: '职位',
        key: 'partnerPerson.R_person_position',
        required: true,
        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_person_position,
        placeholder: '请输入职位',
        order: 31
      }),
      new FormInputText({
        label: '微信号',
        key: 'partnerPerson.R_person_wechat',

        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_person_wechat,
        placeholder: '请输入微信号',
        order: 32
      }),
      new FormInputText({
        label: 'QQ号',
        key: 'partnerPerson.R_person_QQ',

        isHidden: is_write_fzr,
        value: partner.partnerPerson.R_person_QQ,
        placeholder: '请输入QQ号',
        order: 33
      }),
    ];

    return of(formData.sort((a, b) => a.order - b.order));
  }

  // partnerControlsForm2(partner: CustomerPartnerModel) {
  //   let formData: BaseFormControls<string>[] = [
  //     new FormRadio({
  //       key: 'partner.partner_is_person_or_org',
  //       label: '--类型',
  //       required: true,
  //       options: [],
  //       order: 1
  //     }),
  //     new FormRadio({
  //       key: 'partner.partner_id_type',
  //       label: '证件类型',
  //       radioType: 2,
  //       required: true,
  //       options: [],
  //       order: 2
  //     }),
  //     new FormRadio({
  //       key: 'partner.partner_id_type',
  //       label: '合伙人类型',
  //       radioType: 2,
  //       required: true,
  //       options: [],
  //       order: 2
  //     }),
  //     new FormRadio({
  //       key: 'partner.partner_id_type',
  //       label: '合伙人类型',
  //       radioType: 2,
  //       required: true,
  //       options: [],
  //       order: 2
  //     }),

  //     new FormRadio({
  //       key: 'partner.partner_country',
  //       label: '国家',
  //       radioType: 2,
  //       required: true,
  //       options: [
  //         { key: '中国', value: '中国' },
  //         { key: '外国', value: '外国' }
  //       ],
  //       order: 2
  //     }),
  //     new FormInputText({
  //       key: 'partner.partner_name',
  //       label: '--名称',
  //       radioType: 2,
  //       required: true,
  //       order: 2
  //     }),
  //     new FormInputText({
  //       key: 'partner.partner_id_or_org_id',
  //       label: '证件号码',
  //       radioType: 2,
  //       required: true,
  //       order: 2
  //     }),
  //     new FormInputText({
  //       key: 'partner.partner_addr',
  //       label: '企业营业场所',
  //       radioType: 2,
  //       required: true,
  //       order: 2
  //     }),
  //     // *ngIf="partner.partner_id_type == PartnerIdType.idCard"
  //     new FormDropdown({
  //       key: 'partner.partner_race',
  //       label: '民族',
  //       radioType: 2,
  //       isHidden: partner.partner_id_type == PartnerIdType.idCard,
  //       required: true,
  //       options: [],
  //       order: 2
  //     }),
  //     new FormDropdown({
  //       key: 'partner.partner_education',
  //       label: '文化程度', // '企业营业场所',
  //       isHidden: partner.partner_id_type == PartnerIdType.idCard,
  //       required: true,
  //       options: [],
  //       order: 2
  //     }),
  //     new FormDropdown({
  //       key: 'partner.partner_political',
  //       label: '政治面貌', // '企业营业场所',
  //       isHidden: partner.partner_id_type == PartnerIdType.idCard,
  //       required: true,
  //       options: [],
  //       order: 2
  //     }),
  //     new FormInputText({
  //       key: 'partner.partner_phone_num',
  //       label: '机构电话', // '机构电话',
  //       required: true,
  //       order: 2
  //     }),
  //     new FormInputText({
  //       key: 'partner.partner_mail_box',
  //       label: '邮箱',
  //       placeholder: '请输入邮箱地址',
  //       required: true,
  //       order: 2
  //     }),
  //     new FormRadio({
  //       key: 'partner.partner_form_of_investment',
  //       label: '出资方式',
  //       radioType: 2,
  //       options: partnerFormOfInvestmentArr,
  //       required: true,
  //       order: 2
  //     }),
  //     new FormInputText({
  //       key: 'partner.partner_registered_capital',
  //       label: '认缴资金',
  //       radioType: 2,
  //       required: true,
  //       order: 2
  //     }),
  //     new FormInputText({
  //       key: 'partner.partner_paid_in_captial',
  //       label: '实缴资金',
  //       required: true,
  //       order: 2
  //     }),

  //     new FormInputText({
  //       key: 'partner.partner_investment_date',
  //       label: '缴付期限',

  //       required: true,
  //       order: 2
  //     }),
  //     // 最后还有一个上传证件
  //     new FormInputText({
  //       label: '法定代表人/负责人信息',
  //       order: 2
  //     }),



  //   ];

  //   return of(formData.sort((a, b) => a.order - b.order));
  // }




}
