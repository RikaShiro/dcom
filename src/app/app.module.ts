import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxEchartsModule} from 'ngx-echarts';
import {ShareModule} from './common/share.module';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppInterceptor} from './common/interceptor/app.interceptor';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),

    ShareModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
