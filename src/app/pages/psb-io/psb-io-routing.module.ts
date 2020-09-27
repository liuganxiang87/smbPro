import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficialSealsComponent } from './official-seals/official-seals.component';

const routes: Routes = [{ path: 'officialSeals', component: OfficialSealsComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PSBIoRoutingModule { }
