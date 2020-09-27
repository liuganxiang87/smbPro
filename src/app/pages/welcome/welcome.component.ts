import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyStorageService, SetMenusService } from 'src/app/services';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  logoName: string = '共青城基金小镇';
  MENUS: any[] = this.menusService.setMeuns();
  isCollapsed: boolean = false
  constructor(private router: Router, private mystor: MyStorageService, private menusService: SetMenusService) { }
  ngOnInit() {
    this.logoName = this.mystor.getObject(this.mystor.storKey.ZONE_INFO).zone_name;
  }
  logout() {
    this.mystor.clearAll();
    this.router.navigate(["/login"]);
  }
}
