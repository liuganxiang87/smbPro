import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bracketFormat'
})
export class BracketFormatPipe implements PipeTransform {

  transform(str: string): any {  //将所有引文括号转中文括号
    let _str='';
    if(str||str=="0"){
      _str=  str.replace(/[(]/g,"（").replace(/[)]/g,"）");
    }


    return _str;
  }

}
