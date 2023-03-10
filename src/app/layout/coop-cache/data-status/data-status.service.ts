import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRes } from 'src/app/common/model/response';
import { UrlService } from 'src/app/common/service/url.service';

@Injectable({
  providedIn: 'root',
})
export class DataStatusService {
  constructor(private http: HttpClient, private urlService: UrlService) {}

  getInfoData(station: number, time: number): Observable<ApiRes> {
    const url = this.urlService.getUrl('/info/getinfo');
    const params = new HttpParams({
      fromObject: {
        station,
        span: time,
      },
    });
    return this.http.get<ApiRes>(url, { params });
  }
}
