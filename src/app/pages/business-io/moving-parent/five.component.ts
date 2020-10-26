
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { BaseFormControls } from 'src/app/classes';
import { FormGridComponent } from 'src/app/components/form-grid/form-grid.component';
import { AgreementTemplet, CustomerInProgressModel, CustomerRelationPersonModel, FileCompanyModel, FileFundPartnerModel, FileNotFundPartnerModel, RelationPersonMode } from 'src/app/models';
import { PersonModelPipe } from 'src/app/pipes/person-model.pipe';
import { NghttpService, FormFiveTreeService, FormFourModalTreeService } from 'src/app/services';
import { API } from 'src/app/tools/API';

@Component({
    selector: 'app-five',
    templateUrl: '../step-html/five/five.component.html',
    styleUrls: ['../step-html/five/five.component.css']
})

export class FiveComponent implements OnInit, OnDestroy {
    bfcs$: Observable<BaseFormControls<string>[]>;
    progress: CustomerInProgressModel = new CustomerInProgressModel();
    curRelationPerson: CustomerRelationPersonModel = new CustomerRelationPersonModel();
    allowRPersonModeArr: any[] = []; //可以显示的 企业关联人类型
    basket: CustomerRelationPersonModel[] = [];//展示需填写高管信息的篮子
    basket_add_index: number;   //什么位置添加高管信息
    isAdd: boolean = true;
    AgreementTemplet = AgreementTemplet;
    @ViewChild('fiveFormGrid', { static: false }) fiveFormGrid: FormGridComponent;
    constructor(private service: FormFiveTreeService, private router: Router,
        private formFourModalTreeService: FormFourModalTreeService,
        private activatedRoute: ActivatedRoute, private myhttp: NghttpService,
        private nzModalService: NzModalService) {
        const snapshot = this.activatedRoute.snapshot;
        this.progress = snapshot.data.progress;
        switch (this.progress.agreement_templet) {
            case AgreementTemplet.fileNoFund:
                if (!this.progress.fileNoFund.customer_org_reg_sid) this.progress.fileNoFund = new FileNotFundPartnerModel();
                this.bfcs$ = this.service.fiveNotFundFormData(this.progress);
                break;
            case AgreementTemplet.fileFund:
                if (!this.progress.fileFund.customer_org_reg_sid) this.progress.fileFund = new FileFundPartnerModel();
                this.bfcs$ = this.service.fiveFileFundFormData(this.progress);
                break;
            case AgreementTemplet.fileCompany:
                if (!this.progress.fileCompany.customer_org_reg_sid) this.progress.fileCompany = new FileCompanyModel();
                this.bfcs$ = this.service.fiveFileCompanyFormData(this.progress);
                /**
                 * 有限公司 ---> 筛选高管成员信息列表
                 */
                this.progress.isDisabled = false;
                this.setChange();
                break;
            default:
                break;
        }
    }
    ngOnInit() { }
    // 设置变化,所填高管信息栏跟着变化
    setChange() {
        // 创建一个空篮子
        this.basket = [];
        /**
       * 必填高管信息
       * 1.总经理
       * 2.法人代表
       *   其他参考：
       *
       * 法人：只能有1人
      总经理： 只能有1人  
      --------
      不设立董事会： （必填 、 执行董事>=1）      
      
      设立董事会：   （基础信息关键字（必填）：最低3人、董事长=1）       分别是：董事长1人 、董事 2人
      设立副董事长：副董事长=1；
      不设立监事：监事 最低1人
      设立监事会：最低3人     监事会主席  1人    监事2人
      
      前端需要对比参数信息：
      董事会
      progress.fileCompany.set_board_of_directors
      副董事
      progress.fileCompany.set_vice_chairman
      设立监事会
      progress.fileCompany.set_board_of_supervisors
       */
        // 法人代表必填 、而且只有1人
        // 遍历 progress.relationPerson;如果找不到法人，就说明属于新建法人高管信息，创建一个法人模板
        const model_fr = this.create_person_model(RelationPersonMode.legal);
        // 总经理必填 、而且只有1人
        const model_zjl = this.create_person_model(RelationPersonMode.generalManager);
        this.basket.push(model_fr);
        this.basket.push(model_zjl);
        this.dsModelChange();
        this.jsModelChange();
    }

    // 选择设立董事与否
    dsModelChange() {
        /**1.判断是否设立董事会 */

        if (this.progress.fileCompany.set_board_of_directors == "T") {
            /**董事成员至少三人 */
            // 董事长必填，只有一人
            const model_dsz = this.create_person_model(RelationPersonMode.directorChairman);
            this.basket.push(model_dsz);
            // 遍历所有董事，filter
            const model_ds_find_arr = this.progress.relationPerson.filter(item => item.R_person_mode == RelationPersonMode.director);
            // 如果设立副董事长,副董事长也只能有1人
            if (this.progress.fileCompany.set_vice_chairman == "T") {
                const model_fdsz = this.create_person_model(RelationPersonMode.deputyDirector);
                this.basket.push(model_fdsz);
                // 董事，数据处理
                if (model_ds_find_arr.length > 0) {
                    for (let i = 0, len = model_ds_find_arr.length; i < len; i++) {
                        const target = model_ds_find_arr[i];
                        if (i == 0) {
                            target.canAdd = true;
                            target.noCanDel = true;
                        }
                        this.basket.push(target);
                    }
                } else {
                    // console.log("fdsz_person_model----", fdsz_person_model)
                    this.basket.push(this.create_person_model(RelationPersonMode.director))
                }

            } else {
                // 如果没设立副董事长，那么其余两个就是董事
                // const model_ds = this.get_init_model(RelationPersonMode.director);
                // this.basket.push(model_ds_add);
                if (model_ds_find_arr.length > 0) {
                    for (let i = 0, len = model_ds_find_arr.length; i < len; i++) {
                        if (i == 0) model_ds_find_arr[i].noCanDel = true;
                        this.basket.push(model_ds_find_arr[i]);
                    }
                    if (model_ds_find_arr.length == 1) {
                        // 为保证董事成员至少3人，如果只有一个的话，再添加一个;
                        const model_ds = this.get_init_model(RelationPersonMode.director);
                        this.basket.push(model_ds);
                    }
                } else {
                    const model_ds_add = this.get_init_model(RelationPersonMode.director, true, true)
                    const model_ds = this.get_init_model(RelationPersonMode.director)
                    this.basket.push(model_ds_add);
                    this.basket.push(model_ds)
                }
            }
        } else {
            //  不设立董事会，也必须有一个执行董事,只有1人
            const model_zxds = this.create_person_model(RelationPersonMode.executiveDirector);
            this.basket.push(model_zxds);
        }

    }

    // 选择设立监事与否
    jsModelChange() {
        /**2.判读是否设立监事会 */
        if (this.progress.fileCompany.set_board_of_supervisors == "T") {
            /**董监事成员至少三人 */
            // 如果设立监事会，一定需要设立 有且只有一个监事会主席
            const model_jshzx = this.create_person_model(RelationPersonMode.supervisor);
            this.basket.push(model_jshzx);
            /**
             * 1.遍历 progress.relationPerson,查询所有监事；
             * 如果没有：
             * 还得替补至少两名监事，监事
             */
            const model_js_find = this.progress.relationPerson.filter(item => item.R_person_mode == RelationPersonMode.supervisors)
            if (model_js_find.length > 0) { //如果有：
                model_js_find.forEach((item, i) => {
                    item.canAdd = i == 0;
                    item.noCanDel = i == 0;
                    this.basket.push(item)
                })
                if (model_js_find.length == 1) {
                    const model_js = this.get_init_model(RelationPersonMode.supervisors);
                    this.basket.push(model_js);
                }
            } else {//如果没有
                const model_js_add = this.get_init_model(RelationPersonMode.supervisors, true, true);
                const model_js = this.get_init_model(RelationPersonMode.supervisors);
                this.basket.push(model_js_add);
                this.basket.push(model_js);
            }

        } else {
            // 如果不设立 监事会，那么也必须有一个执行监事(独立监事)
            const model_zxjs = this.get_init_model(RelationPersonMode.singleSupervisor);
            this.basket.push(model_zxjs);
        }
    }

    // 高管信息的身份初始化   canAdd  同一职位是否可再添加
    get_init_model(sf: number, isRequired: boolean = true, canAdd: boolean = false) {
        const model_sf: any = new CustomerRelationPersonModel();
        model_sf.isRequired = isRequired;
        model_sf.R_person_mode = sf;
        model_sf.canAdd = canAdd;
        return model_sf
    }

    create_person_model(R_person_mode: number) {
        let model = this.progress.relationPerson.find(item => (item.R_person_mode == R_person_mode));
        if (!model) model = this.get_init_model(R_person_mode);
        model.noCanDel = true;
        return model;
    }
    // 单个添加(插入)高管信息
    addItemRPerson(i: number, isAdd: boolean = false) {
        this.basket_add_index = i;
        this.isAdd = isAdd;

        /**
            * 弹出弹窗 
            * 四个要素：
            *  1.isVisible；
            * 2.ModalTitle；
            * 3.bfcs$ 
            * 4.wayFlag
            * */
        this.fiveFormGrid.isVisible = true;
        let target = this.basket[i];
        this.fiveFormGrid.ModalTitle = new PersonModelPipe().transform(target.R_person_mode);
        console.log(target);
        this.fiveFormGrid.wayFlag = 2;
        if (isAdd) {
            const addTarget = new CustomerRelationPersonModel();
            addTarget.R_person_mode = target.R_person_mode;
            this.fiveFormGrid.bfcs$ = this.formFourModalTreeService.fourFormModalData(addTarget);
        } else {
            this.fiveFormGrid.bfcs$ = this.formFourModalTreeService.fourFormModalData(target);
        }
    }
    // 伤处高管信息
    delRPerson(index: number) {
        let that = this;
        const person = that.basket[index];
        const ps = { relationPersonId: person.relation_person_id }
        console.log('person----', person, ps)
        that.myhttp.POST(API.customerRelationPersonDelete, ps).subscribe(res => {
            console.log(res)
            if (res.status) {
                that.nzModalService.success({ nzTitle: "提示", nzContent: res.info });

                that.basket.splice(index, 1);

            }
        });


    }


    personHandler(event: CustomerRelationPersonModel) {
        this.curRelationPerson = event;
        this.progress.relationPerson.push(this.curRelationPerson);
        if (this.isAdd) {
            console.log("新增的对象：：：", event)
            this.basket.splice(this.basket_add_index + 1, 0, this.curRelationPerson);
        } else {
            console.log("编辑的对象：：：", this.curRelationPerson)

            if (event.R_person_mode == RelationPersonMode.director || event.R_person_mode == RelationPersonMode.supervisors) {
                this.basket[this.basket_add_index] = this.curRelationPerson
            } else {
                this.basket[this.basket_add_index] = { ...this.basket[this.basket_add_index], ...this.curRelationPerson };
                /**如果该对象是独立总监或者执行董事*/
                if (this.curRelationPerson.R_person_mode === RelationPersonMode.singleSupervisor || this.curRelationPerson.R_person_mode === RelationPersonMode.executiveDirector) {
                    this.basket[this.basket_add_index].noCanDel = true;
                    // this.basket[this.basket_add_index]
                    // if (this.allowRPersonModeArr.findIndex(el => el.R_person_mode == this.basket[this.basket_add_index].R_person_mode) == -1) {
                    //   this.allowRPersonModeArr.push(this.curRelationPerson);
                    // }
                }
            }

            // console.log('::::::', this.basket[this.basket_add_index])
        }

        /**找出董事成员 ,给第一个进行设置*/
        const first_ds_index = this.basket.findIndex(item => item.R_person_mode == RelationPersonMode.director);
        console.log('第一个董事：：：', first_ds_index, this.basket[first_ds_index])
        // console.log("first_ds_index::::", first_ds_index);
        if (first_ds_index > -0.5) {
            this.basket[first_ds_index].noCanDel = true;
            this.basket[first_ds_index].canAdd = true;


        }
        /**找出监事成员 ,给第一个进行设置*/
        const first_js_index = this.basket.findIndex(item => item.R_person_mode == RelationPersonMode.supervisors);
        console.log(first_js_index)
        console.log('第一个监事：：', this.basket[first_js_index])
        if (first_js_index > -0.5) {
            this.basket[first_js_index].noCanDel = true;
            this.basket[first_js_index].canAdd = true;
        }

        console.log('---------------::', this.basket)
        const fi = this.basket.filter(el => this.allowRPersonModeArr.indexOf(el.R_person_mode) != -1);
        console.log('===============>', fi)

    }


    _triggerFun(formData: any) {
        let that = this;
        let ps: CustomerRelationPersonModel = { ...formData, ...{ customer_org_reg_sid: that.progress.customer_org_reg_sid } };
        that.myhttp.POST(API.customerRelationPersonEdit, ps).subscribe(res => {
            if (res.status) {
                that.basket[this.basket_add_index] = { ...that.basket[that.basket_add_index], ...res.person };
                that.nzModalService.success({ nzTitle: '提示', nzContent: `${res.info}` });
            }
        })
    }

    _formModelChange(data: any) {
        let key_arr = data.key.split('.');
        this.progress[key_arr[0]][key_arr[1]] = data.value;
        // console.log(this.progress.fileCompany)
        this.setChange()
    }
    _submitForm(formData: any) {
        // console.log('传回到fivepage参数', formData);
        let that = this;
        for (let key in formData) {
            const val = formData[key];
            const keyArr = key.split('.');
            if (keyArr.length == 1) this.progress[keyArr[0]] = val;
            if (keyArr.length == 2) this.progress[keyArr[0]][keyArr[1]] = val;
        }
        let [url, templateDataJson] = ['', ''];
        switch (this.progress.agreement_templet) {
            case AgreementTemplet.fileNoFund:
                url = API.templateDataNotFundSave;
                templateDataJson = JSON.stringify(this.progress.fileNoFund);
                break;
            case AgreementTemplet.fileFund:
                url = API.templateDataFundSave;
                templateDataJson = JSON.stringify(this.progress.fileFund);
                break;
            case AgreementTemplet.fileCompany:
                url = API.templateDataCompanySave;
                templateDataJson = JSON.stringify(this.progress.fileCompany);
                break;
        }

        that.myhttp.POST(url, { progressId: that.progress.customer_org_reg_sid, templateDataJson: templateDataJson }).subscribe(res => {
            that.nzModalService.success({
                nzTitle: '提示', nzContent: `${res.info}`, nzOnOk: () => {
                    //   that.router.navigate([`../../five/${that.progress.customer_org_reg_sid}`], { relativeTo: this.activatedRoute })
                }
            });
        })



    }

    ngOnDestroy() {
        this.fiveFormGrid.wayFlag = 1;
    }

}