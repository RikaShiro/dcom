import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../../common/service/url.service';
import {Observable} from 'rxjs';
import {ApiRes} from '../../../common/model/response';

@Injectable({
  providedIn: 'root'
})
export class DiskStatusService {


  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  getDiskFailure(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/failure_number?type=' + type);
    return this.http.get<ApiRes>(url);
  }

  getHDFailureSta(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/HDfailure_statistics?type=' + type);
    return this.http.get<ApiRes>(url);
  }

  getHostFailureSta(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/Hfailure_statistics?type=' + type);
    return this.http.get<ApiRes>(url);
  }

  getHDMFailureSta(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/HDMfailure_statistics?type=' + type);
    return this.http.get<ApiRes>(url);
  }

  getHDBPro(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/HDB_proportion?type=' + type);
    return this.http.get<ApiRes>(url);
  }

  getFHDBPro(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/FHDB_proportion?type=' + type);
    return this.http.get<ApiRes>(url);
  }

  getFHDCPro(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/FHDC_proportion?type=' + type);
    return this.http.get<ApiRes>(url);
  }

  getHDCBPro(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/HDC_proportion?type=' + type);
    return this.http.get<ApiRes>(url);
  }

  getHDFCTrend(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/HDFC_trend?type=' + type);
    return this.http.get<ApiRes>(url);
  }

  getHDFRTrend(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/HDFR_trend?type=' + type);
    return this.http.get<ApiRes>(url);
  }

  getHDFTrend(type: string): Observable<ApiRes> {
    const url = this.urlService.getUrl('/Hard_disk_monitoring_first_page/HDF_trend?type=' + type);
    return this.http.get<ApiRes>(url);
  }
}
