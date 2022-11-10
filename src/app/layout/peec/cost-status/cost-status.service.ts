import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../../common/service/url.service';
import {Observable} from 'rxjs';
import {ApiRes} from '../../../common/model/response';

@Injectable({
  providedIn: 'root'
})
export class CostStatusService {


  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  getPCData(type: string): Observable<ApiRes> {
    const param = {type};
    const url = this.urlService.getUrl('/kinetic_energy_first_page/PC');
    return this.http.get<ApiRes>(url, {params: param});
  }

  getPueTrend(type: string): Observable<ApiRes> {
    const param = {type};
    const url = this.urlService.getUrl('/kinetic_energy_first_page/PUE_trend');
    return this.http.get<ApiRes>(url, {params: param});
  }

  getPCTrend(type: string): Observable<ApiRes> {
    const param = {type};
    const url = this.urlService.getUrl('/kinetic_energy_first_page/PC_trend');
    return this.http.get<ApiRes>(url, {params: param});
  }
}
