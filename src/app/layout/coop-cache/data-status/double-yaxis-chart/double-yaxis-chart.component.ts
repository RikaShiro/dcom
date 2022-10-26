import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption, YAXisComponentOption } from 'echarts';

@Component({
  selector: 'app-double-yaxis-chart',
  templateUrl: './double-yaxis-chart.component.html',
  styleUrls: ['./double-yaxis-chart.component.less'],
})
export class DoubleYaxisChartComponent implements OnInit {
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
      color: this.selfColors,
      grid: {
        left: 50,
        right: 20,
        bottom: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        show: true,
      },
      xAxis: {
        type: 'category',
        data: this.barData.xAxis,
        axisTick: {
          alignWithLabel: true,
        },
      },
    };
    const series: SeriesOption[] = [];
    const yAxis: YAXisComponentOption[] = [];
    let idx = 0;
    const len = this.barData.xAxis.length;
    for (const k in this.barData.data) {
      yAxis.push({
        type: 'value',
        position: idx === 0 ? 'left' : 'right',
        name: k,
        axisLine: {
          show: true,
        },
      });
      series.push({
        data: this.barData.data[k],
        type: len > 12 ? 'line' : 'bar',
        smooth: true,
        yAxisIndex: idx,
      });
      idx++;
    }
    this.option.yAxis = yAxis;
    this.option.series = series;
    this.mergeOption.color = this.selfColors;
  }
}
