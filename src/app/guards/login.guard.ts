import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { MyStorageService } from '../services/my-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private stor: MyStorageService,
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url  //在跳转的时候获取
    return this.checkLogin(url)
  }

  checkLogin(url: string): boolean {
    const zoneInfo = this.stor.getObject(this.stor.storKey.ZONE_INFO);
    const userInfo = this.stor.getObject(this.stor.storKey.USER_INFO);
    if (zoneInfo && zoneInfo.zone_id && userInfo && userInfo.w_phone) {
      // console.log(zoneInfo);
      // console.log(userInfo);
      this.router.navigate['welcome']

    } else {

      let zoneName = 'qgc';
      if (zoneInfo && zoneInfo.zone_short_name) {
        zoneName = zoneInfo.zone_short_name;
      }
      console.log(778788)
      this.router.navigate(["login"])
    }

    return true
  }


}
