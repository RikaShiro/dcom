import {Component, OnInit, ViewChild} from '@angular/core';
import {PueService} from './pue.service';
import {PeLineChartComponent} from '../pe-training/pe-line-chart/pe-line-chart.component';
import {ThreeLineChartComponent} from './three-line-chart/three-line-chart.component';
import {ChartType} from '../../../common/const/ChartType';
import {LineObject} from '../../disk-monitor/disk-status/disk-status.component';
import {PueChart} from '../model/Pue';
import {formatNumber, formatNumberWidth} from '../../../common/utils/utils';
import {NzModalService} from 'ng-zorro-antd/modal';
import {SensitivityLineComponent} from './sensitivity-line/sensitivity-line.component';

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

  selectedModel = 0;
  modelData: any[] = [];
  list = [
    {id:12, typeName: '西侧冷冻水管供水温度(℃)', range: '11.98 ~ 20.2', value: 13.8, min: 11.98, max: 20.2, key: 'xgswd'},
    {id:12, typeName: '西侧冷冻水管回水温度(℃)', range: '12.30 ~ 19.58', value: 13.9, min: 12.30, max: 19.58, key: 'xhswd'},
    {id:12, typeName: '东侧冷冻水管供水温度(℃)', range: '10.52 ~ 19.66', value: 14, min: 10.52, max: 19.66, key: 'dgswd'},
    {id:12, typeName: '东侧冷冻水管回水温度(℃)', range: '12.10 ~ 19.34', value: 14.2, min: 12.10, max: 19.34, key: 'dhswd'},
    {id:12, typeName: '西侧冷冻水管供水压力', range: '1.83 ~ 4.75', value: 1.92, min: 1.83, max: 4.75, key: 'xgsyl'},
    {id:12, typeName: '西侧冷冻水管回水压力', range: '0.90 ~ 2.70', value: 0.11, min: 0.90, max: 2.70, key: 'xhsyl'},
    {id:12, typeName: '东侧冷冻水管供水压力', range: '1.79 ~ 4.66', value: 2.1, min: 1.79, max: 4.66, key: 'dgsyl'},
    {id:12, typeName: '东侧冷冻水管回水压力', range: '0.91 ~ 2.73', value: 1.15, min: 0.91, max: 2.73, key: 'dhsyl'},
    {id:12, typeName: '1号冷机冷凝器进水温度(℃)', range: '4.67 ~ 31.89', value: 12, min: 4.67, max: 31.89, key: '1lnqjs'},
    {id:12, typeName: '2号冷机冷凝器进水温度(℃)', range: '11.06 ~ 32.5', value: 17.5, min: 11.06, max: 32.5, key: '2lnqjs'},
    {id:12, typeName: '3号冷机冷凝器进水温度(℃)', range: '10.89 ~ 31.0', value: 16, min: 10.89, max: 31.0, key: '3lnqjs'},
    {id:12, typeName: '4号冷机冷凝器进水温度(℃)', range: '6.89 ~ 32.67', value: 33, min: 6.89, max: 32.67, key: '4lnqjs'},
    {id:12, typeName: '1号冷机冷凝器出水温度(℃)', range: '4.67 ~ 35.5', value: 12.5, min: 4.67, max: 35.5, key: '1lnqcs'},
    {id:12, typeName: '2号冷机冷凝器出水温度(℃)', range: '11.5 ~ 36.39', value: 34, min: 11.5, max: 36.39, key: '2lnqcs'},
    {id:12, typeName: '3号冷机冷凝器出水温度(℃)', range: '11.06 ~ 35.39', value: 33, min: 11.06, max: 35.39, key: '3lnqcs'},
    {id:12, typeName: '4号冷机冷凝器出水温度(℃)', range: '6.89 ~ 35.56', value: 15, min: 6.89, max: 35.56, key: '4lnqcs'},
    {id:12, typeName: '1号冷机冷却水进水温度(℃)', range: '4.62 ~ 32.44', value: 12.5, min: 4.62, max: 32.44, key: '1lqsjs'},
    {id:12, typeName: '2号冷机冷却水进水温度(℃)', range: '12.12 ~ 32.84', value: 34, min: 12.12, max: 32.84, key: '2lqsjs'},
    {id:12, typeName: '3号冷机冷却水进水温度(℃)', range: '10.76 ~ 31.18', value: 33, min: 10.76, max: 31.18, key: '3lqsjs'},
    {id:12, typeName: '4号冷机冷却水进水温度(℃)', range: '6.7 ~ 33.0', value: 15, min: 6.7, max: 33.0, key: '4lqsjs'},
    {id:12, typeName: '1号冷机冷却水出水温度(℃)', range: '4.82 ~ 35.54', value: 19.5, min: 4.82, max: 35.54, key: '1lqscs'},
    {id:12, typeName: '2号冷机冷却水出水温度(℃)', range: '11.7 ~ 36.76', value: 17.5, min: 11.7, max: 36.76, key: '2lqscs'},
    {id:12, typeName: '3号冷机冷却水出水温度(℃)', range: '10.88 ~ 35.46', value: 23.9, min: 10.88, max: 35.46, key: '3lqscs'},
    {id:12, typeName: '4号冷机冷却水出水温度(℃)', range: '6.98 ~ 35.54', value: 20.4, min: 6.98, max: 35.54, key: '4lqscs'},
    {id:12, typeName: '1号冷机蒸发器进水温度(℃)', range: '0.0 ~ 33.02', value: 19.5, min: 0.0, max: 33.02, key: '1zfqjs'},
    {id:12, typeName: '2号冷机蒸发器进水温度(℃)', range: '0.0 ~ 36.96', value: 16, min: 0.0, max: 36.96, key: '2zfqjs'},
    {id:12, typeName: '3号冷机蒸发器进水温度(℃)', range: '0.0 ~ 34.74', value: 14, min: 0.0, max: 34.74, key: '3zfqjs'},
    {id:12, typeName: '4号冷机蒸发器进水温度(℃)', range: '0.0 ~ 30.74', value: 12.8, min: 0.0, max: 30.74, key: '4zfqjs'},
    {id:12, typeName: '1号冷机蒸发器出水温度(℃)', range: '11.28 ~ 21.78', value: 17.2, min: 11.28, max: 21.78, key: '1zfqcs'},
    {id:12, typeName: '2号冷机蒸发器出水温度(℃)', range: '12.28 ~ 20.67', value: 12.3, min: 12.28, max: 20.67, key: '2zfqcs'},
    {id:12, typeName: '3号冷机蒸发器出水温度(℃)', range: '12.17 ~ 21.5', value: 13.5, min: 12.17, max: 21.5, key: '3zfqcs'},
    {id:12, typeName: '4号冷机蒸发器出水温度(℃)', range: '12.28 ~ 27.56', value: 13.2, min: 12.28, max: 27.56, key: '4zfqcs'},
    {id:12, typeName: '1号冷却塔积水盘温度(℃)', range: '10.89 ~ 20.28', value: 12.7, min: 10.89, max: 20.28, key: '1jsp'},
    {id:12, typeName: '2号冷却塔积水盘温度(℃)', range: '11.89 ~ 18.39', value: 17.5, min: 11.89, max: 18.39, key: '2jsp'},
    {id:12, typeName: '3号冷却塔积水盘温度(℃)', range: '11.89 ~ 21.28', value: 14, min: 11.89, max: 21.28, key: '3jsp'},
    {id:12, typeName: '4号冷却塔积水盘温度(℃)', range: '11.67 ~ 20.5', value: 13.4, min: 11.67, max: 20.5, key: '4jsp'}
    ];
  paramsValues: any = null;

  loading = false;
  chartLoading = false;
  defaultValue = 0;
  paramsList = null;
  @ViewChild('lineChart1', {static: false}) lineChart1: ThreeLineChartComponent;
  @ViewChild('lineChart2', {static: false}) lineChart2: ThreeLineChartComponent;
  @ViewChild('lineChart3', {static: false}) lineChart3: ThreeLineChartComponent;
  legends = new PueChart();
  recordMap: any = {};
  currentModel = '';
  modelTime = '';
  constructor(private service: PueService,
              private modal: NzModalService) {
    this.lineChart1 = new ThreeLineChartComponent();
    this.lineChart2 = new ThreeLineChartComponent();
    this.lineChart3 = new ThreeLineChartComponent();
  }

  ngOnInit(): void {
    this.getModelList();
  }

  getModelList() {
    this.chartLoading = true;
    this.service.getModelList().subscribe(res => {
      if (res.code === 200) {
        const data = res.data;
        if (data && data.value) {
          const params = data.value;
          this.modelData = this.setObjectToArray(params['model']).map( (item: string, index: number) => {
            return {
              value: index,
              label: item
            }
          });
          if (this.modelData.length > 0) {
            this.selectedModel = this.modelData[0].value;
            this.currentModel = this.modelData[0].label;
            const start = this.currentModel.indexOf('(');
            const end = this.currentModel.indexOf(')');
            this.modelTime = this.currentModel.substring(start + 1, end);
            this.getPredictData();
          }
          for (const key in params) {
            params[key] = this.setObjectToArray(params[key]);
          }
          this.paramsValues = params;
        }
      }
    }, error => {
      this.chartLoading = false;
    });
  }

  setObjectToArray(obj: any): any[] {
    const list: any[] = [];
    for (const key in obj) {
      if (obj && obj[key]) {
        list.push(obj[key]);
      }
    }
    return list;
  }

  getPredictData() {
    this.chartLoading = true;
    this.service.getPredictData(this.selectedModel + 1).subscribe(res => {
      this.chartLoading = false;
      if (res.code === 200) {
        const data = res.data;
        if (data) {
          let key = '01';
          switch (this.selectedModel) {
            case 0: key = '01'; break;
            case 1: key = '001'; break;
            case 2: key = '002'; break;
            case 3: key = '005'; break;
          }
          const pue = data['PUE_' + key];
          const legend = data.legend;
          for (const key in legend ) {
            legend[key] = formatNumberWidth(legend[key], 3);
          }
          this.legends = legend;
          const allCost = data['total energy_' + key];
          const deviceCost = data['other energy_' + key];
          const lmd1 = data['kttz_lmd_' + key];
          const lmd2 = data['ldsg_lmd_' + key];
          this.recordMap = Object.assign( {}, lmd1, lmd2);

          const lineData = this.setChartLineData(pue, ['changed_PUE', 'origin_PUE', 'reference_PUE']);
          this.lineChart1.setConfig(lineData, legend, '调整水温后与原始数据的PUE变化情况');

          const lineData2 = this.setChartLineData(allCost, ['changed_total_energy', 'origin_total_energy', 'reference_total_energy']);
          this.lineChart2.setConfig(lineData2, legend, '调整水温后与原始数据的Total Energy变化情况');

          const lineData3 = this.setChartLineData(deviceCost, ['origin_changed_energy', 'origin_unchanged_energy', 'reference_other_energy']);
          this.lineChart3.setConfig(lineData3, legend, '调整水温后与原始数据的Other Energy变化情况');


        }

      }
    }, error => {
      this.chartLoading = false;
    });
  }

  setChartLineData(data: any, legend: string[]):  ChartType{
    const lineData = new ChartType();
    const line: LineObject = {
      name: legend[0],
      type: 'line',
      smooth: true,
      showSymbol: false,
      data: []
    };
    const line2: LineObject = {
      name: legend[1],
      type: 'line',
      showSymbol: false,
      smooth: true,
      data: []
    };
    const line3: LineObject = {
      name: legend[2],
      type: 'line',
      smooth: true,
      showSymbol: false,
      data: []
    };
    const names: any[] = [];
    let index = 1;
    for (const key in data[legend[0]]) {
      line.data?.push(data[legend[0]][key]);
      line2.data?.push(data[legend[1]][key]);
      line3.data?.push(data[legend[2]][key]);
      names.push(data['num'][key]);
    }
    lineData.data?.push(line, line2, line3);
    lineData.xAxis = names;
    lineData.legend = legend;
    return lineData;
  }

  modelChange(event: any) {
    this.selectedModel = event;
    this.currentModel = this.modelData[event].label;
    const start = this.currentModel.indexOf('(');
    const end = this.currentModel.indexOf(')');
    this.modelTime = this.currentModel.substring(start + 1, end);
    this.getPredictData();
  }

  getRecordChart(data: any) {
    const key = data.key;
    const xData = this.setObjectToArray(this.recordMap[key]);
    const pueData = this.setObjectToArray(this.recordMap[key + '_PUE']).map( (value) => {return parseFloat(value);});
    const modal = this.modal.create({
      nzTitle: '可调特征变化导致PUE变化图（灵敏度分析）',
      nzContent: SensitivityLineComponent,
      nzWidth: 640,
      nzOkText: null,
      nzCancelText: '关闭',
      nzComponentParams: {
        xData,
        pueData,
        data
      }
    });
  }
}
