import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EChartsOption, SeriesOption, YAXisComponentOption } from 'echarts';
import { TranslationService } from 'src/app/common/service/translation.servcice';

@Component({
  selector: 'app-double-y-axes',
  templateUrl: './double-y-axes.component.html',
  styleUrls: ['./double-y-axes.component.less'],
})
export class DoubleYAxesComponent implements OnChanges {
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
  @Input() loading: boolean = true;

  private _$ = null;
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
  };

  constructor(private service: TranslationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const dataUpdate = '$' in changes && 'loading' in changes;
    if (!dataUpdate) return;
    const series = [];
    const yAxis = [];
    const legendData = [];
    let idx = 0;
    for (const k in this.$.data) {
      const name = this.service.getTranslation(k);
      legendData.push(name);
      yAxis.push({
        type: 'value',
        name,
        position: idx ? 'right' : 'left',
        axisLine: {
          show: true,
          lineStyle: {
            color: idx ? this.selfColors[1] : this.selfColors[0],
          },
        },
        alignTicks: true,
      } as YAXisComponentOption);
      const option = {
        type: idx ? 'line' : 'bar',
        name,
        data: this.$.data[k],
        smooth: true,
        yAxisIndex: idx,
      };
      if (this.$.line) {
        option.type = 'line';
      }
      series.push(option as SeriesOption);
      idx++;
    }
    this.mergeOption = {
      legend: {
        data: legendData,
      },
      xAxis: {
        type: 'category',
        data: this.$.xAxis,
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis,
      series,
    };
  }
}
