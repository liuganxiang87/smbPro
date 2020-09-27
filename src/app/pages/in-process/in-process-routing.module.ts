import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoingComponent } from './going/going.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProgressListComponent } from './progress-list/progress-list.component';





const routes: Routes = [
  { path: '', redirectTo: 'statistics', pathMatch: 'full' },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'progressList/:type', component: ProgressListComponent },
  { path: 'going', component: GoingComponent },
  // 任务流
  { path: 'taskFlow', loadChildren: () => import('./task-flow/task-flow.module').then(m => m.TaskFlowModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InProcessRoutingModule { }
