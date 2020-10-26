import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BaseFormControls, FormDivider, FormDropdown, FormInputText, FormRadio, FormTextarea } from '../classes';

@Injectable({
  providedIn: 'root'
})
export class FormFiveManagerTreeService {

  constructor() { }

  getManageForm(target: any) {
    const formData: BaseFormControls<string>[] = [
      new FormInputText({
        key: 'name',
        label: '企业名称',
        placeholder: "请输入企业名称",
        value: '',
        order: 1
      }),

    ]
    return of(formData.sort((a, b) => a.order - b.order));
  }
}
