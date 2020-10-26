import { Pipe, PipeTransform } from '@angular/core';

import { partnerIdAllTypeArr } from '../tools/global'

@Pipe({
  name: 'personIdType'
})
export class PersonIdTypePipe implements PipeTransform {

  transform(value: any): any {
    const personObj = partnerIdAllTypeArr.find(el => el.value = value);
    return personObj ? personObj.key : '--';
  }

}
