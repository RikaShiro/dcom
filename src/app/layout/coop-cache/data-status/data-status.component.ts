import { Component, OnInit } from '@angular/core';
import { DataStatusService } from './data-status.service';

@Component({
  selector: 'app-data-status',
  templateUrl: './data-status.component.html',
  styleUrls: ['./data-status.component.less'],
})
export class DataStatusComponent implements OnInit {
  date = 0;
  rangeList = [
    { label: '24 Hours', value: 0 },
    { label: '30 Days', value: 1 },
    { label: '52 Weeks', value: 2 },
  ];
  hasLine = false;
  showLabel = true;

  loading = true;
  colors = ['#008000', '#ff9537'];
  cacheData = {};
  trafficData = {};
  dayData = {};
  weekData = {};
  monthData = {};
  yearData = {};

  constructor(private service: DataStatusService) {}
  ngOnInit(): void {
    this.getInfoData();
  }
  getInfoData() {
    this.loading = true;
    this.service.getInfoData().subscribe((res) => {
      if (res.code === 200) {
        const $ = res.data;
        this.cacheData = {
          xAxis: $.cache.xAxis,
          data: {
            cooperativeCache: $.cache.CooperativeCache,
            randomCache: $.cache.RandomCache,
          },
        };
        this.trafficData = {
          xAxis: $.traffic_request.xAxis,
          data: {
            request: $.traffic_request.request,
            traffic: $.traffic_request.traffic,
          },
          line: true,
        };
        this.dayData = {
          xAxis: $.day_dis.xAxis,
          data: {
            request: $.day_dis.request,
            traffic: $.day_dis.traffic,
          },
        };
        this.weekData = {
          xAxis: $.week_dis.xAxis,
          data: {
            request: $.week_dis.request,
            traffic: $.week_dis.traffic,
          },
        };
        this.monthData = {
          xAxis: $.month_dis.xAxis,
          data: {
            request: $.month_dis.request,
            traffic: $.month_dis.traffic,
          },
        };
        this.yearData = {
          xAxis: $.year_dis.xAxis,
          data: {
            request: $.year_dis.request,
            traffic: $.year_dis.traffic,
          },
        };
      }
      this.loading = false;
    });
  }
}
