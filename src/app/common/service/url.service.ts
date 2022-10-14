import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private host = '/api';


  constructor() {
  }


  getUrl(url: string) {
    return this.host + url;
  }

  getUploadUrl() {
    return this.host + '/site/common/upload';
  }


}
