import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { CustomerInProgressModel } from '../models';
import { NghttpService, ProgressInitService } from '../services';
import { API } from '../tools/API';

@Injectable({
  providedIn: 'root'
})
export class CaptureDataGuard implements Resolve<any>  {
  constructor(
    private myhttp: NghttpService,
    // private progressService: ProgressInitService
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let that = this;
    const id = route.paramMap.get('id');
    return that.myhttp.POST_(API.progressData, { progressId: id, inputArg: 1, partner: 1, relationPerson: 1, moveBefore: 1, customerPerson: 1 }).pipe(
      take(1), //只请求一次
      mergeMap((res: any) => {
        return of(res.status ? res.data : null);
      })
    );

  }
}
