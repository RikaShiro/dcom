import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';

@Component({
  selector: 'app-flow-line',
  templateUrl: './flow-line.component.html',
  styleUrls: ['./flow-line.component.less']
})
export class FlowLineComponent implements OnInit {

  @Input()
  get barData(): any { return this._barData; }
  set barData(barData: any) {
    this._barData = barData ? barData : null;
  }
  @Input() hasLine: boolean = true;
  @Input() showLabel: boolean = false;
  @Input() title: string = '';
  @Input() names: string[] = [];
  @Input() selfColors: string[] = ['#6b9bc3', '#ff9537', '#35EAED', '#459CF4', '#3B54EC', '#A45CEF', '#4AC2A8'];

  @Input() MSE: number = 0

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
      itemWidth: 16,
      itemHeight: 10,
      orient: 'horizontal'
    },
    title: {
      text: '',
      show: false,
      left: 'center',
      textStyle: {
        fontSize: 16
      }
    },
    yAxis: {
      type: 'value',
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
    for (let i = 0; i < 100; i++) {
      names.push(i + '');
      const rd = Math.random() * 3;
      data1.push(rd + 0.5);
      data2.push(rd + 0.4);
      data3.push(Math.random() * 300 + 600);
    }

    this.mergeOption.xAxis = {
      type: 'category',
      data: names
    };
    const list = [
      {
        data: data1,
        type: 'line',
        name: '原始数据集',
        showSymbol: false,
        smooth: false,
        lineStyle: {
          width: 2,
        },
      },
      {
        data: data2,
        type: 'line',
        name: '模型预测',
        showSymbol: false,
        smooth: false,
        lineStyle: {
          width: 2,
        },
      }
    ];
    this.mergeOption.series = <any[]>list;
    this.mergeOption.color = this.selfColors;
  }

}
