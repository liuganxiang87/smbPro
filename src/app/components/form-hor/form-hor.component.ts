import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormControls, FormCheckbox, FormCascader } from 'src/app/classes';
import { FormControlService } from 'src/app/services';
import { StartNameTextObj, StartName } from 'src/app/models';
import { Small_clasess } from 'src/app/tools/global';

import { UploadFile } from 'ng-zorro-antd/upload';
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
  @Output() submitForm = new EventEmitter();
  @Output() formModelChange = new EventEmitter();
  @Output() triggerFun = new EventEmitter();
  form: FormGroup;

  previewImage: string | undefined = '';
  previewVisible = false;
  constructor(private fcs: FormControlService) { }
  ngOnInit() { }
  ngOnChanges(simp: SimpleChanges) {
    let that = this;
    if (simp.bfcs && simp.bfcs.currentValue) {
      console.log('form-hor:::', that.bfcs)
      that.form = that.fcs.toFormGroup(that.bfcs);
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
    console.log('===============')
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
    this.triggerFun.emit;
  }
  onSubmit() {

    const basket = []
    for (const key in this.form.controls) {
      const item = this.form.controls[key];
      // if(item.invalid){basket.push(item)}
      basket.push(item.valid + key)
      item.markAsDirty();
      item.updateValueAndValidity();
    };
    const isViald = this.form.valid;
    const needData = this.getFormData();
    // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~', isViald, basket)
    if (isViald) {
      this.submitForm.emit(needData);
    }
  }
  /**
   * @param 数据内部的关联，重新设置control
   */
  modifyForm(index: number, data?: any) {
    // 如果有需要修改已存在的formControl
    const item = this.bfcs[index];
    const key = item.key;
    let val = this.form.get([key]).value;
    let modifyObj: any;
    switch (key) {
      case 'org_structure':
        this.customer_name_modify();
        for (let i = 0, len = this.bfcs.length; i < len; i++) {
          const baseCtrl = this.bfcs[i];
          switch (baseCtrl.key) {
            case 'small_class':
              /**    value: progress.values,
                    nzOptions: progress.nzOptions,*/
              const nzOptions: any = val == 1 ? Small_clasess.type_one : Small_clasess.type_two;
              if (baseCtrl instanceof FormCascader) {//完成类型转换  
                baseCtrl.nzOptions = nzOptions;
                // TODO:重点
                /**
                 * 这里有一个意外，实际baseCtrl.value是有效的，成为设置的初始默认值，至于为什么是value,ant Design 官方也没说明
                 * 推导其他无法获取默认组件设置的肯能
                 * 也可以通过value来设置默认值
                 * let values: any = val == 1 ? [4533] : [-1,1110]
                 */
                let values: any = val == 1 ? [4533] : [-1, 1110]
                baseCtrl.value = values;  //baseCtrl.value  必须赋值一个有声明对象的参数
              }
              this.form.setControl(baseCtrl.key, this.fcs.newControl(baseCtrl));
              // this.form.setValidators
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
              if (baseCtrl.key != 'inputArg.org_style') baseCtrl.required = !baseCtrl.isHidden;
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
        modifyObj.required = !modifyObj.isHidden;
        this.form.setControl('businessPeriod', this.fcs.newControl(modifyObj));
        modifyObj2.isHidden = !val;
        modifyObj2.required = !modifyObj2.isHidden;
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
      // case ''
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
    console.log('~~~~~~~~~~~~~', file)
    this.previewImage = file.url || file.thumbUrl;

    this.previewVisible = true;
  };

}

