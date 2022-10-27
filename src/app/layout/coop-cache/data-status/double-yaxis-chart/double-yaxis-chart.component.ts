import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption, YAXisComponentOption } from 'echarts';
import { TranslationService } from 'src/app/common/service/translation.servcice';

@Component({
  selector: 'app-double-yaxis-chart',
  templateUrl: './double-yaxis-chart.component.html',
  styleUrls: ['./double-yaxis-chart.component.less'],
})
export class DoubleYaxisChartComponent implements OnInit {
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
  option: EChartsOption = {};

  constructor(private service: TranslationService) {}

  ngOnInit(): void {
    this.option = {
      color: this.selfColors,
      grid: {
        left: 50,
        right: 50,
        bottom: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        show: true,
      },
      xAxis: {
        type: 'category',
        data: this.barData.xAxis,
        axisTick: {
          alignWithLabel: true,
        },
      },
    };
    const series: SeriesOption[] = [];
    const yAxis: YAXisComponentOption[] = [];
    const legendData = [];
    let idx = 0;
    for (const k in this.barData.data) {
      const name = this.service.getTranslation(k);
      legendData.push(name);
      yAxis.push({
        type: 'value',
        name: name,
        position: idx === 0 ? 'left' : 'right',
        axisLine: {
          show: true,
          lineStyle: {
            color: !idx ? this.selfColors[0] : this.selfColors[1],
          },
        },
        alignTicks: true,
      });
      const seriesOption = {
        type: idx ? 'line' : 'bar',
        name: name,
        data: this.barData.data[k],
        smooth: true,
        yAxisIndex: idx,
      };
      if (this.barData.line) {
        seriesOption.type = 'line';
      }
      series.push(seriesOption as SeriesOption);
      idx++;
    }
    this.option.yAxis = yAxis;
    this.option.series = series;
    this.option.legend = {
      data: legendData,
    };
    this.mergeOption.color = this.selfColors;
  }
}
