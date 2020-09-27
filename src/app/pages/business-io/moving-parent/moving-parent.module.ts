import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovingParentRoutingModule } from './moving-parent-routing.module';
import { MovingParentComponent } from './moving-parent.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  declarations: [MovingParentComponent, OneComponent, TwoComponent, ThreeComponent, FourComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MovingParentRoutingModule
  ]
})
export class MovingParentModule { }
