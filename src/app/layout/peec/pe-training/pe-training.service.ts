import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../../../common/service/url.service';
import { Observable } from 'rxjs';
import { ApiRes } from '../../../common/model/response';
import {setParams} from '../../../common/utils/utils';

@Injectable({
  providedIn: 'root',
})
export class PeTrainingService {
  constructor(private http: HttpClient, private urlService: UrlService) {}

  getModelList(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_second_page/train');
    return this.http.get<ApiRes>(url);
  }

  getTrainData(type: any): Observable<ApiRes> {
    const url = this.urlService.getUrl(
      '/kinetic_energy_second_page/train' + type
    );
    return this.http.get<ApiRes>(url);
  }

  getRealTrainData(condition: any): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_second_page/train0');
    return this.http.post<ApiRes>(setParams(condition, url), {});
  }

  getRealTrainResult(condition: any): Observable<ApiRes> {
    const url = this.urlService.getUrl(
      '/kinetic_energy_second_page/train0_output'
    );
    return this.http.post<ApiRes>(setParams(condition, url), {});
  }

  getTrainingStatus(): Observable<ApiRes> {
    const url = this.urlService.getUrl(
      '/kinetic_energy_second_page/in_training'
    );
    return this.http.get<ApiRes>(url);
  }
}
