import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRes } from '../common/model/response';
import { UrlService } from '../common/service/url.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private urlService: UrlService) {}
  postLogin(loginForm: any): Observable<ApiRes> {
    console.log(loginForm)
    const url = this.urlService.getUrl('/login');
    return this.http.post<ApiRes>(url, loginForm);
  }
  getVerificationCode(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/capcha');
    return this.http.get<ApiRes>(url)
  }
}
