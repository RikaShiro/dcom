import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';

@Component({
  selector: 'app-double-lines',
  templateUrl: './double-lines.component.html',
  styleUrls: ['./double-lines.component.less'],
})
export class DoubleLinesComponent implements OnInit {
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
  option: EChartsOption = {
    color: this.selfColors,
    grid: {
      left: 60,
      right: 60,
      bottom: 50,
      borderWidth: 1,
      borderColor: '#ddd',
      show: true,
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%',
      },
    },
  };

  constructor() {}

  ngOnInit(): void {
    const series = [];
    for (const k in this.$.data) {
      const option = {
        data: this.$.data[k],
        type: 'line',
        smooth: true,
      };
      series.push(option as SeriesOption);
    }
    this.mergeOption = {
      xAxis: {
        type: 'category',
        data: this.$.xAxis,
      },
      series
    };
  }
}
