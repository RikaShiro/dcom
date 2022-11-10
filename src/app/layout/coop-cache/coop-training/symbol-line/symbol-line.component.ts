import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';
import { TranslationService } from 'src/app/common/service/translation.servcice';

@Component({
  selector: 'app-symbol-line',
  templateUrl: './symbol-line.component.html',
  styleUrls: ['./symbol-line.component.less'],
})
export class SymbolLineComponent implements OnChanges {
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
  @Input() loading: boolean = true;

  private _$: any = null;
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

  ngOnChanges(changes: SimpleChanges): void {
    if ('$' in changes && this.$ && this.$.xAxis) {
      this.updateConfig();
    }
  }
  updateConfig() {
    const series = [];
    let idx = 0;
    for (const k in this.$.data) {
      const color = this.selfColors[idx];
      const option = {
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
      series.push(option as SeriesOption);
      idx++;
    }
    this.mergeOption = {
      xAxis: {
        type: 'category',
        data: this.$.xAxis,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}' + this.unit,
        },
      },
      series,
    };
  }
}
