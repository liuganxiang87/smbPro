import { Pipe, PipeTransform } from '@angular/core';
import { ProgressTypeObj } from '../models';

@Pipe({
  name: 'bizType'
})
export class BizTypePipe implements PipeTransform {
  transform(value: string | number): any {
    // biz_type: string = "1"; // 业务类型：1：设立，2：变更，3：迁入，4：迁转，5：质押，6：调档，7：迁出，8：注销
    return ProgressTypeObj[value.toString()];
  }

}
