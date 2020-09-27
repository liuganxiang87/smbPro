import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderIoRoutingModule } from './leader-io-routing.module';
import { AuditFileComponent } from './audit-file/audit-file.component';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  declarations: [AuditFileComponent],
  imports: [
    CommonModule,
    SharedModule,
    LeaderIoRoutingModule
  ]
})
export class LeaderIoModule { }
