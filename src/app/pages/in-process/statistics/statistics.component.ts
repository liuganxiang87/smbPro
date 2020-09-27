import { Component, OnInit } from '@angular/core';
import { NghttpService } from 'src/app/services';
import { API } from 'src/app/tools/API';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  list: any[] = [];
  constructor(private myhttp: NghttpService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    let that = this;
    that.myhttp.POST(API.progressStatistical).subscribe(res => {
      if (res.status) {
        that.list = res.result;
      }
    })
  }
  routerFun(bizType: string | number) {
    this.router.navigate([`/welcome/inProcess/progressList/${bizType}`])
  }
}
