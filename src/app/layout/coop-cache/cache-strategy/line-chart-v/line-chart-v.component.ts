import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-chart-v',
  templateUrl: './line-chart-v.component.html',
  styleUrls: ['./line-chart-v.component.less'],
})
export class LineChartVComponent implements OnInit {
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
  @Input() selfColors: string[] = [
    '#6b9bc3',
    '#ff9537',
    '#35EAED',
    '#459CF4',
    '#3B54EC',
    '#A45CEF',
    '#4AC2A8',
  ];
  private _barData = null;
  dataLoading = false;
  mergeOption: EChartsOption = {};
  data = [];
  option: EChartsOption = {}

  constructor() {}

  ngOnInit(): void {
    this.option = {
      xAxis: {
        type: 'category',
        data: this.barData.xAxis.slice(0, 100),
      },
      yAxis: {
        type: 'value',
      },
      color: this.selfColors,
      grid: {
        left: 50,
        right: 20,
        bottom: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        show: true,
      },
      series: [
        {
          data: this.barData.dataSource.slice(0, 100),
          type: 'line',
          smooth: true,
        },
      ],
    };
    this.mergeOption.color = this.selfColors;
  }
}
