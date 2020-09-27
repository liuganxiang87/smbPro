import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { API } from './tools/API'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MyInterceptorService } from './services';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    NgZorroAntdModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
      minTime: 100,
      exclude: [API.login, API.zoneInfo, API.getProgressList, API.progressStatistical]
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
