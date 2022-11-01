import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-slider',
  templateUrl: './line-slider.component.html',
  styleUrls: ['./line-slider.component.less'],
})
export class LineSliderComponent implements OnChanges {
  @Input()
  get $(): any {
    return this._$;
  }
  set $($: any) {
    this._$ = $ ? $ : null;
  }
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

  private _$ = null;
  isLoading = true;
  mergeOption: EChartsOption = {};
  option: EChartsOption = {
    color: this.selfColors,
    grid: {
      left: 50,
      right: 25,
      bottom: 75,
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

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const dataUpdate = '$' in changes && 'loading' in changes;
    if (!dataUpdate) return;
    this.mergeOption = {
      xAxis: {
        type: 'category',
        data: this.$.xAxis,
      },
      yAxis: {
        type: 'value',
      },
      series: {
        data: this.$.data,
        type: 'line',
        smooth: true,
      },
    };
  }
}
// xAxis和yAxis要同时放进option里。否则console有静默错误
