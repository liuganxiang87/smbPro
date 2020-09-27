

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';



@Component({
  selector: 'app-set-up-parent',
  templateUrl: './set-up-parent.component.html',
  styleUrls: ['./set-up-parent.component.css']
})
export class SetUpParentComponent implements OnInit, OnDestroy {
  stageTwo: string = "信息";
  stageFour: string = "高管信息";
  index: number = 0;
  routerChange: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const location = this.router.url;
    this.onCurIndex(location);
  }

  ngOnInit() {
    this.routerChange = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        const location = this.router.url;
        this.onCurIndex(location)
      });
  }
  onCurIndex(location: string) {
    if (location.includes('/two/')) this.index = 1;
    if (location.includes('/three/')) this.index = 2;
    if (location.includes('/four/')) this.index = 3;
  }
  onIndexChange(index: number) {
    let index_str = 'one'
    switch (index) {
      case 1:
        index_str = 'two'
        break;
      case 2:
        index_str = 'three'
        break;
      case 3:
        index_str = 'four'
        break;
    }

    console.log(index_str)

  }
  ngOnDestroy() {
    console.log('--------销毁----------');
    if (this.routerChange) this.routerChange.unsubscribe()
  }


}
