import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';

@Component({
  selector: 'app-line-chart-slider',
  templateUrl: './line-chart-slider.component.html',
  styleUrls: ['./line-chart-slider.component.less'],
})
export class LineChartSliderComponent implements OnInit {
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
        bottom: 75,
        borderWidth: 1,
        borderColor: '#ddd',
        show: true,
      },
      dataZoom: {
        show: true,
        realtime: true,
        type: 'slider',
        height: 20,
        start: 40,
        end: 60,
      },
      series: {
        data: this.barData.data,
        type: 'line',
        smooth: true,
      },
    };
    this.mergeOption.color = this.selfColors;
  }
}
