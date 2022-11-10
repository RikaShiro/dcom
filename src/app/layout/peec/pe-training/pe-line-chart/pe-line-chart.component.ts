import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';
import {ChartType} from '../../../../common/const/ChartType';

@Component({
  selector: 'app-pe-line-chart',
  templateUrl: './pe-line-chart.component.html',
  styleUrls: ['./pe-line-chart.component.less']
})
export class PeLineChartComponent implements OnInit {

  @Input()
  get barData(): any { return this._barData; }
  set barData(barData: any) {
    this._barData = barData ? barData : null;
  }
  @Input() hasLine: boolean = true;
  @Input() showLabel: boolean = false;
  @Input() title: string = '';
  @Input() selfColors: string[] = ['#6b9bc3', '#ff9537', '#35EAED', '#459CF4', '#3B54EC', '#A45CEF', '#4AC2A8'];
  private _barData = null;
  dataLoading = false;
  mergeOption: EChartsOption = {};
  data = [];
  option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    color: this.selfColors,
    grid: {
      left: 50,
      right: 20,
      bottom: 50,
      borderWidth: 1,
      borderColor: '#212121',
      show: true
    },
    series: [
    ]
  };
  constructor() { }

  ngOnInit(): void {
    this.mergeOption.color = this.selfColors;
  }

  setConfig(chart: ChartType) {
    const max = chart.xAxis && chart.xAxis.length;
    const interval = max ? (max / 5) : 1;
    this.option = {
      title: {
        text: 'Metric during training',
        left: 'center'
      },
      xAxis: {
        data: chart.xAxis,
        splitNumber:5,
        max: max,
        interval:interval,
        axisLine: {
          lineStyle: {
            color: '#ddd'
          }
        },
        axisLabel: {
          color: '#999',
          rotate: chart.xAxis ? (chart.xAxis.length > 7 ? 30 : 0) : 0,
          fontSize: 10
        }
      },
      legend: {
        data: chart.legend,
        left: 'right'
      },
      color: this.selfColors,
      grid: {
        left: 50,
        right: 20,
        bottom: 60,
        top: 30,
        borderWidth: 1,
        borderColor: '#212121',
        show: true
      },
      yAxis: {
        type: 'value'
      },
      series: chart.data
    }
  }
}
