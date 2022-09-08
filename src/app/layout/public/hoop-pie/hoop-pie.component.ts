import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';

@Component({
  selector: 'app-hoop-pie',
  templateUrl: './hoop-pie.component.html',
  styleUrls: ['./hoop-pie.component.less']
})
export class HoopPieComponent implements OnInit {
  @Input()
  get pieData(): any { return this._pieData; }
  set pieData(pieData: any) {
    this._pieData = pieData ? pieData : null;
  }
  private _pieData = null;
  dataLoading = false;
  mergeOption = {};
  data = [];
  colors = ['#6b9bc3', '#FB765E', '#35EAED', '#459CF4', '#3B54EC', '#A45CEF', '#4AC2A8'];
  xName = ['APD', 'RFC', 'GAC To', 'MOD To', 'CME TEAM', 'EXCA', 'ERECTION'];
  option: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'middle',
      right: 10,
      orient: 'vertical'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '60%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
