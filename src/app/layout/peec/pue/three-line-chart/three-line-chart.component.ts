import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';
import {ChartType} from '../../../../common/const/ChartType';
import {PueChart} from '../../model/Pue';

@Component({
  selector: 'app-three-line-chart',
  templateUrl: './three-line-chart.component.html',
  styleUrls: ['./three-line-chart.component.less']
})
export class ThreeLineChartComponent implements OnInit {

  @Input()
  get barData(): any { return this._barData; }
  set barData(barData: any) {
    this._barData = barData ? barData : null;
  }
  @Input() hasLine: boolean = true;
  @Input() showLabel: boolean = false;
  @Input() title: string = '';
  @Input() selfColors: string[] = ['#6b9bc3', '#ff9537', '#70b603', '#459CF4', '#3B54EC', '#A45CEF', '#4AC2A8'];
  @Input() type: number = 0;
  private _barData = null;
  legends = new PueChart();
  dataLoading = false;
  mergeOption: EChartsOption = {};
  data = [];
  option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: []
    },
    legend: {
      top: 70,
      right: 30,
      borderWidth: 1,
      borderRadius: 5,
      orient: 'horizontal'
    },
    title: {
      text: '调整水温后与原始数据的PUE变化情况',
      left: 'center',
      textStyle: {
        fontSize: 16
      }
    },
    yAxis: {
      type: 'value',
      max: function (value) {
        return value.max * 1.1;
      },
      min: function (value) {
        return value.min * 0.9;
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
    series: [
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  setConfig(chart: ChartType, legend: PueChart, name: string) {
    this.legends = legend;
    this.option = {
      title: {
        text: name,
        left: 'center'
      },
      xAxis: {
        data: chart.xAxis,
        splitNumber:5,
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
        type: 'value',
        max: function (value) {
          return value.max * 1.1;
        },
        min: function (value) {
          return value.min * 0.9;
        },
        axisLabel: {
          showMinLabel: false,
          showMaxLabel: false
        }
      },
      series: chart.data
    }
  }

}
