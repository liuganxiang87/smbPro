import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgZorroAntdModule, NzUploadModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
// import { NzIconModule } from "ng-zorro-antd/icon";
import { DirectivesModule } from "src/app/directives/directives.module";
import { HttpClientModule } from "@angular/common/http";
// IconsProviderModule
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { IconsProviderModule } from './icons-provider.module';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    IconsProviderModule,
    DirectivesModule,
    HttpClientModule,
    NzUploadModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    IconsProviderModule,
    DirectivesModule,
    NzUploadModule,
    HttpClientModule

  ]
})
export class SharedModule { }
