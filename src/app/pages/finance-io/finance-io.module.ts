import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceIoRoutingModule } from './finance-io-routing.module';
import { FinanceIoComponent } from './finance-io.component';
import { OrderComponent } from './order/order.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [FinanceIoComponent, OrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    FinanceIoRoutingModule
  ]
})
export class FinanceIoModule { }
