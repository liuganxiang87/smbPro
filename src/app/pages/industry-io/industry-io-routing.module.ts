import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessLicenseComponent } from './business-license/business-license.component';
import { PaperMaterialComponent } from './paper-material/paper-material.component';



const routes: Routes = [
  { path: 'businessLicense', component: BusinessLicenseComponent },
  { path: 'paperMaterial', component: PaperMaterialComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryIoRoutingModule { }
