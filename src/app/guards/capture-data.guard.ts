import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { AgreementTemplet, CustomerInProgressModel } from '../models';
import { NghttpService } from '../services';
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
    const isTwoPage = state.url.includes('/two');
    const isFourPage = state.url.includes('/four');
    const isFivePage = state.url.includes('/five');
    let ps: any = { progressId: id };
    if (isTwoPage) {
      ps = { progressId: id, inputArg: 1, partner: 1, relationPerson: 1, moveBefore: 1, customerPerson: 1 }
    } else if (isFourPage) {
      ps = { progressId: id, relationPerson: 1, relationOrg: 1, preDemand: 1 };
    } else if (isFivePage) {
      const agreement_templet = route.queryParams.agreement_templet;
      switch (agreement_templet) {
        case AgreementTemplet.fileNoFund:
          ps = { progressId: id, fileNoFund: 1 };
          break;
        case AgreementTemplet.fileFund:
          ps = { progressId: id, fileFund: 1 };
          break;
        case AgreementTemplet.fileCompany:
          ps = { progressId: id, fileCompany: 1, relationPerson: 1 };
          break;
      }
    }

    return that.progressData(ps);
  }


  progressData(ps = {}) {
    return this.myhttp.POST_(API.progressData, ps).pipe(
      take(1), //只请求一次
      mergeMap((res: any) => {
        let progress: CustomerInProgressModel = new CustomerInProgressModel;
        if (res.status) { progress = { ...res.data }; }
        return of(progress)
      })
    );
  }
}
