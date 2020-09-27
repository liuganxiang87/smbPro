import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PublicService } from './public.service';
// import * as JSZip from "JSZip";
@Injectable({
  providedIn: 'root'
})
export class NghttpService {

  constructor(private http: HttpClient, private publicService: PublicService) { }
  GET(url: string, params?: any): Observable<any> {
    return this.http.get(url, {
      params: params
    }).pipe(
      // retry(2), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  POST(url: string, params?: any): Observable<any> {
    return this.http.post(url, params).pipe(
      retry(2), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  POST_(url: string, params?: any) {
    return this.http.post(url, params)
  }

  // 单个文件下载
  saveAs(blob: Blob, filename: string) {
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename);
    } else {
      var link = document.createElement('a');
      var body = document.querySelector('body');
      /**
       * 创建链接，并添加随机参数解决缓存问题
       * 
       * 备注：这里其实是不需要添加随机数的，实际测试每次生成的地址是不一样的
       * this.publicService.addRandom()
       */

      link.href = window.URL.createObjectURL(blob);;
      link.download = filename;
      link.style.display = 'none';
      body.appendChild(link);
      link.click();
      body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    };
  }
  // 保存打包为zip压缩文件
  savePackZip(blob: Blob, filename: string) {

    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename);
    } else {
      var link = document.createElement('a');
      var body = document.querySelector('body');
      /**
       * 创建链接，并添加随机参数解决缓存问题
       * 
       * 备注：这里其实是不需要添加随机数的，实际测试每次生成的地址是不一样的
       * this.publicService.addRandom()
       */
      // let zip = new JSZip();
      // zip.file(item.file_name + '.' + fileType, res, { binary: true });
      // count++;
      // if (count == this.progress.templateFile.length) {
      //   zip.generateAsync({ type: "blob" }).then((blob) => {
      //     FileSaver.saveAs(blob, this.progress.customer_name + ".zip");
      //   });
      // }
      // link.href = window.URL.createObjectURL(blob);;
      // link.download = filename;
      // link.style.display = 'none';
      // body.appendChild(link);

      // link.click();
      // body.removeChild(link);
      // window.URL.revokeObjectURL(link.href);
    };

  }



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
* 下载
* @param  {String} url 目标文件地址
* @param  {String} filename 想要保存的文件名称   (blob: Blob) => {
  // saveAs(blob, filename);
}
*/

  FileDownload(url: string, filename: string) {
    this.getBlob(url, (blob: Blob) => {
      this.saveAs(blob, filename);
    });
  };
  // 捕获异常
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
