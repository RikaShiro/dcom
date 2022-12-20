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
    const url = this.urlService.getUrl('/login');
    return this.http.post<ApiRes>(url, loginForm);
  }
  isLoggedIn() {
    const username = localStorage.getItem('username')
    return username && username.length >= 4
  }
}
