import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetUpParentComponent } from './set-up-parent.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { ProgressDataGuard } from 'src/app/guards/progress-data.guard';
import { CaptureDataGuard } from 'src/app/guards/capture-data.guard';
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
        component: ThreeComponent
      },
      {
        path: 'four/:id',
        component: FourComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetUpParentRoutingModule { }
