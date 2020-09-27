import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskControlRoutingModule } from './risk-control-routing.module';
import { RiskControlComponent } from './risk-control.component';
import { DocAduitComponent } from './doc-aduit/doc-aduit.component';
import { PaperAduitComponent } from './paper-aduit/paper-aduit.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [RiskControlComponent, DocAduitComponent, PaperAduitComponent],
  imports: [
    CommonModule,
    SharedModule,
    RiskControlRoutingModule
  ]
})
export class RiskControlModule { }
