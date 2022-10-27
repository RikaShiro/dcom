import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';
import { TranslationService } from 'src/app/common/service/translation.servcice';

@Component({
  selector: 'app-flow-line',
  templateUrl: './flow-line.component.html',
  styleUrls: ['./flow-line.component.less'],
})
export class FlowLineComponent implements OnInit {
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

  private _barData = null;
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
    dataZoom: {
      show: true,
      realtime: true,
      type: 'slider',
      height: 20,
      start: 40,
      end: 60,
    },
  };
  constructor(private service: TranslationService) {}

  ngOnInit(): void {
    if ('MSE' in this.barData) {
      this.barData.MSE = this.barData.MSE.toFixed(4);
    }
    this.mergeOption.xAxis = {
      type: 'category',
      data: this.barData.xAxis,
    };
    const list: SeriesOption[] = [];
    for (const k in this.barData.data) {
      const option = {
        data: this.barData.data[k],
        type: 'line',
        name: this.service.getTranslation(k),
        showLabel: false,
        smooth: false,
        lineStyle: {
          width: 2,
        },
      };
      list.push(option as SeriesOption)
    }
    this.mergeOption.series = <any[]>list;
    this.mergeOption.color = this.selfColors;
  }
}
