import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskControlComponent } from './risk-control.component';
import { DocAduitComponent } from './doc-aduit/doc-aduit.component';
import { PaperAduitComponent } from './paper-aduit/paper-aduit.component';



const routes: Routes = [
  {
    path: '', component: RiskControlComponent,
    children: [
      {
        path: 'docAduit',
        component: DocAduitComponent
      },
      {
        path: 'paperAduit',
        component: PaperAduitComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskControlRoutingModule { }
