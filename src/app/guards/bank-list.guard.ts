import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NghttpService } from '../services';
import { API } from '../tools/API';
import { take, mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BankListGuard implements Resolve<any>  {
  constructor(
    private myhttp: NghttpService
  ) { }


  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let that = this;
    return that.myhttp.POST_(API.getAllBank).pipe(
      take(1), //只请求一次
      mergeMap((res: any) => {
        return of(res.status ? res.data : [])
      })

    )
  }
}
