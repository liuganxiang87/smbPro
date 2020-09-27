import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminIoRoutingModule } from './admin-io-routing.module';
import { ProtocolFileComponent } from './protocol-file/protocol-file.component';
import { MaterialArchiveComponent } from './material-archive/material-archive.component';



@NgModule({
  declarations: [ProtocolFileComponent, MaterialArchiveComponent],
  imports: [
    CommonModule,
    AdminIoRoutingModule
  ]
})
export class AdminIoModule { }
