import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';

@Component({
  selector: 'app-line-slider',
  templateUrl: './line-slider.component.html',
  styleUrls: ['./line-slider.component.less'],
})
export class LineSliderComponent implements OnInit {
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
  dataLoading = false;
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

  ngOnInit(): void {
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

// note: xAxis和yAxis要同时放进option里。否则console有静默错误
