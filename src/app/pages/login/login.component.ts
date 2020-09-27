import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";


import { Router, ActivatedRoute } from '@angular/router';

import { MyStorageService } from 'src/app/services/my-storage.service';
import { API } from 'src/app/tools/API';
import { NghttpService } from 'src/app/services';
import { phoneReg } from 'src/app/tools/global';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  timer: any;
  msgError: string;
  isShow_msgError: boolean = false;
  // 验证是否为手机号码
  // verifyPhone: string = "^[1][3,4,5,7,8,9][0-9]{9}$";
  isVisible: boolean = false;
  // 验证码发送按钮  阀值
  sendFlag: boolean = true;
  // 倒计时对象
  countDownObj: any;
  countDownNum: number = 60;
  queryps: any = {};

  constructor(private fb: FormBuilder, private router: Router,
    private activatedRoute: ActivatedRoute, private http: NghttpService, private stor: MyStorageService) {
    const statePs = this.activatedRoute.snapshot.data.zoneInfo;
    if (statePs.status) {
      this.stor.setObject(this.stor.storKey.ZONE_INFO, statePs.zone)
    }
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let that = this;
    // this.createForm();Validators.minLength(7),
    that.loginForm = that.fb.group({
      loginTel: [null, Validators.pattern(phoneReg)],
      loginPwd: [null, Validators.required],
      loginCode: [null, [Validators.maxLength(7)]],

    });
    // 默认第一个为首选
    // that.loginForm.get('loginPartner').setValue(that.partners[0].type)
  }

  /**
 * 发送验证码
 */
  getCaptcha(e: Event) {
    let that = this;
    that.sendFlag = !that.sendFlag;
    if (!that.sendFlag) {
      that.clearCountDown();
      that.countDownObj = setInterval(() => {
        that.countDownNum--;
        if (that.countDownNum <= 0) {
          that.clearCountDown();
          that.sendFlag = !that.sendFlag;
        }
      }, 1000);
    }

    const fval = that.loginForm.value;
    const sendPs = {
      zone_id: that.stor.getObject(that.stor.storKey.ZONE_INFO).zone_id,
      phone: fval.loginTel,
      pwd: fval.loginPwd,
      userType: 'worker'
    }
    that.http.POST(API.getLoginCode, sendPs);

  }

  _submitForm() {
    let that = this;
    const val = that.loginForm.value;
    // console.log(that.loginForm.valid)
    if (!that.loginForm.valid) return
    const ps = {
      zone_id: that.stor.getObject(that.stor.storKey.ZONE_INFO).zone_id || 1,
      phone: val.loginTel,
      password: val.loginPwd,
      code: val.loginCode
    }

    that.http.POST(API.login, ps).subscribe(res => {
      if (res.status) {
        res.worker.token = res.access_token;
        that.stor.setObject(that.stor.storKey.USER_INFO, res.worker);
        console.log('-------------')
        that.router.navigate(["/welcome"]);

      }
    })

  }
  clearTimer() {
    if (this.timer) clearTimeout(this.timer)
  }




  // 清除倒计时
  clearCountDown() {
    if (this.countDownObj) {
      clearInterval(this.countDownObj);
      this.countDownNum = 60;
    }
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.clearTimer();
  }
}
