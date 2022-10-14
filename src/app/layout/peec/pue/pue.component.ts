import { Component, OnInit } from '@angular/core';
import {PueService} from './pue.service';

class PueValue {
  id?: any;
  typeName?: string;
  range?: string;
  max?: number;
  min?: number;
  value?: number;
}

@Component({
  selector: 'app-pue',
  templateUrl: './pue.component.html',
  styleUrls: ['./pue.component.less']
})
export class PueComponent implements OnInit {


  selectedModel = null;
  modelData = [];
  list = [
    {id:12, typeName: '西侧冷冻水管供水温度(℃)', range: '11.98 ~ 20.2', value: 13.8, min: 11.98, max: 20.2},
    {id:12, typeName: '西侧冷冻水管回水温度(℃)', range: '12.30 ~ 19.58', value: 13.9, min: 12.30, max: 19.58},
    {id:12, typeName: '东侧冷冻水管供水温度(℃)', range: '10.52 ~ 19.66', value: 14, min: 10.52, max: 19.66},
    {id:12, typeName: '东侧冷冻水管回水温度(℃)', range: '12.10 ~ 19.34', value: 14.2, min: 12.10, max: 19.34},
    {id:12, typeName: '西侧冷冻水管供水压力', range: '1.83 ~ 4.75', value: 1.92, min: 1.83, max: 4.75},
    {id:12, typeName: '西侧冷冻水管回水压力', range: '0.90 ~ 2.70', value: 0.11, min: 0.90, max: 2.70},
    {id:12, typeName: '东侧冷冻水管供水压力', range: '1.79 ~ 4.66', value: 2.1, min: 1.79, max: 4.66},
    {id:12, typeName: '东侧冷冻水管回水压力', range: '0.91 ~ 2.73', value: 1.15, min: 0.91, max: 2.73},
    {id:12, typeName: '1号冷机冷凝器进水温度(℃)', range: '4.67 ~ 31.89', value: 12, min: 4.67, max: 31.89},
    {id:12, typeName: '2号冷机冷凝器进水温度(℃)', range: '11.06 ~ 32.5', value: 17.5, min: 11.06, max: 32.5},
    {id:12, typeName: '3号冷机冷凝器进水温度(℃)', range: '10.89 ~ 31.0', value: 16, min: 10.89, max: 31.0},
    {id:12, typeName: '4号冷机冷凝器进水温度(℃)', range: '6.89 ~ 32.67', value: 33, min: 6.89, max: 32.67},
    {id:12, typeName: '1号冷机冷凝器出水温度(℃)', range: '4.67 ~ 35.5', value: 12.5, min: 4.67, max: 35.5},
    {id:12, typeName: '2号冷机冷凝器出水温度(℃)', range: '11.5 ~ 36.39', value: 34, min: 11.5, max: 36.39},
    {id:12, typeName: '3号冷机冷凝器出水温度(℃)', range: '11.06 ~ 35.39', value: 33, min: 11.06, max: 35.39},
    {id:12, typeName: '4号冷机冷凝器出水温度(℃)', range: '6.89 ~ 35.56', value: 15, min: 6.89, max: 35.56},
    {id:12, typeName: '1号冷机冷却水进水温度(℃)', range: '4.62 ~ 32.44', value: 12.5, min: 4.62, max: 32.44},
    {id:12, typeName: '2号冷机冷却水进水温度(℃)', range: '12.12 ~ 32.84', value: 34, min: 12.12, max: 32.84},
    {id:12, typeName: '3号冷机冷却水进水温度(℃)', range: '10.76 ~ 31.18', value: 33, min: 10.76, max: 31.18},
    {id:12, typeName: '4号冷机冷却水进水温度(℃)', range: '6.7 ~ 33.0', value: 15, min: 6.7, max: 33.0},
    {id:12, typeName: '1号冷机冷却侧出水温度(℃)', range: '4.82 ~ 35.54', value: 19.5, min: 4.82, max: 35.54},
    {id:12, typeName: '2号冷机冷却侧出水温度(℃)', range: '11.7 ~ 36.76', value: 17.5, min: 11.7, max: 36.76},
    {id:12, typeName: '3号冷机冷却水出水温度(℃)', range: '10.88 ~ 35.46', value: 23.9, min: 10.88, max: 35.46},
    {id:12, typeName: '4号冷机冷却水出水温度(℃)', range: '6.98 ~ 35.54', value: 20.4, min: 6.98, max: 35.54},
    {id:12, typeName: '1号冷机蒸发器进水温度(℃)', range: '0.0 ~ 33.02', value: 19.5, min: 0.0, max: 33.02},
    {id:12, typeName: '2号冷机蒸发器进水温度(℃)', range: '0.0 ~ 36.96', value: 16, min: 0.0, max: 36.96},
    {id:12, typeName: '3号冷机蒸发器进水温度(℃)', range: '0.0 ~ 34.74', value: 14, min: 0.0, max: 34.74},
    {id:12, typeName: '4号冷机蒸发器进水温度(℃)', range: '0.0 ~ 30.74', value: 12.8, min: 0.0, max: 30.74},
    {id:12, typeName: '1号冷机蒸发器出水温度(℃)', range: '11.28 ~ 21.78', value: 17.2, min: 11.28, max: 21.78},
    {id:12, typeName: '2号冷机蒸发器出水温度(℃)', range: '12.28 ~ 20.67', value: 12.3, min: 12.28, max: 20.67},
    {id:12, typeName: '3号冷机蒸发器出水温度(℃)', range: '12.17 ~ 21.5', value: 13.5, min: 12.17, max: 21.5},
    {id:12, typeName: '4号冷机蒸发器出水温度(℃)', range: '12.28 ~ 27.56', value: 13.2, min: 12.28, max: 27.56},
    {id:12, typeName: '1号冷却塔积水盘温度(℃)', range: '10.89 ~ 20.28', value: 12.7, min: 10.89, max: 20.28},
    {id:12, typeName: '2号冷却塔积水盘温度(℃)', range: '11.89 ~ 18.39', value: 17.5, min: 11.89, max: 18.39},
    {id:12, typeName: '3号冷却塔积水盘温度(℃)', range: '11.89 ~ 21.28', value: 14, min: 11.89, max: 21.28},
    {id:12, typeName: '4号冷却塔积水盘温度(℃)', range: '11.67 ~ 20.5', value: 13.4, min: 11.67, max: 20.5}
    ];

  loading = false;
  constructor(private service: PueService) { }

  ngOnInit(): void {
    this.getDataList({});
  }

  getDataList(condition: any) {
    this.loading = true;
    this.service.getDataList(condition).subscribe(res => {
      this.loading = false;
      if (res.code === 200) {
        console.log(res.data);
      }
    });
  }

  modelChange(event: any) {}
}
