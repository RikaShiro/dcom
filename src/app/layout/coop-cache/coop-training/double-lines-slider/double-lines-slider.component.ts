import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';
import { TranslationService } from 'src/app/common/service/translation.servcice';

@Component({
  selector: 'app-double-lines-slider',
  templateUrl: './double-lines-slider.html',
  styleUrls: ['./double-lines-slider.less'],
})
export class DoubleLinesSliderComponent implements OnInit {
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
    legend: {
      top: 65,
      right: 30,
      borderWidth: 1,
      borderRadius: 5,
      itemWidth: 16,
      itemHeight: 10,
      orient: 'horizontal',
    },
    yAxis: {
      type: 'value',
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
    if ('MSE' in this.$) {
      this.$.MSE = this.$.MSE.toFixed(4);
    }
    this.mergeOption.xAxis = {
      type: 'category',
      data: this.$.xAxis,
    };
    const series: SeriesOption[] = [];
    for (const k in this.$.data) {
      const option = {
        data: this.$.data[k],
        type: 'line',
        name: this.service.getTranslation(k),
        showLabel: false,
        smooth: false,
        lineStyle: {
          width: 2,
        },
      };
      series.push(option as SeriesOption);
    }
    this.mergeOption.series = series;
    this.mergeOption.color = this.selfColors;
  }
}
