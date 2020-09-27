import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFlowRoutingModule } from './task-flow-routing.module';
import { TaskFlowComponent } from './task-flow.component';
// import { SetUpParentComponent } from '../../business-io/set-up-parent/set-up-parent.component';


@NgModule({
  declarations: [TaskFlowComponent],
  imports: [
    CommonModule,
    TaskFlowRoutingModule
  ]
})
export class TaskFlowModule { }
