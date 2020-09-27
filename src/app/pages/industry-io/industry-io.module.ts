import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryIoRoutingModule } from './industry-io-routing.module';
import { IndustryIoComponent } from './industry-io.component';
import { PaperMaterialComponent } from './paper-material/paper-material.component';
import { BusinessLicenseComponent } from './business-license/business-license.component';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  declarations: [IndustryIoComponent, PaperMaterialComponent, BusinessLicenseComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndustryIoRoutingModule
  ]
})
export class IndustryIoModule { }
