import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './one.component';
import { TwoComponent } from './two.component';
import { ThreeComponent } from './three.component';
import { FourComponent } from './four.component';

import { ImmigrationParentComponent } from './immigration-parent.component';
import { ProgressDataGuard } from 'src/app/guards/progress-data.guard';
const routes: Routes = [
  {
    path: '', component: ImmigrationParentComponent,
    children: [
      { path: 'one/:id', component: OneComponent, resolve: { progress: ProgressDataGuard } },
      { path: 'two/:id', component: TwoComponent },
      { path: 'three/:id', component: ThreeComponent },
      { path: 'four/:id', component: FourComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImmigrationParentRoutingModule { }
