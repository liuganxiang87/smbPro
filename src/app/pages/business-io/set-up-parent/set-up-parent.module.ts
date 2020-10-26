import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetUpParentRoutingModule } from './set-up-parent-routing.module';
import { SetUpParentComponent } from './set-up-parent.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { OneComponent } from './one.component';
import { TwoComponent } from './two.component';
import { ThreeComponent } from './three.component';
import { FourComponent } from './four.component';
import { FiveComponent } from './five.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [SetUpParentComponent, OneComponent, TwoComponent, ThreeComponent, FourComponent, FiveComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SetUpParentRoutingModule,
    PipesModule
  ]
})
export class SetUpParentModule { }
