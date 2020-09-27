import { Component, OnInit } from '@angular/core';
import { BaseFormControls } from 'src/app/classes';
import { Observable } from 'rxjs';
import { FormDataTreeService, NghttpService } from 'src/app/services';
import { API } from 'src/app/tools/API';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.css']
})
export class ProgressListComponent implements OnInit {
  bfcs$: Observable<BaseFormControls<any>[]>;
  searchPs = {
    type: '1',
    name: '',
    own: false,
    page: 1,
    size: 15
  }
  _page = {
    index: 1,
    size: 15,
    total: 15
  }
  list: any[] = []
  constructor(private myhttp: NghttpService, private service: FormDataTreeService, private router: Router, private activatedRoute: ActivatedRoute) {
    const type = this.activatedRoute.snapshot.params.type;
    this.searchPs.type = type;
    this.bfcs$ = this.service.getSetUpListSearchForm(type);
    this.search();
  }

  ngOnInit() {

  }

  _submitForm(e: any) {
    this.searchPs = {
      type: e.type,
      name: e.name || '',
      own: e.own,
      page: 1,
      size: 15
    }
    this._page.index = 1;
    this.search();
  }
  search() {
    let that = this;
    that.list = [];
    that.myhttp.POST(API.getProgressList, that.searchPs).subscribe(res => {
      if (res.status) {
        that.list = res.data;
        that._page = { ...that._page, ...{ total: res.count } };
      }
    })
  }
  _pageIndexChange(e: any) {
    this._page.index = this.searchPs.page = e;
    this.search();

  }
  operate(index: number, type: number) {
    const item = this.list[index];
    switch (type) {
      case 1:
        this.router.navigate([`/welcome/inProcess/taskFlow/setUp/one/${item.customer_org_reg_sid}`], { queryParams: { isDisabled: true } })
        break;
    }


  }

}
