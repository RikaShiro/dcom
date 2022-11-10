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

  getModelList(): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/predict');
    return this.http.get<ApiRes>(url);
  }

  getPredictData(type: number): Observable<ApiRes> {
    const url = this.urlService.getUrl('/kinetic_energy_third_page/predict' + type);
    return this.http.get<ApiRes>(url);
  }
}
