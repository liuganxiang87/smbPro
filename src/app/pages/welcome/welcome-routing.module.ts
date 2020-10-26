import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { LoginGuard } from 'src/app/guards/login.guard';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inProcess' },
      {
        path: 'inProcess',
        loadChildren: () => import('../in-process/in-process.module').then(m => m.InProcessModule)
      },
      {
        path: 'bussinessIO',
        loadChildren: () => import('../business-io/business-io.module').then(m => m.BusinessIOModule),
        canActivate: [LoginGuard]
      },
      {
        path: 'riskControl',
        loadChildren: () => import('../risk-control/risk-control.module').then(m => m.RiskControlModule),
        canActivate: [LoginGuard]
      },
      // 财务入口
      {
        path: 'financeIO',
        loadChildren: () => import('../finance-io/finance-io.module').then(m => m.FinanceIoModule),
        canActivate: [LoginGuard]
      },
      // 工商入口
      {
        path: 'industryIO',
        loadChildren: () => import('../industry-io/industry-io.module').then(m => m.IndustryIoModule),
        canActivate: [LoginGuard]
      },
      // 领导中心入口
      {
        path: 'leaderIO',
        loadChildren: () => import('../leader-io/leader-io.module').then(m => m.LeaderIoModule),
        canActivate: [LoginGuard]
      },
      // 公安入口
      {
        path: 'PSBIO',
        loadChildren: () => import('../psb-io/psb-io.module').then(m => m.PSBIoModule),
        canActivate: [LoginGuard]
      },
      //银行
      {
        path: 'bankIO',
        loadChildren: () => import('../bank-io/bank-io.module').then(m => m.BankIoModule),
        canActivate: [LoginGuard]
      },
      //行政
      {
        path: 'adminIO',
        loadChildren: () => import('../admin-io/admin-io.module').then(m => m.AdminIoModule),
        canActivate: [LoginGuard]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
