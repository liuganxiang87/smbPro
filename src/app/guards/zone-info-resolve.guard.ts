import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { NghttpService } from '../services';
import { API } from '../tools/API';


@Injectable({
  providedIn: 'root'
})
export class ZoneInfoResolveGuard implements Resolve<any>{
  constructor(
    private myhttp: NghttpService
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let that = this;
    return that.myhttp.GET(API.zoneInfo, { zone: 'gqc' })

  }
}
