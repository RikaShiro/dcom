import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';
import {ChartType} from '../../../../common/const/ChartType';

@Component({
  selector: 'app-stack-bar',
  templateUrl: './stack-bar.component.html',
  styleUrls: ['./stack-bar.component.less']
})
export class StackBarComponent implements OnInit {

  @Input()
  get barData(): any { return this._barData; }
  set barData(barData: any) {
    this._barData = barData ? barData : null;
  }
  @Input() hasLine: boolean = true;
  @Input() showLabel: boolean = false;
  @Input() title: string = '';
  @Input() selfColors: string[] = ['#4472c3', '#ffbf00', '#a5a5a5', '#fec000', '#4472c4', '#A45CEF', '#4AC2A8'];
  private _barData = null;
  dataLoading = false;
  mergeOption: EChartsOption = {};
  data = [];
  data2 = [0, 0, 0, 0, 0, 0, 0];
  colors = ['#6b9bc3', '#FB765E', '#35EAED', '#459CF4', '#3B54EC', '#A45CEF', '#4AC2A8'];
  xName = [];
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
      bottom: 60,
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
      tooltip: {
        show: true,
        trigger : 'axis'
      },
      color: this.selfColors,
      legend: {
        data: chart.legend
      },
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
