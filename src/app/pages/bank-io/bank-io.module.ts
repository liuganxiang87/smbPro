import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankIoRoutingModule } from './bank-io-routing.module';
import { BankIoComponent } from './bank-io.component';
import { BasicAccountInfoComponent } from './basic-account-info/basic-account-info.component';

import { InstitutionCodeComponent } from './institution-code/institution-code.component';
import { BankAccountManageComponent } from './bank-account-manage/bank-account-manage.component';
import { BasicAccountDestroyComponent } from './basic-account-destroy/basic-account-destroy.component';


@NgModule({
  declarations: [BankIoComponent, BasicAccountInfoComponent, InstitutionCodeComponent, BankAccountManageComponent, BasicAccountDestroyComponent],
  imports: [
    CommonModule,
    BankIoRoutingModule
  ]
})
export class BankIoModule { }
