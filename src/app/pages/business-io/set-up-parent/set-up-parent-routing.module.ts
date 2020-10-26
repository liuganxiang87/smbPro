import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetUpParentComponent } from './set-up-parent.component';
import { ProgressDataGuard } from 'src/app/guards/progress-data.guard';
import { CaptureDataGuard } from 'src/app/guards/capture-data.guard';
import { BankListGuard } from 'src/app/guards/bank-list.guard';
import { OneComponent } from './one.component';
import { TwoComponent } from './two.component';
import { ThreeComponent } from './three.component';
import { FourComponent } from './four.component';
import { FiveComponent } from './five.component';
const routes: Routes = [
  {
    path: '',
    component: SetUpParentComponent,
    children: [
      { path: '', redirectTo: 'one/0', pathMatch: 'full' },

      {
        path: 'one/:id',
        component: OneComponent,
        resolve: { progress: ProgressDataGuard }
      },
      {
        path: 'two/:id',
        component: TwoComponent,
        resolve: { progress: CaptureDataGuard }
      },
      {
        path: 'three/:id',
        component: ThreeComponent,
        resolve: { progress: CaptureDataGuard }
      },
      {
        path: 'four/:id',
        component: FourComponent,
        resolve: { progress: CaptureDataGuard, bankList: BankListGuard }
      }
      ,
      {
        path: 'five/:id',
        component: FiveComponent,
        resolve: { progress: CaptureDataGuard }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetUpParentRoutingModule { }
