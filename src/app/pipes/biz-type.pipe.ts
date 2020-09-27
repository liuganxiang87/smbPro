import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bizType'
})
export class BizTypePipe implements PipeTransform {

  transform(value: string | number): any {
    // biz_type: string = "1"; // 业务类型：1：设立，2：变更，3：迁入，4：迁转，5：质押，6：调档，7：迁出，8：注销
    let str = '';
    switch (Number(value)) {
      case 0:
        str = '信息修改';
        break;
      case 1:
        str = '设立'
        break;
      case 2:
        str = '变更'
        break;
      case 3:
        str = '迁入'
        break;
      case 4:
        str = '迁转'
        break;
      case 5:
        str = '质押'
        break;
      case 6:
        str = '调档'
        break;
      case 7:
        str = '迁出'
        break;
      case 8:
        str = '注销'
        break;

    }
    return str;
  }

}
