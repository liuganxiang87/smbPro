import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovingParentRoutingModule } from './moving-parent-routing.module';
import { MovingParentComponent } from './moving-parent.component';

import { ComponentsModule } from 'src/app/components/components.module';
import { OneComponent } from './one.component';
import { TwoComponent } from './two.component';
import { ThreeComponent } from './three.component';
import { FourComponent } from './four.component';

@NgModule({
  declarations: [MovingParentComponent, OneComponent, TwoComponent, ThreeComponent, FourComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MovingParentRoutingModule
  ]
})
export class MovingParentModule { }
