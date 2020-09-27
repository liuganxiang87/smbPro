import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessIORoutingModule } from './business-io-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SharedModule,
    BusinessIORoutingModule
  ]
})

export class BusinessIOModule { }
