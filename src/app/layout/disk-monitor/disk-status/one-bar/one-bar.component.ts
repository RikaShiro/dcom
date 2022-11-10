import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';
import {ChartType} from '../../../../common/const/ChartType';

@Component({
  selector: 'app-one-bar',
  templateUrl: './one-bar.component.html',
  styleUrls: ['./one-bar.component.less']
})
export class OneBarComponent implements OnInit {

  @Input()
  get barData(): any { return this._barData; }
  set barData(barData: any) {
    this._barData = barData ? barData : null;
  }
  @Input() hasLine: boolean = true;
  @Input() showLabel: boolean = false;
  @Input() title: string = '';
  @Input() selfColors: string[] = ['#6b9bc3', '#FB765E', '#35EAED', '#459CF4', '#3B54EC', '#A45CEF', '#4AC2A8'];
  private _barData = null;
  dataLoading = false;
  mergeOption: EChartsOption = {};
  data = [];
  data2 = [0, 0, 0, 0, 0, 0, 0];
  colors = ['#6b9bc3', '#FB765E', '#35EAED', '#459CF4', '#3B54EC', '#A45CEF', '#4AC2A8'];
  xName = ['APD', 'RFC', 'GAC To', 'MOD To', 'CME TEAM', 'EXCA', 'ERECTION'];
  option: EChartsOption = {
    title: {
      text: 'line Chart',
      show: false
    },
    color: this.selfColors,
    xAxis: {
      data: this.xName,
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLabel: {
        color: '#999',
        rotate: this.xName.length > 7 ? 30 : 0,
        fontSize: 10
      }
    },
    grid: {
      left: 50,
      right: 20,
      bottom: 50,
      borderWidth: 1,
      borderColor: '#ddd',
      show: true
    },
    yAxis: {
      type: 'value'
    },
    series: []
  };
  constructor() { }

  ngOnInit(): void {
    /*const bar = {
      type: 'bar',
      barMaxWidth: 18,
      data: [30, 32, 34, 45, 23, 34, 54],
      z: 10,
      label: {
        show: this.showLabel,
        position: 'top'
      }
    };
    const line = {
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
    series.push(bar);
    if (this.hasLine) {
      series.push(line);
    }
    this.mergeOption.series = series;
    this.mergeOption.color = this.selfColors;*/
  }

  setConfig(chart: ChartType) {
    this.option = {
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
      color: this.selfColors,
      grid: {
        left: 50,
        right: 20,
        bottom: 60,
        borderWidth: 1,
        borderColor: '#ddd',
        show: true
      },
      yAxis: {
        type: 'value'
      },
      series: chart.data
    }
  }
}
