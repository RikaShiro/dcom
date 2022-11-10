import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';
import {ChartType} from '../../../../common/const/ChartType';

@Component({
  selector: 'app-disk-line-chart',
  templateUrl: './disk-line-chart.component.html',
  styleUrls: ['./disk-line-chart.component.less']
})
export class DiskLineChartComponent implements OnInit {

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
    /*const line = {
      type: 'line',
      data: [30, 32, 34, 45, 23, 34, 54],
      lineStyle: {
        color: 'red',
        width: 1,
        type: 'dashed'
      },
      label: {
        show: false
      }
    };

    const series: any[] = [];
    if (this.hasLine) {
      series.push(line);
    }
    this.mergeOption.series = series;
    this.mergeOption.color = this.selfColors;*/
  }

  setConfig(chart: ChartType) {
    this.option = {
      title: {
        text: 'Metric during training',
        left: 'center'
      },
      xAxis: {
        data: chart.xAxis,
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
