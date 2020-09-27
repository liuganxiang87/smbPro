import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'emailList', loadChildren: () => import('./email-list/email-list.module').then(m => m.EmailListModule) },
  { path: 'sendEmail', loadChildren: () => import('./send-email/send-email.module').then(m => m.SendEmailModule) },
  { path: 'setUp', loadChildren: () => import('./set-up-parent/set-up-parent.module').then(m => m.SetUpParentModule) },
  // 迁入
  { path: 'immigration', loadChildren: () => import('./immigration-parent/immigration-parent.module').then(m => m.ImmigrationParentModule) },
  // 迁转
  { path: 'moving', loadChildren: () => import('./moving-parent/moving-parent.module').then(m => m.MovingParentModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessIORoutingModule { }
