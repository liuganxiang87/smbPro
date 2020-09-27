import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailListRoutingModule } from './email-list-routing.module';
import { EmailListComponent } from './email-list.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [EmailListComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    EmailListRoutingModule
  ]
})
export class EmailListModule { }
