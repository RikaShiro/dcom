import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';
import { TranslationService } from 'src/app/common/service/translation.servcice';

@Component({
  selector: 'app-symbol-line',
  templateUrl: './symbol-line.component.html',
  styleUrls: ['./symbol-line.component.less'],
})
export class SymbolLineComponent implements OnInit {
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
  @Input() selfColors: string[] = ['#3cb371', '#9370db', '#DAA520'];
  @Input() symbols: string[] = ['triangle', 'rect', 'diamond'];
  @Input() unit: string = '';

  private _$ = null;
  mergeOption: EChartsOption = {};

  option: EChartsOption = {
    color: this.selfColors,
    grid: {
      left: 50,
      right: 20,
      bottom: 60,
      borderWidth: 1,
      borderColor: '#ddd',
      show: true,
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
  };
  constructor(private service: TranslationService) {}

  ngOnInit(): void {
    this.mergeOption.xAxis = {
      type: 'category',
      data: this.$.xAxis,
    };
    this.mergeOption.yAxis = {
      type: 'value',
      axisLabel: {
        formatter: '{value}' + this.unit,
      },
    };
    const list: SeriesOption[] = [];
    let idx = 0;
    for (const k in this.$.data) {
      const color = this.selfColors[idx];
      const seriesOption: SeriesOption = {
        data: this.$.data[k],
        type: 'line',
        name: this.service.getTranslation(k),
        symbol: this.symbols[idx],
        symbolSize: 8,
        lineStyle: {
          color,
          width: 1,
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: color,
          color,
        },
      };
      list.push(seriesOption);
      idx++;
    }
    this.mergeOption.series = list;
  }
}
