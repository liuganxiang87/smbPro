import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FourComponent } from './four/four.component';
import { ThreeComponent } from './three/three.component';
import { MovingParentComponent } from './moving-parent.component';
import { ProgressDataGuard } from 'src/app/guards/progress-data.guard';



const routes: Routes = [{
  path: '', component: MovingParentComponent,
  children: [
    { path: 'one/:id', component: OneComponent, resolve: { progress: ProgressDataGuard } },
    { path: 'two/:id', component: TwoComponent },
    { path: 'three/:id', component: ThreeComponent },
    { path: 'four/:id', component: FourComponent },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovingParentRoutingModule { }
