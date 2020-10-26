import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormControls, FormCheckbox, FormCascader, FormDivider } from 'src/app/classes';
import { FormControlService, PublicService } from 'src/app/services';
import { StartNameTextObj, StartName } from 'src/app/models';
import { Small_clasess } from 'src/app/tools/global';

import { UploadFile } from 'ng-zorro-antd/upload';
import { FormUpload } from 'src/app/classes/form-upload';
@Component({
  selector: 'app-form-hor',
  templateUrl: './form-hor.component.html',
  styleUrls: ['./form-hor.component.css']
})
export class FormHorComponent implements OnInit, OnChanges {
  @Input() bfcs: BaseFormControls<string>[];
  @Input() button_text: string = '保存';
  @Input() button_text2: string = '取消';
  @Input() showCancelBt: boolean = false;
  @Input() showBottomBt: boolean = false;
  @Input() nzLayout: string = 'vertical';
  @Output() submitForm = new EventEmitter();
  @Output() formModelChange = new EventEmitter();
  @Output() triggerFun = new EventEmitter();
  form: FormGroup;

  previewImage: string | undefined = '';
  previewVisible = false;
  constructor(private fcs: FormControlService, private publicService: PublicService) { }
  ngOnInit() { }
  ngOnChanges(simp: SimpleChanges) {
    if (simp.bfcs && simp.bfcs.currentValue) {
      this.form = this.fcs.toFormGroup(this.bfcs);
    }
  }
  // 点击事件
  modelClick(event: Event, index: number) {
    event.preventDefault();
    this.modelChange(index);
  }

  // 模态发生变化
  modelChange(index: number) {
    this.modifyForm(index)
  }
  // 获取表单数据的方法
  getFormData() {
    const needData = this.form.getRawValue();
    /**这里多选框暂时没考虑校验的情况 */
    let formCheckbox: any[] = this.bfcs.filter(item => item instanceof FormCheckbox);
    formCheckbox.forEach((item: FormCheckbox) => {
      if (item.isAsRadio) {
        const target = item.checkOptions.find(el => el.checked)
        needData[item.key] = target ? target.value : null;
      } else {
        needData[item.key] = item.checkOptions
      }
    })
    return needData
  }
  // cancel点击事件
  trigger(event: Event) {
    event.preventDefault();
    this.triggerFun.emit();
  }
  onSubmit() {
    let [validArr, filterFormData] = [[], {}];
    /**
     * 数据过滤
     */
    const filter_bfcs = this.bfcs.filter(el => !el.isHidden && !(el instanceof FormDivider) && !(el instanceof FormUpload));
    const filer_keys = filter_bfcs.map(el => el.key);
    for (const key in this.form.controls) {
      if (filer_keys.includes(key)) {
        const item = this.form.controls[key];
        validArr.push(item.valid);
        filterFormData[key] = item.value;
        item.markAsDirty();
        item.updateValueAndValidity();
      }
    };
    const isViald = validArr.every(el => el);

    console.log('>>>>>>>>>>>', filterFormData)
    if (isViald) this.submitForm.emit(filterFormData);

  }
  /**
   * @param 数据内部的关联，重新设置control
   */
  modifyForm(index: number, data?: any) {
    // 如果有需要修改已存在的formControl
    const item = this.bfcs[index];
    const key = item.key;
    let val = this.form.get([key]).value;
    console.log(key)
    let modifyObj: any;
    switch (key) {
      case 'org_structure':
        this.customer_name_modify();
        for (let i = 0; i < this.bfcs.length; i++) {
          const baseCtrl = this.bfcs[i];
          switch (baseCtrl && baseCtrl.key) {
            case 'small_class':
              const nzOptions: any[] = val == 1 ? Small_clasess.type_one : Small_clasess.type_two;
              /** _options:  必须这么做，绕开循环引用*/
              const _options: any = this.publicService.copyData(nzOptions);
              let values: any = val == 1 ? [4533] : [-1, 1110];
              if (baseCtrl instanceof FormCascader) {
                baseCtrl.nzOptions = _options;
                baseCtrl.value = values;
              }
              this.form.setControl(baseCtrl.key, this.fcs.newControl(baseCtrl));
              break;
            case 'inputArg.partner_count':
              baseCtrl.label = val == 1 ? '合伙人个数' : '股东个数'
              break;
            case 'inputArg.org_partner_count':
              baseCtrl.label = val == 1 ? '机构合伙人数' : '机构股东人数'
              break;
            case 'inputArg.org_style':
            case 'inputArg.GP_count':
            case 'inputArg.exection_count':
            case 'inputArg.GP_total_capital':
              baseCtrl.isHidden = val == 2;
              // if (baseCtrl.key != 'inputArg.org_style') baseCtrl.required = !baseCtrl.isHidden;
              break;
          }
        }
        break;
      case 'inputArg.start_name':    //冠名类型
        modifyObj = this.bfcs.find(el => el.key == 'inputArg.append_city');
        modifyObj.isHidden = val != 3;
        this.customer_name_modify();
        break;
      case 'inputArg.short_name':
      case 'inputArg.org_style':
      case 'inputArg.biz_desc':
      case 'inputArg.append_city':
        this.customer_name_modify();
        break;
      case 'businessPeriodInfinite':
        modifyObj = this.bfcs.find(el => el.key == 'businessPeriod');
        const modifyObj2 = this.bfcs.find(el => el.key == 'last_day_4_pay');
        modifyObj.isHidden = val;
        // modifyObj.required = !modifyObj.isHidden;
        this.form.setControl('businessPeriod', this.fcs.newControl(modifyObj));
        modifyObj2.isHidden = !val;
        // modifyObj2.required = !modifyObj2.isHidden;
        this.form.setControl('last_day_4_pay', this.fcs.newControl(modifyObj2));
        break;
      case 'customerFromSource.text':
      case 'customerPerson.c_person_name':
        /***这里有回调修改 */
        if (!data) {
          this.formModelChange.emit(index)
        } else {
          modifyObj = this.bfcs[index]
          modifyObj.value = data.text;
          this.form.setControl(key, this.fcs.newControl(modifyObj));
        }
        break;

      case 'moveBefore.isIndefiniteDuration':
        modifyObj = this.bfcs[index + 1];
        modifyObj.isRange = !val;
        const modifyControl: any = this.form.controls[modifyObj.key];
        modifyControl.value = null; //这里必须重新赋值，否则报错
        this.form.setControl(modifyObj.key, modifyControl);
        break;
      case 'R_person_id_type':   // 弹出里面的key R_person_political
        // 原始数据 originObj
        const originObj = item.completeData;
        for (let i = 0, len = this.bfcs.length; i < len; i++) {
          const target = this.bfcs[i];
          switch (target.key) {
            case 'R_person_race':
            case 'R_person_political':
            case 'R_person_education':
              target.isHidden = val != '1';
              if (target.isHidden) this.form.patchValue({ [target.key]: originObj[target.key] });
          }

        }

        break;
    }
  }

  customer_name_modify() {
    let modifyObj = this.bfcs.find(el => el.key == 'customer_name');
    const formData = this.getFormData();
    const start_name_val = formData['inputArg.start_name'] || 1;
    const append_city_val = formData['inputArg.append_city'] || '';
    const biz_desc_val = formData['inputArg.biz_desc'] || '';
    const short_name_val = formData['inputArg.short_name'] || '';
    const org_style_val = formData['inputArg.org_style'] || '';
    const org_structure_val = formData['org_structure'];
    modifyObj.value = (StartNameTextObj[start_name_val.toString()]) + (start_name_val.toString() == StartName.county && append_city_val == 'T' ? '市' : '') + short_name_val + biz_desc_val + org_style_val + (org_structure_val == 1 ? "（有限合伙）" : "有限公司")
    this.form.setControl('customer_name', this.fcs.newControl(modifyObj))
  }

  uploadChange(index: number, info: any) {
    console.log('!!!!!!!!', index, info)

  }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;

    this.previewVisible = true;
  };

}

