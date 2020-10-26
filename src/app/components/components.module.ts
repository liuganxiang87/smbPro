import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HintComponent } from './hint/hint.component';
import { FormHorComponent } from './form-hor/form-hor.component';
import { DemoComponent } from './test/test.component';
import { SharedModule } from '../shared.module';
import { PopCustomerSourceComponent } from './pop-customer-source/pop-customer-source.component';
import { ChooseCustomerComponent } from './choose-customer/choose-customer.component';
import { AddPartnerComponent } from './add-partner/add-partner.component';
import { FormHorPartnerComponent } from './form-hor/form-hor-partner.component';
import { FormGridComponent } from './form-grid/form-grid.component';

import { ModalRelationPersonComponent } from './modal-relation-person/modal-relation-person.component';
import { ModalFormComponent } from './modal-form/modal-form.component';


@NgModule({
  declarations: [
    HeaderSearchComponent,
    PaginationComponent,
    HintComponent, FormHorComponent,
    PopCustomerSourceComponent,
    ChooseCustomerComponent,
    DemoComponent,
    AddPartnerComponent,
    FormHorPartnerComponent,
    FormGridComponent,
    ModalRelationPersonComponent,
    ModalRelationPersonComponent,
    ModalFormComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderSearchComponent,
    PaginationComponent,
    HintComponent,
    FormHorComponent,
    DemoComponent,
    PopCustomerSourceComponent,
    ChooseCustomerComponent,
    AddPartnerComponent,
    FormHorPartnerComponent,
    FormGridComponent,
    ModalRelationPersonComponent,
    ModalFormComponent,
    SharedModule
  ]
})
export class ComponentsModule { }
