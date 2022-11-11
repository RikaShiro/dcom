import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../../../common/service/url.service';
import { Observable } from 'rxjs';
import { ApiRes } from '../../../common/model/response';
import { TrainingParameters } from './TrainingParameters';
import { CacheParameters } from './CacheParameters';

@Injectable({
  providedIn: 'root',
})
export class CoopTrainingService {
  constructor(private http: HttpClient, private urlService: UrlService) {}

  postTrainingModel(
    trainingParameters: TrainingParameters
  ): Observable<ApiRes> {
    const url = this.urlService.getUrl('/traffic/train');
    return this.http.post<ApiRes>(url, trainingParameters);
  }
  postCacheModel(cacheParameters: CacheParameters): Observable<ApiRes> {
    const url = this.urlService.getUrl('/cache/train');
    return this.http.post<ApiRes>(url, cacheParameters);
  }
  getTrafficData(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/traffic/trained');
    return this.http.get<ApiRes>(url);
  }
  getCacheData(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/cache/trained');
    return this.http.get<ApiRes>(url);
  }
}
