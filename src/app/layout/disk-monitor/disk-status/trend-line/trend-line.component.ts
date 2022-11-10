import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';
import {ChartType} from '../../../../common/const/ChartType';

@Component({
  selector: 'app-trend-line',
  templateUrl: './trend-line.component.html',
  styleUrls: ['./trend-line.component.less']
})
export class TrendLineComponent implements OnInit {

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
  dataLoading = true;
  mergeOption: EChartsOption = {};
  data = [];
  option: EChartsOption = {};
  constructor() { }

  ngOnInit(): void {
    /*this.mergeOption.series = this.barData.data;
    this.mergeOption.xAxis = {
      data :  this.barData.xAxis
    };*/
  }

  setConfig(chart: ChartType) {
    console.log(chart);
    this.option = {
      xAxis: {
        type: 'category',
        data: chart.xAxis
      },
      yAxis: {
        type: 'value',
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      legend: {
        show: true
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
      series: chart.data
    }
  }
}
