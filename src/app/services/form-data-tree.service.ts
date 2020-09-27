import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormSwitch, FormRadio, FormDatePicker, FormTextarea, FormDropdown, BaseFormControls, FormInputText } from 'src/app/classes';
import { bussinseLicenseReg } from '../tools/global';

@Injectable({
  providedIn: 'root'
})
export class FormDataTreeService {
  // 银企信息查询的搜索
  getFormData() {
    let formData: BaseFormControls<string>[] = [
      new FormInputText({
        key: 'name',
        label: '企业名称',
        value: '',
        order: 1
      }),
      new FormInputText({
        key: 'orgId',
        label: '营业执照号',
        // maxLength: 6,
        order: 2
      }),
      // new FormInputText({
      //   key: 'bank_account',
      //   label: '银行账号',
      //   maxLength: 6,
      //   order: 2
      // }),

      // new FormDropdown({
      //   key: 'brave',
      //   label: '下拉选择',
      //   options: [
      //     {key: 'solid',  value: 'Solid123456'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // })
    ];

    return of(formData.sort((a, b) => a.order - b.order));
  }
  // 企业变更通知的搜索
  getEntChangeSearch() {
    const formData: BaseFormControls<string>[] = [
      new FormInputText({
        key: 'userName',
        label: '营业执照号',
        value: '',
        order: 1
      }),
      new FormInputText({
        key: '银行账号',
        label: '银行账号',
        maxLength: 6,
        // type: 'password',
        order: 2
      }),
    ];
    return of(formData.sort((a, b) => a.order - b.order));
  }

  getOrderTaskSearch() {
    const formData: BaseFormControls<string>[] = [
      new FormInputText({
        key: 'id',
        label: '工单号',
        value: '',
        order: 1
      }),
      new FormInputText({
        key: 'name',
        label: '企业名称',
        order: 2
      }),
      new FormInputText({
        key: 'orgId',
        label: '营业执照号',
        order: 3
      }),
      new FormDropdown({
        key: 'status',
        label: '状态',
        placeholder: '全部待办事项',
        width: "140px",
        options: [
          { key: '待分配', value: '1' },
          { key: '待处理', value: '2' },
          { key: '处理中', value: '3' },
          { key: '已完结', value: '4' },
          { key: '全部', value: null },
        ],
        order: 4
      })
    ];
    return of(formData.sort((a, b) => a.order - b.order));
  }


  getDemoForm() {
    const formData: BaseFormControls<string>[] = [
      new FormInputText({
        key: 'id',
        label: '工单号',
        value: '',
        required: true,
        order: 1
      }),
      new FormInputText({
        key: 'name',
        label: '企业名称',
        order: 2
      }),
      new FormInputText({
        key: 'orgId',
        label: '营业执照号',
        addOnAffter: '万元',
        order: 3
      }),
      new FormTextarea({
        key: '_content',
        label: '原因描述',
        placeholder: '填写描述内容（200字内）',
        order: 4
      }),
      new FormDropdown({
        key: 'status',
        label: '状态',
        placeholder: '全部待办事项',
        width: "140px",
        options: [
          { key: '待分配', value: '1' },
          { key: '待处理', value: '2' },
          { key: '处理中', value: '3' },
          { key: '已完结', value: '4' },
          { key: '全部', value: null },
        ],
        order: 5
      }),
      new FormDatePicker({
        key: 'datePicker',
        label: '日期选择',
        order: 6
      }),
      new FormDatePicker({
        key: 'dateRangePicker',
        isRange: true,
        label: '日期范围选择',
        order: 7
      }),
      new FormRadio({
        key: 'radio',
        value: 2,
        label: '单选',
        options: [
          { key: 'A', value: 1 },
          { key: 'B', value: 2 },
          { key: 'C', value: 3 },
          { key: 'D', value: 4 },
        ],
        order: 8
      }),
      // new FormCheckbox({
      //   key: 'check_box',
      //   label: '复选框',
      //   checkOptions: [
      //     { label: 'Apple', value: 'Apple', checked: true },
      //     { label: 'Pear', value: 'Pear', checked: true },
      //     { label: 'Orange', value: 'Orange' }
      //   ],
      //   order: 9
      // }),
      // new FormCheckbox({
      //   key: 'check_box2',
      //   label: '复选框',
      //   checkOptions: [
      //     { label: 'Apple1', value: 'Apple1', checked: true },
      //     { label: 'Pear2', value: 'Pear2', checked: true },
      //     { label: 'Orange3', value: 'Orange3' }
      //   ],
      //   order: 9
      // })
    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }
  getEmialListForm(options: any[] = []) {
    const formData: BaseFormControls<string>[] = [
      new FormInputText({
        key: 'name',
        label: '企业名称',
        value: '',
        order: 1
      }),
      new FormDropdown({
        key: 'type',
        label: '业务类型',
        width: "10em",
        options: [
          { key: '设立', value: '1' },
          { key: '变更', value: '2' },
          { key: '迁入', value: '3' },
          { key: '迁转', value: '4' },
          { key: '质押', value: '5' },
          { key: '调档', value: '6' },
          { key: '迁出', value: '7' },
          { key: '注销', value: '8' },
          { key: '备案', value: '9' },
          { key: '无纸化变更', value: 'a' },
          { key: '全部', value: null },
        ],
        order: 2
      }),

    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }

  getSetUpListSearchForm(value: string) {
    const formData: BaseFormControls<string>[] = [
      new FormDropdown({
        key: 'type',
        label: '业务类型',
        width: "8em",
        options: [
          { key: '数据修改', value: '0' },
          { key: '设立', value: '1' },
          { key: '变更', value: '2' },
          { key: '迁入', value: '3' },
          { key: '迁转', value: '4' },
          { key: '质押', value: '5' },
          { key: '调档', value: '6' },
          { key: '迁出', value: '7' },
          { key: '注销', value: '8' },
          { key: '备案', value: '9' },
          { key: '无纸化变更', value: 'a' },
          { key: '全部', value: null },
        ],
        value: value,
        order: 1
      }),
      new FormInputText({
        key: 'name',
        label: '企业名称',
        value: '',
        order: 2
      }),

      new FormInputText({
        key: 'orgId',
        label: '营业执照号码',
        value: '',
        order: 3
      }),
      new FormSwitch({
        key: 'own',
        label: '仅看我的企业',
        value: false,
        order: 4
      }),
    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }

  getCommonSearchForm(switchText: string = '是否审核通过') {
    const formData: BaseFormControls<string>[] = [
      new FormInputText({
        key: 'name',
        label: '企业名称',
        placeholder: "请输入企业名称",
        value: '',
        order: 1
      }),
      new FormSwitch({
        key: 'status',
        label: switchText,
        openText: '是',
        closeText: '否',
        value: false,
        order: 2
      })
    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }


  bussinessLicense(isDisabled: boolean = false, curObj: { code: string; approvalDate: Date } = { code: '', approvalDate: null }) {
    const formData: BaseFormControls<string>[] = [
      new FormInputText({
        key: 'code',
        label: '统一社会信用代码',
        placeholder: "请输入企业名称",
        errorHint: '请输入正确对统一社会信用代码',
        customCheck: bussinseLicenseReg,
        required: true,
        isDisabled: isDisabled,
        hor_control_nzSpan: 14,
        value: curObj.code,
        order: 1
      }),
      new FormDatePicker({
        key: 'approvalDate',
        label: '核准日期',
        placeholder: "请输入企业名称",
        required: true,
        isDisabled: isDisabled,
        hor_control_nzSpan: 12,
        value: curObj.approvalDate,
        order: 2
      }),
    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }




}
