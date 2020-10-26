import { Pipe, PipeTransform } from '@angular/core';
import { personPostionOptions } from '../tools/global';

@Pipe({
  name: 'personModel'
})
export class PersonModelPipe implements PipeTransform {

  transform(person_model: any): any {
    const personObj = personPostionOptions.find(el => el.value == person_model)
    return personObj ? personObj.key : '--';
  }

}
