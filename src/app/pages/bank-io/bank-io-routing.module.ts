import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionCodeComponent } from './institution-code/institution-code.component';
import { BasicAccountInfoComponent } from './basic-account-info/basic-account-info.component';
import { BasicAccountDestroyComponent } from './basic-account-destroy/basic-account-destroy.component';
import { BankAccountManageComponent } from './bank-account-manage/bank-account-manage.component';



const routes: Routes = [
  { path: 'institutionCode', component: InstitutionCodeComponent },
  { path: 'basicAccountInfo', component: BasicAccountInfoComponent },
  { path: 'basicAccountDestory', component: BasicAccountDestroyComponent },
  { path: 'bankAccountManage', component: BankAccountManageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankIoRoutingModule { }
