import { Component, OnInit } from '@angular/core';
import { CacheParameters } from './CacheParameters';
import { CoopTrainingService } from './coop-training.service';
import { TrainingParameters } from './TrainingParameters';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-coop-training',
  templateUrl: './coop-training.component.html',
  styleUrls: ['./coop-training.component.less'],
})
export class CoopTrainingComponent implements OnInit {
  training: TrainingParameters = {
    trainSize: 67,
    optimizer: 'adam',
    loss: 'mse',
    hiddenSize: 1,
    lookBack: 1,
    epochs: 80,
    batchSize: 1,
  };
  cache: CacheParameters = {
    hiddenSize: 50,
    activation: 'relu',
    solver: 'adam',
    batchSize: 100,
    alpha: 0.00001,
    learningRate: 'constant',
    learningRateInit: 0.001,
    randomState: 1,
    tol: 0.0001,
    maxIter: 400,
    beta1: 0.9,
    beta2: 0.9,
    earlyStopping: 1,
  };

  cacheData: any = {};
  cacheDataLoading = true;
  trafficData: any = {};
  trafficDataLoading = true;

  formatterPercent = (value: number): string => `${value} %`;
  parserPercent = (value: string): string => value.replace(' %', '');
  running = false;
  constructor(private service: CoopTrainingService,
              private msg: NzMessageService) {}

  ngOnInit() {
    this.getCacheData();
    this.getTrafficData();
  }

  getCacheData() {
    this.cacheDataLoading = true;
    this.service.getCacheData().subscribe((res) => {
      if (res.code === 200) {
        const $ = res.data;
        this.cacheData.delay = {
          data: {
            cooperateCache: $.ad_ADL,
            randomCache: $.ad_ADL_ran,
          },
        };
        this.cacheData.hit = {
          data: {
            cooperateCache: $.ad_HIT,
            randomCache: $.ad_HIT_ran,
          },
        };
        this.cacheData.util = {
          data: {
            cooperateCache: $.ad_UTIL,
            randomCache: $.ad_UTIL_ran,
          },
        };
        this.cacheData.traffic = {
          data: {
            cooperateCacheHit: $.ad_hitTraffic,
            randomCacheHit: $.ad_hitTraffic_ran,
            userRequest: $.ad_reTraffic,
          },
        };
        for (const k in this.cacheData) {
          this.cacheData[k].xAxis = $.xAxis;
        }
        this.cacheDataLoading = false;
      }
    });
  }

  getTrafficData() {
    this.trafficDataLoading = true;
    this.service.getTrafficData().subscribe((res) => {
      if (res.code === 200) {
        const $ = res.data;
        this.trafficData = {
          xAxis: $.xAxis,
          data: {
            dataSource: $.dataSource,
            predict: $.predict,
          },
          MSE: $.MSE.toFixed(4),
        };
        this.trafficDataLoading = false;
      }
    });
  }
  postCacheModel() {
    this.service.postCacheModel(this.cache).subscribe((res) => {;
      if (res.code === 200) {
      }
    });
  }
  getTrainingStatus() {
    this.running = true;
    this.service.getTrainingStatus().subscribe((res) => {
      if (res.code === 200) {
        if (res.data) {
          this.postCacheModel();
        } else {
          this.msg.warning('正在进行训练，请执行完毕再操作。');
        }
      }
    }, error => {
      this.running = false;
    });
  }

  postTrainingModel() {
    this.service.postTrainingModel(this.training).subscribe((res) => {
      this.running = false;
      if (res.code === 200) {
      }
    }, error => {
      this.running = false;
    });
  }
}
