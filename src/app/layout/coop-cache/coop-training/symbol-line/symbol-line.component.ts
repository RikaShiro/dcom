import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-symbol-line',
  templateUrl: './symbol-line.component.html',
  styleUrls: ['./symbol-line.component.less'],
})
export class SymbolLineComponent implements OnInit {
  @Input()
  get barData(): any {
    return this._barData;
  }
  set barData(barData: any) {
    this._barData = barData ? barData : null;
  }
  @Input() hasLine: boolean = true;
  @Input() showLabel: boolean = false;
  @Input() title: string = '';
  @Input() names: string[] = [];
  @Input() selfColors: string[] = [
    '#6b9bc3',
    '#ff9537',
    '#35EAED',
    '#459CF4',
    '#3B54EC',
    '#A45CEF',
    '#4AC2A8',
  ];

  @Input() lines: number[][] = [];

  private _barData = null;
  // dataLoading = true;
  dataLoading = false;
  mergeOption: EChartsOption = {};
  data = [];
  option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: [],
    },
    legend: {
      top: 70,
      right: 30,
      borderWidth: 1,
      borderRadius: 5,
      itemWidth: 16,
      itemHeight: 10,
      orient: 'horizontal',
    },
    title: {
      text: '',
      show: false,
      left: 'center',
      textStyle: {
        fontSize: 16,
      },
    },
    yAxis: {
      type: 'value',
      max: 1000,
      min: 500,
    },
    color: this.selfColors,
    grid: {
      left: 50,
      right: 20,
      bottom: 60,
      borderWidth: 1,
      borderColor: '#ddd',
      show: true,
    },
    series: [],
  };
  constructor() {}

  ngOnInit(): void {
    // const [data1, data2] = [this.lines[0], this.lines[1]];
    const names = [];
    const data1 = [];
    const data2 = [];
    const data3 = [];
    for (let i = 0; i < 15; i++) {
      names.push(i + '');
      data1.push(Math.random() * 300 + 600);
      data2.push(Math.random() * 300 + 600);
      data3.push(Math.random() * 300 + 600);
    }

    this.mergeOption.xAxis = {
      type: 'category',
      data: names,
    };
    const list = [
      {
        data: data1,
        type: 'line',
        name: this.names[0],
        symbol: 'triangle',
        symbolSize: 8,
        lineStyle: {
          color: '#3cb371',
          width: 1,
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: '#3cb371',
          color: '#3cb371',
        },
      },
      {
        data: data2,
        type: 'line',
        name: this.names[1],
        symbol: 'rect',
        symbolSize: 8,
        lineStyle: {
          color: '#9370db',
          width: 1,
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: '#9370db',
          color: '#9370db',
        },
      },
    ];
    if (this.names.length === 3) {
      list.push({
        data: data3,
        type: 'line',
        name: this.names[3],
        symbol: 'diamond',
        symbolSize: 8,
        lineStyle: {
          color: '#DAA520',
          width: 1,
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: '#DAA520',
          color: '#DAA520',
        },
      });
    }
    this.mergeOption.series = <any[]>list;
  }
}
