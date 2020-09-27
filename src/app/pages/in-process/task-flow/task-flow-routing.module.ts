import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskFlowComponent } from './task-flow.component';

const routes: Routes = [
  {
    path: '',
    component: TaskFlowComponent,
    children: [

      {
        path: 'setUp',
        loadChildren: () => import('../../business-io/set-up-parent/set-up-parent.module').then(m => m.SetUpParentModule)
      },
      {
        path: 'immigration',
        loadChildren: () => import('../../business-io/immigration-parent/immigration-parent.module').then(m => m.ImmigrationParentModule)
      },
      {
        path: 'moving',
        loadChildren: () => import('../../business-io/moving-parent/moving-parent.module').then(m => m.MovingParentModule)
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskFlowRoutingModule { }
