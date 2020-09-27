import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InProcessRoutingModule } from './in-process-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { GoingComponent } from './going/going.component';
import { SharedModule } from 'src/app/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { ProgressListComponent } from './progress-list/progress-list.component';



@NgModule({
  declarations: [StatisticsComponent, GoingComponent, ProgressListComponent],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
    ComponentsModule,
    InProcessRoutingModule
  ]
})
export class InProcessModule { }
