import { Injectable } from '@angular/core';

@Injectable()
export class StrFilterService {

  constructor() { }
  // 去掉特殊字符串，除中文小括号（）
  strFilterSome(str: string) {
    var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#……&*——|{}《》【】‘；：”“'。，、？]");
    let rs = "";
    if (str) {
      for (let i = 0; i < str.length; i++) {
        rs += str.substr(i, 1).replace(reg, '');
      }

      // 删除所有空格;
      rs = rs.replace(/\s*/g, "");
    }

    return rs;
  }
  // 去掉所有特殊符号
  strFilterAll(str: string) {
    var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#……&*（）——|{}《》【】‘；：”“'。，、？]");
    let rs = "";
    if (str) {
      for (let i = 0; i < str.length; i++) {
        rs += str.substr(i, 1).replace(reg, '');
      }
      // 删除所有空格;
      rs = rs.replace(/\s*/g, "");

    }


    return rs;
  }
  // 去除两边空格
  bilateralSpace(str: string) {
    let rs = '';
    if (str) {
      rs = str.replace(/(^\s*)|(\s*$)/g, "");
    }
    return rs;
  }

}
