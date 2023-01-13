import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../../common/service/url.service';
import {Observable} from 'rxjs';
import {ApiRes} from '../../../common/model/response';
import {setParams} from '../../../common/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class PueService {

  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  getModelList(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/predict');
    return this.http.get<ApiRes>(url);
  }

  getRealModelList(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/choice');
    return this.http.get<ApiRes>(url);
  }

  getPredictData(type: number): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/predict' + type);
    return this.http.get<ApiRes>(url);
  }

  getRunningStatus() {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/in_training');
    return this.http.get<ApiRes>(url);
  }
  setRunning(params: any): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/predict0');
    return this.http.post<ApiRes>(setParams(params, url), {});
  }


  setRunningLMD(model: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/lmd');
    return this.http.post<ApiRes>(setParams({model}, url), {});
  }

  setRunningPartLMD(model: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/yllmd');
    return this.http.post<ApiRes>(setParams({model}, url), {});
  }

  getRunningLMD(model: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/lmd_output');
    return this.http.post<ApiRes>(setParams({model}, url), {});
  }

  getRunningPartLMD(model: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/yllmd_output');
    return this.http.post<ApiRes>(setParams({model}, url), {});
  }

}
