import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  dict = {
    request: '请求次数',
    traffic: '流量',
    dataSource: '原始数据集',
    predict: '模型预测',
    cache: '缓存',
    utility: '利用率',
  } as any;
  constructor() {}

  getTranslation(engText: string) {
    return engText in this.dict ? this.dict[engText] : engText;
  }
}
