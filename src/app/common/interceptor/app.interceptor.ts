import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {NzMessageService} from 'ng-zorro-antd/message';

import {AppService} from '../../app.service';


@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private message: NzMessageService,
              private appService: AppService) {
  }


  // 禁止在拦截器内修改请求头, 修改返回内容
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // 克隆请求头
    const authReq = req.clone({
      setHeaders: {
        'Cache-Control': 'no-cache',          // 去除IE get请求缓存
        Pragma: 'no-cache',
      }
    });


    return next.handle(authReq).pipe(
      tap({
        next: event => {
          if (event instanceof HttpResponse) {
            // event.status http状态值
            if (event.status === 200) {
              const body = event.body;
              if (body instanceof Blob) {                 // 文件流不拦截  业务需求
                return event;
              } else if (body.code === '-3') {
                this.message.remove();
                this.message.error(body.msg);
                this.router.navigate(['/login']).then(() => {
                  // this.appService.clearSystem();
                });
              } else if (body.code !== 200) {
                this.message.error(body.msg);
              }
            }
          }
          return event;
        },
        error: event => {
          if (event.status === 401) {

          } else {
            this.message.error('Network exception:' + event.status);
          }
          return event;
        }
      }));
  }
}
