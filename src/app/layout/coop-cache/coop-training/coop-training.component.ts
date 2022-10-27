import { Component, OnInit } from '@angular/core';
import { CoopTrainingService } from './coop-training.service';

@Component({
  selector: 'app-coop-training',
  templateUrl: './coop-training.component.html',
  styleUrls: ['./coop-training.component.less'],
})
export class CoopTrainingComponent implements OnInit {
  range = [];
  value = 'A-213';
  list = [
    { id: 12, name: '训练集' },
    { id: 12, name: '测试集' },
  ];
  loading = false;

  cacheData: any = {};
  cacheDataLoading: boolean = true;
  trafficData = {};
  trafficDataLoading: boolean = true;
  constructor(private service: CoopTrainingService) {}

  ngOnInit(): void {
    this.getCacheData();
    this.getTrafficData();
  }

  getCacheData() {
    this.cacheDataLoading = true;
    this.service.getCacheData().subscribe((res) => {
      if (res.code === 200) {
        const $ = res.data
        this.cacheData.delay = [
          $.ad_ADL,
          $.ad_ADL_ran,
        ];
        this.cacheData.hit = [
          $.ad_HIT,
          $.ad_HIT_ran,
        ]
        this.cacheData.util = [
          $.ad_UTIL,
          $.ad_UTIL_ran
        ]
        this.cacheData.traffic = [
          $.ad_hitTraffic,
          $.ad_hitTraffic_ran,
          $.ad_reTraffic
        ]
        for (let k in this.cacheData) {
          this.cacheData[k].push($.xAxis)
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
            predict: $.predict
          },
          MSE: $.MSE
        }
        this.trafficDataLoading = false;
      }
    });
  }

  getDataList(condition: any) {
    this.loading = true;
    this.service.getDataList(condition).subscribe((res) => {
      this.loading = false;
      if (res.code === 200) {
        console.log(res.data);
      }
    });
  }
}
