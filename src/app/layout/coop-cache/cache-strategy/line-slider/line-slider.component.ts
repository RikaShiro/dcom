import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

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
  private _$ = null;
  dataLoading = false;
  mergeOption: EChartsOption = {};
  option: EChartsOption = {};

  constructor() {}

  ngOnInit(): void {
    this.option = {
      xAxis: {
        type: 'category',
        data: this.$.xAxis,
      },
      yAxis: {
        type: 'value',
      },
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
      series: {
        data: this.$.data,
        type: 'line',
        smooth: true,
      },
    };
    this.mergeOption.color = this.selfColors;
  }
}
