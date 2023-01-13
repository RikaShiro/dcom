import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../../common/service/url.service';
import {Observable} from 'rxjs';
import {ApiRes} from '../../../common/model/response';
import {TrainDisk} from '../model/TrainDisk';
import {setParams} from '../../../common/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class DistkTrainingService {

  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  getModelList(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_second_page/parameter');
    return this.http.get<ApiRes>(url);
  }

  getTrainData(type: any): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_second_page/train' + type);
    return this.http.get<ApiRes>(url);
  }
  getTrainingStatus(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/traffic/in-training');
    return this.http.get<ApiRes>(url);
  }
  onGoTraining(params?: TrainDisk): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_second_page/train0');
    return this.http.post<ApiRes>(setParams(params, url), {});
  }


}
