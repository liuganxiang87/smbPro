import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormControls, FormCheckbox, FormCascader } from 'src/app/classes';
import { FormControlService } from 'src/app/services';
import { UploadFile } from 'ng-zorro-antd/upload';
import { Key } from 'protractor';
@Component({
    selector: 'app-form-hor-partner',
    templateUrl: './form-hor.component.html',
    styleUrls: ['./form-hor.component.css']
})
export class FormHorPartnerComponent implements OnInit, OnChanges {
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
    fileUrl: string = null;
    constructor(private fcs: FormControlService) { }
    ngOnInit() { }
    ngOnChanges(simp: SimpleChanges) {
        let that = this;
        if (simp.bfcs && simp.bfcs.currentValue) {
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
        const needData = this.form.getRawValue();
        const filterData = {};
        const needKeys = this.bfcs.filter(el => {
            return !el.isHidden && (el.key != 'upload') && (el.key != 'divider1')
        }).map(target => target.key);
        for (let key in needData) {
            if (needKeys.includes(key)) filterData[key] = needData[key]
        }
        return filterData
    }
    // cancel点击事件
    trigger(event: Event) {
        event.preventDefault();
        this.triggerFun.emit;
    }
    onSubmit() {
        // const isViald = this.form.valid;
        const filterData = this.getFormData();
        // console.log()
        const vialdArr = []
        for (const key in filterData) {
            const item = this.form.controls[key];
            vialdArr.push(item.valid)
            item.markAsDirty();
            item.updateValueAndValidity();
        }
        // console.log(vialdArr)
        if (vialdArr.every(el => el)) {
            filterData['certification.photo_src'] = this.fileUrl;
            this.submitForm.emit(filterData);
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
            case 'if_limited':
                modifyObj = this.bfcs[index + 1];
                modifyObj.isHidden = val == "T";
                break;
            case 'partner_id_type':
                for (let i = 0, len = this.bfcs.length; i < len; i++) {
                    const item = this.bfcs[i]
                    switch (item.key) {
                        case 'partner_race':
                        case 'partner_education':
                        case 'partner_political':
                            item.isHidden = val != 1;
                            break
                    }
                }


                break;

            case 'partner_is_person_or_org':
                for (let i = 0, len = this.bfcs.length; i < len; i++) {
                    const item = this.bfcs[i];
                    switch (item.key) {
                        case 'divider1':
                        case 'partnerPerson.R_person_name':
                        case 'partnerPerson.R_person_name':
                        case 'partnerPerson.R_person_sex':
                        case 'partnerPerson.R_person_phone_num':
                        case 'partnerPerson.R_person_id_card_num':
                        case 'partnerPerson.R_person_addr':
                        case 'partnerPerson.R_person_race':
                        case 'partnerPerson.R_person_education':
                        case 'partnerPerson.R_person_political':
                        case 'partnerPerson.R_email':
                        case 'partnerPerson.R_person_position':
                        case 'partnerPerson.R_person_wechat':
                        case 'partnerPerson.R_person_QQ':
                            item.isHidden = val == 1;
                            break;
                    }
                }

                break;
        }

    }



    uploadChange(index: number, info: any) {
        console.log('!!!!!!!!', index, info);
        if (info.type == 'success') {
            const fileList = info.fileList;
            if (fileList && fileList[0] && fileList[0].response.status) {
                this.fileUrl = fileList[0].response.fileSrc;
            }
        }

    }
    handlePreview = (file: UploadFile) => {
        console.log('~~~~~~~~~~~~~', file)
        this.previewImage = file.url || file.thumbUrl;

        this.previewVisible = true;
    };

}

