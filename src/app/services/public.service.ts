import { Injectable } from '@angular/core';
/**npm install file-saver --save     npm install @types/file-saver --save */
import * as FileSaver from 'file-saver';
/**npm install xlsx –save */
import * as XLSX from 'xlsx';
@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor() { }

  exportList(json_arr: any[] = [], excel_name: string) {

    // let json = [];
    //这个nameList (随便起的名字)，是要导出的json数据
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json_arr);
    const workbook: XLSX.WorkBook = { Sheets: { [excel_name]: worksheet }, SheetNames: [excel_name] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //这里类型如果不正确，下载出来的可能是类似xml文件的东西或者是类似二进制的东西等
    this.saveAsExcelFile(excelBuffer, excel_name);
  }
  saveAsExcelFile(buffer: any, fileName: string) {
    /**
     * 导出数据fun  和下面  方法都可以下载
     */
    // 方法一
    const EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'";
    const EXCEL_EXTENSION = ".xlsx";
    const data = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + "_" + new Date().getTime() + EXCEL_EXTENSION
    );

    // 方法二
    // var blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' }); // application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型
    // var downloadElement = document.createElement('a');
    // var href = window.URL.createObjectURL(blob);
    // downloadElement.href = href;
    // downloadElement.download = fileName + '.xlsx';
    // document.body.appendChild(downloadElement);
    // downloadElement.click();
    // document.body.removeChild(downloadElement);
    // window.URL.revokeObjectURL(href);

  }


  //将数字转化为chart类型
  private numberToChart(i: number): string {
    return String.fromCharCode(65 + i);
  }

  // 字符串后面添加一个随机数字
  addRandom(str: string) {
    let _str = `${str}?num=${Math.random()}`;
    return _str || null;
  }
  // 验证邮箱
  vaildEmail(email: string) {
    var reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
    return !!(email && (reg.test(email)))

  }


  copyData(o: any) {
    return JSON.parse(JSON.stringify(o))
  }
}

