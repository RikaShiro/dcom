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

  getModelList(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/execution/model-list');
    return this.http.get<ApiRes>(url);
  }
  getPredictData(model: string = 'my_module.h5'): Observable<ApiRes> {
    const url = this.urlService.getUrl('/execution/predict');
    const params = new HttpParams({
      fromObject: {
        moduleChose: model,
      },
    });
    return this.http.get<ApiRes>(url, { params });
  }
}
