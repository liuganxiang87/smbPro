import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { BaseFormControls } from 'src/app/classes';
import { CustomerInProgressModel, CustomerPartnerModel } from 'src/app/models';
import { FormPartnerTreeService, NghttpService } from 'src/app/services';
import { API } from 'src/app/tools/API';
import { FormHorPartnerComponent } from '../form-hor/form-hor-partner.component';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.css']
})
export class AddPartnerComponent implements OnInit, OnChanges {
  @Input() isVisible: boolean = true;
  bfcs$: Observable<BaseFormControls<string>[]>;
  @Input() partner_index: number | null;
  @Input() nzOkText = '完成';


  @Input() nzCancelText = '取消';
  @Output() touchOk = new EventEmitter();
  @Output() touchCancel = new EventEmitter();
  @Input() nzOkDisabled: boolean = false;
  @ViewChild('partnerForm', { static: false }) partnerForm: FormHorPartnerComponent;
  @Input() progress: CustomerInProgressModel;
  constructor(private formPartnerTreeService: FormPartnerTreeService, private myhttp: NghttpService, private modalService: NzModalService) { }
  ngOnInit() { console.log(this.progress) }
  ngOnChanges(simp: SimpleChanges) {
    if (simp.isVisible && simp.isVisible.currentValue) {
      this.bfcs$ = this.formPartnerTreeService.partnerControlsForm((this.partner_index >= 0 ? this.progress.partner[this.partner_index] : new CustomerPartnerModel()), this.progress.org_structure);
    }
  }
  _submitForm(e: any) {
    let that = this;
    const isEdit = typeof (that.partner_index) == 'number' && this.partner_index >= 0;
    const partner = isEdit ? that.progress.partner[that.partner_index] : new CustomerPartnerModel();
    partner.customer_org_reg_sid = that.progress.customer_org_reg_sid;
    for (const key in e) {
      const keys = key.split('.')
      if (keys.length == 1) partner[keys[0]] = e[key];
      if (keys.length == 2) partner[keys[0]][keys[1]] = e[key];
      if (keys.length == 3) partner[keys[0]][keys[1]][keys[2]] = e[key];
    }
    /**转换为时间戳格式 */
    partner.partner_investment_date = new Date(partner.partner_investment_date).getTime();
    if (!isEdit) this.progress.partner.push(partner);
    that.myhttp.POST(API.partnerEdit, { progressId: that.progress.customer_org_reg_sid, partnerJson: JSON.stringify(partner) }).subscribe(res => {
      if (res.status) {
        partner.customer_partner_sid = res.partner.customer_partner_sid;
        that.touchOk.emit(that.progress.partner);
        that.modalService.success({ nzTitle: "提示", nzContent: res.info });
      }
    })
  }
  _formModelChange(e: any) {
    console.log(e)
  }
  handleOk() {
    this.partnerForm.onSubmit();
  }
  handleCancel() {
    this.touchCancel.emit()
  }

}
