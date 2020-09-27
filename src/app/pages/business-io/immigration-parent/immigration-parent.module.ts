import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmigrationParentRoutingModule } from './immigration-parent-routing.module';
import { ImmigrationParentComponent } from './immigration-parent.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { SharedModule } from 'src/app/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [ImmigrationParentComponent, OneComponent, TwoComponent, ThreeComponent, FourComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ImmigrationParentRoutingModule
  ]
})
export class ImmigrationParentModule { }
