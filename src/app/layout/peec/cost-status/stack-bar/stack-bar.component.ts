import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';

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
  @Input() selfColors: string[] = ['#6b9bc3', '#ee7d31', '#a5a5a5', '#fec000', '#4472c4', '#A45CEF', '#4AC2A8'];
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
    const bar = {
      type: 'bar',
      barMaxWidth: 35,
      data: [30, 32, 34, 45, 23, 34, 54],
      z: 10,
      stack: 'all',
      label: {
        show: false
      }
    };
    const bar2 = {
      type: 'bar',
      barMaxWidth: 35,
      data: [10, 12, 14, 15, 13, 14, 14],
      z: 10,
      stack: 'all',
      label: {
        show: false
      }
    };
    const bar3 = {
      type: 'bar',
      barMaxWidth: 35,
      data: [30, 32, 34, 45, 23, 34, 54],
      z: 10,
      stack: 'all',
      label: {
        show: false
      }
    };
    const bar4 = {
      type: 'bar',
      barMaxWidth: 35,
      data: [30, 32, 34, 45, 23, 34, 54],
      z: 10,
      stack: 'all',
      label: {
        show: false
      }
    };
    const bar5 = {
      type: 'bar',
      barMaxWidth: 35,
      data: [30, 32, 34, 45, 23, 34, 54],
      z: 10,
      stack: 'all',
      label: {
        show: false
      }
    };

    const series: any[] = [];
    series.push(bar);
    series.push(bar3);
    series.push(bar2);
    series.push(bar4);
    series.push(bar5);
    this.mergeOption.series = series;
    this.mergeOption.color = this.selfColors;
  }

}
