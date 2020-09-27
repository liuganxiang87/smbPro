import { Pipe, PipeTransform } from '@angular/core';
import { CurStepObj } from '../models';

@Pipe({
  name: 'curStep'
})
export class CurStepPipe implements PipeTransform {
  transform(biz_type: string | number, current_step_id: number | string): any {
    for (let bizTypeKey in CurStepObj) {
      if (bizTypeKey == biz_type) {
        for (let stepKey in CurStepObj[bizTypeKey]) {
          if (parseInt(stepKey) == current_step_id) {
            return CurStepObj[bizTypeKey][stepKey];
          }
        }
      }
    }
    return "未知";
  }

}
