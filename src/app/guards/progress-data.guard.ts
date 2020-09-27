import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProgressInitService, NghttpService } from 'src/app/services';
import { API } from '../tools/API';
import { take, mergeMap } from 'rxjs/operators';
import { CustomerInProgressModel } from '../models';
@Injectable({
  providedIn: 'root'
})
export class ProgressDataGuard implements Resolve<any>  {
  constructor(
    private myhttp: NghttpService,
    private progressService: ProgressInitService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let that = this;
    const id = route.paramMap.get('id');
    const url = state.url;
    let type: number = 1;//1。设立 2.迁转(22代表two,222,代表three,2222代表four ----步奏，其它同理) 3.迁入
    if (url.includes('moving/one')) type = 2;//迁转类型
    if (url.includes('immigration/one')) type = 3;  //迁入
    if (Number(id) > 0) {
      return that.myhttp.POST_(API.progressData, { progressId: id, inputArg: 1, partner: 1, relationPerson: 1, moveBefore: 1, customerPerson: 1, fileNoFund: 1, fileFund: 1 }).pipe(
        take(1), //只请求一次
        mergeMap((res: any) => {
          return of(res.status ? that.progressService.initData(res.data, type) : that.progressService.initData(new CustomerInProgressModel(), type))
        })
      );
    } else {
      return of(that.progressService.initData(new CustomerInProgressModel(), type))
    }
  }
}