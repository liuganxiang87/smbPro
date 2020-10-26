import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseFormControls, FormDivider, FormRadio } from 'src/app/classes';
import { FormControlService, NghttpService, PublicService, FormFourModalTreeService } from 'src/app/services';
import { CustomerRelationPersonModel } from 'src/app/models';
import { CustomerPreDemandModel } from 'src/app/models/CustomerPreDemand.Model';
import { FormUpload } from 'src/app/classes/form-upload';
import { Observable } from 'rxjs';
import { FormHorComponent } from '../form-hor/form-hor.component';
import { NzModalService } from 'ng-zorro-antd';
import { API } from 'src/app/tools/API';



@Component({
  selector: 'app-form-grid',
  templateUrl: './form-grid.component.html',
  styleUrls: ['./form-grid.component.css']
})
export class FormGridComponent implements OnInit, OnChanges {
  @Input() bfcs_grid: BaseFormControls<string>[];
  @Input() button_text1: string = '保存';
  @Input() button_text2: string = '下一步';
  @Input() showCancelBt: boolean = false;
  @Input() showBottomBt: boolean = false;

  @Input() progressId: number | null;
  @Output() submitForm = new EventEmitter();
  @Output() formModelChange = new EventEmitter();
  @Output() triggerFun = new EventEmitter();
  @Input() preDemand: CustomerPreDemandModel;
  @ViewChild('modalRelationPerson', { static: false }) modalRelationPerson: FormHorComponent;
  form_grid: FormGroup;
  previewImage: string | undefined = '';
  previewVisible = false;
  bankOptions: any[];
  // modal-form
  ModalNzWidth: number = 720;
  isVisible: boolean = false;
  ModalTitle: string;
  bfcs$: Observable<BaseFormControls<string>[]>;
  operateObjIndex: number;
  wayFlag: number = 1;// 数据通道开关 不同数字代表不同通道，默认1  （备注：加强拓展性）
  @ViewChild('form_distannce', { static: false }) form_distannce: ElementRef;
  constructor(
    private fcs: FormControlService,
    private myhttp: NghttpService,
    private formFourModalTreeService: FormFourModalTreeService,
    private nzModalService: NzModalService,
    // private renderer2: Renderer2,
    private publicService: PublicService,
    private elementRef: ElementRef,
  ) { }
  resetForm(): void {
    // this.validateForm.reset();
  }

  ngOnInit(): void { }
  ngOnChanges(simp: SimpleChanges) {
    if (simp.bfcs_grid && simp.bfcs_grid.currentValue) {
      this.form_grid = this.fcs.toFormGroup(this.bfcs_grid);
      this.bankOptions = [];
      const bankObj: any = (this.bfcs_grid.find(el => el.key == 'preDemand.pre_bank_sid'));
      if (bankObj) this.bankOptions = bankObj.options;
    }
    // if(simp.bfcs_grid && simp.bfcs_grid.currentValue)
  }
  modelChange(e: any) {
    const target = this.bfcs_grid[e];
    const curKey = target.key;
    console.log('curKey', curKey);
    let curCtrl = this.form_grid.controls[curKey];
    switch (curKey) {
      case 'preDemand.if_biz_futures':
      case 'preDemand.if_biz_security':
      case 'preDemand.if_foreign_exchange':
      case 'preDemand.if_fund_custody_account':
      case 'preDemand.if_raise_money_account':
        const keyArr = curKey.split('.');
        this.preDemand[keyArr[1]] = curCtrl.value;
        const valArr = [];
        for (let item of this.bankOptions) {
          if ((!item.display_for_customer)
            || (item.if_biz_futures < this.preDemand.if_biz_futures)
            || (item.if_biz_security < this.preDemand.if_biz_security)
            || (item.if_foreign_exchange < this.preDemand.if_foreign_exchange)
            || (item.if_fund_custody_account < this.preDemand.if_fund_custody_account)
            || (item.if_raise_money_account < this.preDemand.if_raise_money_account)) {
            item.isHidden = true;
          } else {
            item.isHidden = false;
            valArr.push(item.value);
          }
        }
        /**
         * 查看当前bank_sid 是否在所有显示的银行bank_sid的数组里面，如果不在，那么当前bank_sid值应当清空或默认设置第一个valArr[0]|| null
         */
        if (!valArr.includes(this.form_grid.controls['preDemand.pre_bank_sid'].value)) {
          this.form_grid.patchValue({ 'preDemand.pre_bank_sid': valArr[0] })
        }
        const modfiyCtrl = this.bfcs_grid.find(el => el.key == 'preDemand.pre_bank_sid');
        if (modfiyCtrl instanceof FormRadio) modfiyCtrl.options = this.bankOptions;
        break;
      // 基金类型
      case 'fileFund.fund_open_type':
        for (let i = 0, len = this.bfcs_grid.length; i < len; i++) {
          const el = this.bfcs_grid[i];
          switch (el.key) {
            case 'fileFund.if_open_locking':    //设置锁定期
              el.isHidden = !(curCtrl.value == 'O')
              this.fileFund_if_open_locking_change(this.form_grid.get([el.key]).value, !el.isHidden);
              break;
            case 'fileFund.if_pre_locking':      //设置准锁定期
              el.isHidden = !(curCtrl.value == 'O')
              this.fileFund_if_pre_locking_change(this.form_grid.get([el.key]).value, !el.isHidden);
              break;
            case 'fileFund.fund_open_date':      //基金开放日
            case 'fileFund.append_fund_start':  //追加投资起点
            case 'fileFund.append_fund_increase':   //追加投资增量
              el.isHidden = !(curCtrl.value == 'O')
              break
            case 'fileFund.append_fund_increase':  //追加投资增量
              el.isHidden = curCtrl.value == 'C' ? true : false;
              break;
          }
        }


        break;
      case 'fileFund.manage_by_executive_partner':   //执行事务合伙人管理
        for (let i = 0, len = this.bfcs_grid.length; i < len; i++) {
          const el = this.bfcs_grid[i];
          switch (el.key) {
            case 'fileFund.third_fund_agency_name':    //第三方基金管理机构名称
            case 'fileFund.third_fund_agency_id':      //第三方基金管理机构登记证书号
              el.isHidden = curCtrl.value == 'T' ? true : false;
              break;
          }
        }
        break;
      case 'fileFund.if_open_locking': //设置锁定期
        this.fileFund_if_open_locking_change(curCtrl.value)
        break;
      case 'fileFund.if_pre_locking': //设置准锁定期
        this.fileFund_if_pre_locking_change(curCtrl.value)
        break;
      // 是否设立董事会
      case 'fileCompany.set_board_of_directors':
        /**
         * 1.如果  否  下面 隐藏
         *  fileCompany.set_vice_chairman
         *  fileCompany.if_accounting_firm
         */
        for (let i = 0, len = this.bfcs_grid.length; i < len; i++) {
          const item = this.bfcs_grid[i];
          if (item.key == 'fileCompany.set_vice_chairman' || item.key == 'fileCompany.if_accounting_firm') item.isHidden = !(curCtrl.value == 'T')
        }
        this.formModelChange.emit({ key: curKey, value: curCtrl.value })
        break
      case 'fileCompany.set_vice_chairman':
      case 'fileCompany.set_board_of_supervisors':
        this.formModelChange.emit({ key: curKey, value: curCtrl.value })
        break;
    }
  }

  // 设置锁定期 变化的时候
  fileFund_if_open_locking_change(val: any, fileFund_fund_open_type_isOpen: boolean = true) {
    for (let i = 0, len = this.bfcs_grid.length; i < len; i++) {
      const el = this.bfcs_grid[i];
      switch (el.key) {
        case 'fileFund.locking_period':    //开放式基金的锁定期
        case 'fileFund.if_lock_period_can_apply':      //封闭期内可入伙申购
          el.isHidden = !(fileFund_fund_open_type_isOpen && val == 'T')
          break;
      }
    }
  }
  // 设置准锁定期  变化的时候
  fileFund_if_pre_locking_change(val: any, fileFund_fund_open_type_isOpen: boolean = true) {
    const ctrl = this.bfcs_grid.find(el => el.key == 'fileFund.pre_locking_period');
    ctrl.isHidden = fileFund_fund_open_type_isOpen && val != 'T';
  }
  /**
   * 
   * @param index 这里暂时默认只有一个需要上传图片的
   * @param e 
   */
  uploadChange(index: any, e: any) {
    // 
    const uploadObj = this.bfcs_grid[index]
    if (e.type == 'success') {
      // this.real_control_url = e.fileList[0].response.fileSrc;
      if (uploadObj instanceof FormUpload) {
        uploadObj.nzValidateStatus = 'success';
        uploadObj.nzFileList[0] = {
          uid: e.fileList[0].uid,
          name: '证件',
          status: 'done',
          url: e.fileList[0].response.fileSrc,
          thumbUrl: e.thumbUrl
        };


      }
    } else if (e.type == 'removed') {
      if (uploadObj instanceof FormUpload) {
        uploadObj.nzValidateStatus = 'error';
        uploadObj.nzFileList = [];
      }

    }
  }
  clickDo(e: Event, index: number) {
    e.preventDefault();
    this.operateObjIndex = index; //记录操作对象索引
    const el = this.bfcs_grid[index];
    this.ModalTitle = el.label;
    this.isVisible = true;
    switch (el.key) {
      case 'parentCompany.R_org_name':
        this.ModalNzWidth = 680;
        this.bfcs$ = this.formFourModalTreeService.parentCompanyData(el.completeData)
        break;
      default:
        this.ModalNzWidth = 720;
        this.bfcs$ = this.formFourModalTreeService.fourFormModalData(el.completeData);
    }
  }
  handleCancel() {
    this.closeModal();
  }

  handleOk() {
    this.modalRelationPerson.onSubmit()
  }
  closeModal() {
    this.bfcs$ = null;
    this.wayFlag = 1;
    this.isVisible = false;
  }
  // 获取表单数据的方法
  // getFormData() {
  //   const needData = this.form_grid.getRawValue();
  //   const filterData = {};
  //   const needKeys = this.bfcs_grid.filter(el => (!el.isHidden) && (el.key != 'upload') && (el.key != 'divider1')).map(target => target.key);
  //   for (let key in needData) {
  //     if (needKeys.includes(key)) filterData[key] = needData[key]
  //   }
  //   return filterData
  // }

  _submitForm(formData: any) {


    let that = this;
    switch (that.wayFlag) {
      case 1:
        const target = that.bfcs_grid[this.operateObjIndex];
        switch (target.key) {
          case 'docking.R_person_name':
          case 'financialDocking.R_person_name':
          case 'cashier.R_person_name':
          case 'accounting.R_person_name':
            const ps: CustomerRelationPersonModel = { ...formData, ...{ customer_org_reg_sid: this.progressId } };
            that.myhttp.POST(API.customerRelationPersonEdit, ps).subscribe(res => {
              // console.log(res)
              if (res.status) {
                const person = res.person
                target.value = person.R_person_name;
                target.completeData = person;
                that.form_grid.setControl(target.key, that.fcs.newControl(target));
                that.nzModalService.success({ nzTitle: '提示', nzContent: `提交${res.info}` });
              }
            })
            break;
          case 'parentCompany.R_org_name':  //母公司 
            const __formData: any = { ...target.completeData, ...formData, ...{ customer_org_reg_sid: that.progressId } };
            const companyPs = {
              progressId: that.progressId,
              relationOrgJson: JSON.stringify(__formData)
            }
            that.myhttp.POST(API.customerRelationOrgEdit, companyPs).subscribe(res => {
              if (res.status) {
                target.value = res.org.R_org_name;
                target.completeData = res.org;
                that.form_grid.setControl(target.key, that.fcs.newControl(target));
                that.nzModalService.success({ nzTitle: '提示', nzContent: `提交${res.info}` });
              }

            })
            break;
        }

        break;
      case 2:
        that.bfcs$.subscribe(res => {
          const oldObj = res[0].completeData;
          that.triggerFun.emit({ ...oldObj, ...formData });
        })

        break;

    }


    this.closeModal()
  }

  onSubmit() {
    let formData = this.form_grid.getRawValue();

    let [practicalKeyArr, vialdArr, filterFormData] = [[], [], {}];  //实际需要的key集合，目的剔除this.bfcs_grid.controls中isHidden=true的对象
    for (let i = 0, len = this.bfcs_grid.length; i < len; i++) {
      const _bf = this.bfcs_grid[i];
      //做一点特殊处理：如果有stamp_carving，剔除一个刻公章财务章的 stamp_carving
      if (!_bf.isHidden && !(_bf instanceof FormDivider) && _bf.key != 'stamp_carving') practicalKeyArr.push(_bf.key)
    }
    for (const key in this.form_grid.controls) {
      if (practicalKeyArr.includes(key)) {
        const item = this.form_grid.controls[key];
        filterFormData[key] = item.value;
        vialdArr.push(item.valid)
        item.markAsDirty();
        item.updateValueAndValidity();
      }
    };
    /**
     *校验
     */
    let isViald = vialdArr.every(el => el);
    if (!isViald) { this.form_distannce.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }); return };
    const uploadObj = this.bfcs_grid.find(el => el instanceof FormUpload);
    if ((uploadObj instanceof FormUpload) && practicalKeyArr.includes('real_control_url')) {
      filterFormData['real_control_url'] = uploadObj.nzFileList[0] ? uploadObj.nzFileList[0].url : null;
      if (!filterFormData['real_control_url']) {
        // 如果没有上传法人代表 / 执行事务合伙人（委派代表）证件
        const elem = this.elementRef.nativeElement.querySelector('#real_control_url12');
        if (elem) { elem.scrollIntoView(false); return }
      }
    }
    // console.log(isViald, practicalKeyArr, filterFormData)

    const copyFormData = this.publicService.deepCopy(filterFormData);
    /**不需要传的一些字段 */
    delete copyFormData['docking.R_person_name'];
    delete copyFormData['financialDocking.R_person_name'];
    delete copyFormData['cashier.R_person_name'];
    delete copyFormData['accounting.R_person_name'];
    delete copyFormData['parentCompany.R_org_name'];
    this.submitForm.emit(copyFormData)
  }
}
