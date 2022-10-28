import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';

@Component({
  selector: 'app-double-lines',
  templateUrl: './double-lines.component.html',
  styleUrls: ['./double-lines.component.less'],
})
export class DoubleLinesComponent implements OnInit {
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
        axisLabel: {
          formatter: '{value}%',
        },
      },
      color: this.selfColors,
      grid: {
        left: 60,
        right: 60,
        bottom: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        show: true,
      },
    };
    const series = [];
    for (const k in this.barData.data) {
      const seriesOption: SeriesOption = {
        data: this.barData.data[k],
        type: 'line',
        smooth: true,
      };
      series.push(seriesOption);
    }
    this.option.series = series;
    this.mergeOption.color = this.selfColors;
  }
}
