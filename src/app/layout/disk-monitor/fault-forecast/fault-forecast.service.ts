import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../../common/service/url.service';
import {Observable} from 'rxjs';
import {ApiRes} from '../../../common/model/response';
import {setParams} from '../../../common/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class FaultForecastService {

  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  getModelList(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_third_page/predict');
    return this.http.get<ApiRes>(url);
  }

  getDataList(type: any): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_third_page/predict' + type);
    return this.http.get<ApiRes>(url);
  }
  getTrainingData(choice: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_third_page/predict0');
    return this.http.post<ApiRes>(setParams({choice}, url), {});
  }

  getRunModelList(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_third_page/choice');
    return this.http.post<ApiRes>(url, {});
  }
}
