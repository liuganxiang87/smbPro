import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmigrationRoutingModule } from './emigration-routing.module';
import { ListComponent } from './list/list.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    EmigrationRoutingModule
  ]
})
export class EmigrationModule { }
