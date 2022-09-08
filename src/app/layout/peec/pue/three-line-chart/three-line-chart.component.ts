import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';

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
      max: 1000,
      min: 500
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
    const names = [];
    const data1 = [];
    const data2 = [];
    const data3 = [];
    for (let i = 0; i < 200; i++) {
      names.push(i + '');
      data1.push(Math.random() * 300 + 600);
      data2.push(Math.random() * 300 + 600);
      data3.push(Math.random() * 300 + 600);
    }

    this.mergeOption.xAxis = {
      type: 'category',
      data: names
    };
    this.mergeOption.series = [
      {
        data: data1,
        type: 'line',
        name: 'origin_PUE',
        showSymbol: false,
        step: 'start',
        smooth: true
      },
      {
        data: data2,
        type: 'line',
        name: 'changed_PUE',
        step: 'start',
        showSymbol: false,
        smooth: true
      },
      {
        data: data3,
        type: 'line',
        name: 'reference_PUE',
        showSymbol: false,
        step: 'start',
        smooth: true
      }
    ]
  }

}
