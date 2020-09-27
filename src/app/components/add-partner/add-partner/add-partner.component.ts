import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseFormControls } from 'src/app/classes';
import { CustomerInProgressModel, CustomerPartnerModel } from 'src/app/models';
import { FormPartnerTreeService } from 'src/app/services';
import { FormHorPartnerComponent } from '../../form-hor/form-hor-partner.component';


@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.css']
})
export class AddPartnerComponent implements OnInit, OnChanges, OnDestroy {
  isVisible: boolean = true;
  bfcs$: Observable<BaseFormControls<string>[]>;
  @Input() partner_index: number;
  @Input() nzOkText = '完成';
  @Input() nzCancelText = '取消';
  @Output() touchOk = new EventEmitter();
  @Output() touchCancel = new EventEmitter();
  @Input() nzOkDisabled: boolean = false;
  @ViewChild('partnerForm', { static: false }) partnerForm: FormHorPartnerComponent;
  @Input() progress: CustomerInProgressModel;
  timeout: any

  constructor(private formPartnerTreeService: FormPartnerTreeService) { }
  ngOnInit() { console.log(this.progress) }
  ngOnChanges(simp: SimpleChanges) {
    if (simp.progress) {

      this.bfcs$ = this.formPartnerTreeService.partnerControlsForm((this.partner_index > 0 ? this.progress.partner[this.partner_index] : new CustomerPartnerModel()), this.progress.org_structure);

      console.log(1000, this.bfcs$)
    }
  }
  _submitForm(e: any) {
    for (const key in e) {
      const keys = key.split('.');
      if (this.partner_index > 0) {
        const partner = this.progress.partner[this.partner_index]
        if (keys.length == 1) partner[keys[0]] = e[key];
        if (keys.length == 2) partner[keys[0]][keys[1]] = e[key];
        if (keys.length == 3) partner[keys[0]][keys[1]][keys[2]] = e[key];
      } else {
        const partner = new CustomerPartnerModel();
        this.progress.partner.push(partner);
      }
    }
    // console.log(this.progress.partner[this.partner_index])
    //  if(this.partner_index>0) {
    //    this.progress.partner[this.partner_index]=
    //   }

    console.log('RRRRRRRRR', this.progress.partner)

  }
  _formModelChange(e: any) {
    console.log(e)
  }
  handleOk() {
    // this.isVisible = false;
    this.partnerForm.onSubmit();
    // console.log(this.partnerForm.getFormData())
    // this.touchOk.emit()
  }
  handleCancel() {
    this.isVisible = false;
    this.timeout = setTimeout(() => {
      this.touchCancel.emit()
    }, 400);

  }
  ngOnDestroy() {
    if (this.timeout) clearTimeout(this.timeout)
  }
}
