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
    cooperateCache: '协作缓存',
    randomCache: '随机缓存',
    cooperateCacheHit: '协作缓存击中',
    randomCacheHit: '随机缓存击中',
    userRequest: '用户请求',
  } as any;
  constructor() {}

  getTranslation(engText: string) {
    return engText in this.dict ? this.dict[engText] : engText;
  }
}
