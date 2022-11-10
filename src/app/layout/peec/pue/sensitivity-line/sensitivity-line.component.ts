import {Component, Input, OnInit} from '@angular/core';
import {PueChart} from '../../model/Pue';
import {EChartsOption} from 'echarts';

@Component({
  selector: 'app-sensitivity-line',
  templateUrl: './sensitivity-line.component.html',
  styleUrls: ['./sensitivity-line.component.less']
})
export class SensitivityLineComponent implements OnInit {

  @Input() xData: number[] = [];
  @Input() pueData: number[] = [];
  @Input() data: any;
  @Input()
  get barData(): any { return this._barData; }
  set barData(barData: any) {
    this._barData = barData ? barData : null;
  }
  @Input() title: string = '';
  @Input() selfColors: string[] = ['#599ac6', '#ff9537', '#70b603', '#459CF4', '#3B54EC', '#A45CEF', '#4AC2A8'];
  @Input() type: number = 0;
  private _barData = null;
  legends = new PueChart();
  dataLoading = false;
  mergeOption: EChartsOption = {};
  option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: []
    },
    legend: {
      top: 70,
      right: 30,
      borderWidth: 1,
      borderRadius: 5,
      orient: 'horizontal'
    },
    title: {
      text: '调整水温后与原始数据的PUE变化情况',
      left: 'center',
      textStyle: {
        fontSize: 16
      }
    },
    yAxis: {
      type: 'value',
      max: function (value) {
        return value.max * 1.1;
      },
      min: function (value) {
        return value.min * 0.9;
      }
    },
    color: this.selfColors,
    grid: {
      left: 50,
      right: 20,
      bottom: 60,
      borderWidth: 1,
      borderColor: '#ddd',
      show: true
    },
    series: [
    ]
  };
  constructor() { }

  ngOnInit(): void {
    this.setConfig();
  }

  setConfig() {
    this.title = this.data.typeName;
    const header = this.title.replace('(℃)', '') + '变化导致的PUE的变化';
    const dataList: any[] = [];
    let links: any = [];

    for (let i = 0; i < this.xData.length; i++) {
      const pointer = {
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: false
          }
        },
        name: 'key' + i,
        value: [this.xData[i], this.pueData[i], 1, 'pue']
      };
      dataList.push(pointer);
    }
    links = dataList.map(function (item, idx) {
      return {
        source: idx,
        target: idx + 1
      };
    });

    this.option = {
      xAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        min: function (value) {
          return value.min;
        },
        max: function (value) {
          return value.max;
        }
      },
      title: {
        text: header,
        left: 'center',
        textStyle: {
          fontSize: 16
        }
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
        max: function (value) {
          return value.max * 1.001;
        },
        min: function (value) {
          return value.min * 0.999;
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          showMinLabel: false,
          showMaxLabel: false
        }
      },
      series: [
        {
          name: 'pue',
          type: 'graph',
          coordinateSystem: 'cartesian2d',
          data: dataList,
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
