import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetUpParentRoutingModule } from './set-up-parent-routing.module';
import { SetUpParentComponent } from './set-up-parent.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [SetUpParentComponent, OneComponent, TwoComponent, ThreeComponent, FourComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SetUpParentRoutingModule
  ]
})
export class SetUpParentModule { }
