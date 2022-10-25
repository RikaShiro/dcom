import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlService } from 'src/app/common/service/url.service';
import { Observable } from 'rxjs';
import { ApiRes } from 'src/app/common/model/response';

@Injectable({
  providedIn: 'root',
})
export class CacheStrategyService {
  constructor(private http: HttpClient, private urlService: UrlService) {}

  getPredictData(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/execution/predict');
    const params = new HttpParams({
      fromString: 'moduleChose=my_module.h5',
    });
    return this.http.get<ApiRes>(url, { params });
  }
}
