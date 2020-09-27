import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PSBIoRoutingModule } from './psb-io-routing.module';
import { OfficialSealsComponent } from './official-seals/official-seals.component';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  declarations: [OfficialSealsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PSBIoRoutingModule
  ]
})
export class PSBIoModule { }
