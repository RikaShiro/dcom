import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.less']
})
export class LineChartComponent implements OnInit {

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
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
      borderColor: '#ddd',
      show: true
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      },
      {
        data: [820, 832, 701, 734, 990, 830, 720],
        type: 'line',
        smooth: true
      }
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

}
