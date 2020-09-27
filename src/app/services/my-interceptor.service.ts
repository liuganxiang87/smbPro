import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { MyStorageService } from './my-storage.service';


const CODEMESSAGE = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector, private stor: MyStorageService) { }

  private get notification(): NzNotificationService {
    return this.injector.get(NzNotificationService);
  }

  private goTo(url: string) {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  private checkStatus(ev: HttpResponseBase) {
    if (ev.status >= 200 && ev.status < 300) {
      return;
    }
    const errortext = CODEMESSAGE[ev.status] || ev.statusText;

    this.notification.error(`请求错误 ${ev.status}: ${ev.url}`, errortext);
  }

  private handleData(ev: HttpResponseBase): Observable<any> {
    let zoneInfo = this.stor.getObject(this.stor.storKey.ZONE_INFO);
    let zone = 'gqc';
    if (zoneInfo && zoneInfo.zone_short_name) {
      zone = zoneInfo.zone_short_name;
    }
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>', ev)
    this.checkStatus(ev);
    // 业务处理：一些通用操作
    switch (ev.status) {
      case 200:
        console.log('拦截器里面', 200);

        // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
        // 例如响应内容：
        //  错误内容：{ status: 1, msg: '非法参数' }
        //  正确内容：{ status: 0, response: {  } }
        // 则以下代码片断可直接适用
        if (ev instanceof HttpResponse) {
          const body: any = ev.body;
          if (body && body.status == false) {
            this.notification.error(body.err, ``);
          }
          return of(ev);
        }

        break;
      case 401:

        this.notification.error(`未登录或登录已过期，请重新登录。`, ``);
        // 清空 token 信息
        this.stor.remove(this.stor.storKey.USER_INFO);
        this.goTo(`login`);
        break;
      case 403:
      case 404:
      case 500:
        // this.goTo(`/exception/${ev.status}`);

        break;
      default:

        if (ev instanceof HttpErrorResponse) {
          console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
        }
        break;
    }
    if (ev instanceof HttpErrorResponse) {
      return throwError(ev);
    } else {
      return of(ev);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      // 统一加上服务端前缀
      let url = req.url;
      /**
       * 配置访问本地对json
       */
      if (req.url.slice(0, 3) !== '../') {
        /**自动补全http 前置 */
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
          url = 'http://' + url;
        }
        // 设置token
        const token: string = this.stor.getObject(this.stor.storKey.USER_INFO).token;
        if (token) {
          req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }
        const newReq = req.clone({ url });
        return next.handle(newReq).pipe(
          mergeMap((event: any) => {
            // 允许统一对请求错误处理
            if (event instanceof HttpResponseBase) {
              return this.handleData(event);
            }
            // 若一切都正常，则后续操作
            return of(event);
          }),
          catchError((err: HttpErrorResponse) => this.handleData(err)),
        );

      } else {
        return next.handle(req);
      }
    } catch (error) {
      console.log(error)

    }



  }

}