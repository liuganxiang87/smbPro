import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './date-format.pipe';
import { OrderStatusFormatPipe } from './order-status-format.pipe';
import { BizTypePipe } from './biz-type.pipe';
import { CurStepPipe } from './cur-step.pipe';
import { PersonModelPipe } from './person-model.pipe';
import { PersonIdTypePipe } from './person-id-type.pipe';
@NgModule({
    declarations: [DateFormatPipe, OrderStatusFormatPipe, BizTypePipe, CurStepPipe, PersonModelPipe, PersonIdTypePipe],
    imports: [CommonModule],
    exports: [CommonModule, DateFormatPipe, OrderStatusFormatPipe, BizTypePipe, CurStepPipe, PersonModelPipe, PersonIdTypePipe]
}
) export class PipesModule { }
