import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../../common/service/url.service';
import {Observable} from 'rxjs';
import {ApiRes} from '../../../common/model/response';

@Injectable({
  providedIn: 'root'
})
export class PueService {

  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  getDataList(condition: any): Observable<ApiRes> {
    const url = this.urlService.getUrl('/dn/list');
    return this.http.post<ApiRes>(url, condition);
  }

}
