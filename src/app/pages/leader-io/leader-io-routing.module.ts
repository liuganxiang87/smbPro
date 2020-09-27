import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditFileComponent } from './audit-file/audit-file.component';



const routes: Routes = [
  { path: 'auditFile', component: AuditFileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderIoRoutingModule { }
