import { Injectable } from '@angular/core';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
// import { Urls } from '../api/api.url';
import { MyStorageService } from './my-storage.service';
import { NghttpService } from './nghttp.service';



@Injectable()
export class UploaderService {
  // public uploader:FileUploader ;
  constructor(private mystor: MyStorageService, private myhttp: NghttpService) { }

  uploaderObj(url: string, type: string, allowedFileType?: string[]) {
    // ['xls','pdf']
    // console.log("allowedFileType:", allowedFileType)
    const options: FileUploaderOptions = {
      url: url,
      method: "POST",
      itemAlias: type,
      headers: [{ name: 'Authorization', value: `Bearer ${this.mystor.getObject(this.mystor.storKey.USER_INFO).access_token}` }],
    }
    if (allowedFileType) options.allowedFileType = allowedFileType;

    return new FileUploader(options);
  }




  /**
   * 下载文件
   */

  /**
* 获取 blob
* @param  {String} url 目标文件地址
* @return {cb} 
*/
  getBlob(url: string, cb: Function) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (xhr.status === 200) {
        cb(xhr.response);
      }
    };
    xhr.send();
  }

  /**
  * 保存
  * @param  {Blob} blob     
  * @param  {String} filename 想要保存的文件名称
  */

  saveAs(blob: Blob, filename: string) {
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename);
    } else {
      var link = document.createElement('a');
      var body = document.querySelector('body');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.style.display = 'none';
      body.appendChild(link);
      link.click();
      body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    };
  }

  /**
  * 下载
  * @param  {String} url 目标文件地址
  * @param  {String} filename 想要保存的文件名称
  */
  FileDownload(url: string, filename: string) {
    this.getBlob(url, (blob: Blob) => {
      this.saveAs(blob, filename);
    });
  };


}





