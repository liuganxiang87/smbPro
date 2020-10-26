import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFormControls } from 'src/app/classes';


@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }
  toFormGroup(baseFormControls: BaseFormControls<string>[] = []) {
    let group: any = {};
    if (baseFormControls) baseFormControls.forEach(item => group[item.key] = this.newControl(item));
    return new FormGroup(group);
  }

  newControl(item: BaseFormControls<string>) {
    const validatorsArr = [];
    if (item.required) validatorsArr.push(Validators.required);
    if (item.maxLength) validatorsArr.push(Validators.maxLength(item.maxLength));
    // 如果是自定义校正
    if (item.customCheck) validatorsArr.push(Validators.pattern(item.customCheck));

    /**
     * 填坑：
     * 如果这里写为group[item.key] = new FormControl(item.value || '', validatorsArr);
     * nzplaceholder  是不会显示出来的，所以默认初始化为null
     * 
     * 另外，当disable=true,所有校验将不再执行监听，所以后续有不得已该readonly和ngStyle来代替disable属性的使用,达到集五福编辑，又可保留校验
     */
    return new FormControl({ value: item.value, disabled: item.isDisabled }, validatorsArr);

  }
}
