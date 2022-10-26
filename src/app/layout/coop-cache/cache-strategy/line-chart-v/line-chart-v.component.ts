import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';

@Component({
  selector: 'app-line-chart-v',
  templateUrl: './line-chart-v.component.html',
  styleUrls: ['./line-chart-v.component.less'],
})
export class LineChartVComponent implements OnInit {
  @Input()
  get barData(): any {
    return this._barData;
  }
  set barData(barData: any) {
    this._barData = barData ? barData : null;
  }
  @Input() hasLine: boolean = true;
  @Input() showLabel: boolean = false;
  @Input() title: string = '';
  @Input() selfColors: string[] = [
    '#6b9bc3',
    '#ff9537',
    '#35EAED',
    '#459CF4',
    '#3B54EC',
    '#A45CEF',
    '#4AC2A8',
  ];
  private _barData = null;
  dataLoading = false;
  mergeOption: EChartsOption = {};
  data = [];
  option: EChartsOption = {};

  constructor() {}

  ngOnInit(): void {
    const len = this.barData.xAxis.length;
    this.option = {
      xAxis: {
        type: 'category',
        data: this.barData.xAxis,
      },
      yAxis: {
        type: 'value',
      },
      color: this.selfColors,
      grid: {
        left: 50,
        right: 20,
        bottom: 80,
        borderWidth: 1,
        borderColor: '#ddd',
        show: true,
      },
    };
    const series = [];
    if (Array.isArray(this.barData.data)) {
      const seriesOption: SeriesOption = {
        data: this.barData.data,
        type: 'line',
        smooth: true,
      };
      series.push(seriesOption);
    } else {
      for (const k in this.barData.data) {
        const seriesOption: SeriesOption = {
          data: this.barData.data[k],
          type: 'line',
          smooth: true,
        };
        series.push(seriesOption);
      }
    }
    if (len > 300) {
      this.option.dataZoom = {
        show: true,
        realtime: true,
        type: 'slider',
        height: 20,
        start: 40,
        end: 60,
      };
    }
    this.option.series = series;
    this.mergeOption.color = this.selfColors;
  }
}
