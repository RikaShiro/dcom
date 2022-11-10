import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';
import {ChartType} from '../../../../common/const/ChartType';
import {formatPercent, formatPercentWithout} from '../../../../common/utils/utils';

@Component({
  selector: 'app-disk-line-step',
  templateUrl: './disk-line-step.component.html',
  styleUrls: ['./disk-line-step.component.less']
})
export class DiskLineStepComponent implements OnInit {

  @Input()
  get barData(): any { return this._barData; }
  set barData(barData: any) {
    this._barData = barData ? barData : null;
  }
  @Input() hasLine: boolean = true;
  @Input() showLabel: boolean = false;
  @Input() title: string = '';
  @Input() selfColors: string[] = ['#6b9bc3', '#ff9537', '#35EAED', '#459CF4', '#3B54EC', '#A45CEF', '#4AC2A8'];
  private _barData = null;
  dataLoading = false;
  mergeOption: EChartsOption = {};
  data = [];
  option: EChartsOption = {
    xAxis: {
      type: 'value',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    color: this.selfColors,
    grid: {
      left: 50,
      right: 20,
      bottom: 50,
      borderWidth: 1,
      borderColor: '#212121',
      show: true
    },
    series: [
    ]
  };
  acc = '-';
  auc = '-';
  constructor() { }

  ngOnInit(): void {
  }

  setConfig(data: any[], links: any[],  acc: any, auc: any) {
    this.acc = formatPercent(acc);
    this.auc = formatPercent(auc);
    this.option = {
      xAxis: {
        type: 'value',
        splitLine: {
          show: false
        }
      },
      title: {
        text: 'ROC',
        left: 'center'
      },
      color: this.selfColors,
      grid: {
        left: 50,
        right: 20,
        top: 30,
        bottom: 60,
        borderWidth: 1,
        borderColor: '#212121',
        show: true
      },
      yAxis: {
        type: 'value',
        scale: true,
        max: 1.2,
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: 'ROC',
          type: 'graph',
          coordinateSystem: 'cartesian2d',
          data: data,
          links: links,
          edgeSymbol: ['none', 'none'],
          edgeSymbolSize: 0,
          legendHoverLink: false,
          lineStyle: {
            color: '#4472c4',
            width: 2
          },
          itemStyle: {
            borderWidth: 2,
            borderColor: '#333'
          },
          label: {
            color: '#333',
            position: 'right'
          },
          symbolSize: 0
        }
      ]
    }
  }
}
