import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BaseFormControls, FormDropdown, FormInputText, FormRadio } from '../classes';
import { CustomerRelationOrgModel, CustomerRelationPersonModel } from '../models';
// import { FormUpload } from '../classes/form-upload';
// import { CustomerInProgressModel, CustomerRelationOrgModel, CustomerRelationPersonModel, RelationOrgMode, RelationPersonMode } from '../models';
// import { API } from '../tools/API';
// import { fundInvestOptions, otherInvestOptions, status_arr, status_num_arr } from '../tools/global'
// import { MyStorageService } from './my-storage.service';
// import { ProgressFunWrapService } from './progress-fun-wrap.service';


import { personPostionOptions, partner_id_type, politicalArr, educationArr, raceArr } from '../tools/global'
@Injectable({
  providedIn: 'root'
})
export class FormFourModalTreeService {
  constructor() { }
  fourFormModalData(obj: CustomerRelationPersonModel) {
    const hor_label_nzSpan = 6;
    const hor_control_nzSpan = 12;
    // if (!obj.R_person_id_type) obj.R_person_id_type = '1';
    const isHidden = obj.R_person_id_type != '1';
    let formData: BaseFormControls<string>[] = [
      new FormDropdown({
        label: '身份',
        key: 'R_person_mode',
        required: true,
        isDisabled: true,
        width: '12em',
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_mode,
        completeData: obj,
        options: personPostionOptions,
        order: 1
      }),
      new FormInputText({
        label: '姓名',
        key: 'R_person_name',
        required: true,
        isDisabled: false,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_name,
        order: 1
      }),
      new FormRadio({
        label: '性别',
        key: 'R_person_sex',
        required: true,
        isDisabled: false,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        radioType: 2,
        value: obj.R_person_sex || 'T',
        options: [
          { key: '男', value: 'T' },
          { key: '女', value: 'F' }
        ],
        order: 2
      }),
      new FormRadio({
        label: '证件类型',
        key: 'R_person_id_type',
        required: true,
        isDisabled: false,
        width: '12em',
        completeData: obj,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_id_type,
        options: partner_id_type['1'],
        order: 3
      }),

      new FormInputText({
        label: '证件号码',
        key: 'R_person_id_card_num',
        required: true,
        isDisabled: false,
        width: '12em',
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_id_card_num,
        order: 3
      }),
      new FormInputText({
        label: '证件地址',
        key: 'R_person_addr',
        required: true,
        isDisabled: false,
        width: '12em',
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_addr,
        order: 4
      }),
      new FormDropdown({
        label: '民族',
        key: 'R_person_race',
        required: true,
        isDisabled: false,
        width: '12em',
        isHidden: isHidden,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_race,
        options: raceArr,
        order: 5
      }),
      new FormDropdown({
        label: '政治面貌',
        key: 'R_person_political',
        required: true,
        isDisabled: false,
        isHidden: isHidden,
        width: '12em',
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_political,
        options: politicalArr,
        order: 6
      }),
      new FormDropdown({
        label: '文化程度',
        key: 'R_person_education',
        required: true,
        isDisabled: false,
        isHidden: isHidden,
        width: '12em',
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_education,
        options: educationArr,
        order: 7
      }),
      new FormInputText({
        label: '手机号码',
        key: 'R_person_phone_num',
        required: true,
        isDisabled: false,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_phone_num,
        order: 8
      }),
      new FormInputText({
        label: '邮箱',
        key: 'R_email',
        required: true,
        isDisabled: false,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_email,
        order: 9
      }),
      new FormInputText({
        label: '微信号',
        key: 'R_person_wechat',
        isDisabled: false,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_wechat,
        order: 10
      }),
      new FormInputText({
        label: 'QQ号',
        key: 'R_person_QQ',
        isDisabled: false,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_person_QQ,
        order: 11
      }),
    ]


    return of(formData.sort((a, b) => a.order - b.order));
  }

  parentCompanyData(obj: CustomerRelationOrgModel = new CustomerRelationOrgModel()) {
    const hor_label_nzSpan = 6;
    const hor_control_nzSpan = 12;
    let formData: BaseFormControls<string>[] = [
      new FormInputText({
        label: '企业名称',
        key: 'R_org_name',
        required: true,
        isDisabled: false,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_org_name,
        order: 1
      }),
      new FormInputText({
        label: '企业社会信用代码',
        key: 'R_org_id',
        required: true,
        isDisabled: false,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_org_id,
        order: 2
      }),
      new FormInputText({
        label: '电话号码',
        key: 'R_org_phone_num',
        required: true,
        isDisabled: false,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_org_phone_num,
        order: 3
      }),
      new FormInputText({
        label: '地址',
        key: 'R_org_addr',
        required: true,
        isDisabled: false,
        hor_label_nzSpan: hor_label_nzSpan,
        hor_control_nzSpan: hor_control_nzSpan,
        value: obj.R_org_addr,
        order: 4
      }),
    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }

}
