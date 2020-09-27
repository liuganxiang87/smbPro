import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStrAll'
})
export class FilterStrAllPipe implements PipeTransform {
// 过滤字符串中的特殊字符已经空格
  transform(str: any): any {
    var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#……&*（）——|{}《》【】‘；：”“'。，、？]"); 
    let rs="";
    for(let i=0;i<str.length;i++){
     rs+=str.substr(i,1).replace(reg,'');
    }
    // 删除所有空格;
    rs.replace(/\s/g,"");
    return rs;
   
  }

}
