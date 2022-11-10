import {Component, OnInit, ViewChild} from '@angular/core';
import {DiskStatusService} from './disk-status.service';
import {ChartType} from '../../../common/const/ChartType';
import {LinesChartComponent} from '../../peec/cost-status/lines-chart/lines-chart.component';
import {OneBarComponent} from './one-bar/one-bar.component';
import {HoopPieComponent} from '../../public/hoop-pie/hoop-pie.component';
import {TrendLineComponent} from './trend-line/trend-line.component';

export class LineObject {
  name?: string;
  type?: string;
  stack?: string;
  smooth?: boolean;
  data?: any[];
  showSymbol?: boolean;
}

@Component({
  selector: 'app-disk-status',
  templateUrl: './disk-status.component.html',
  styleUrls: ['./disk-status.component.less']
})
export class DiskStatusComponent implements OnInit {

  date = 'day';
  rangeList = [
    {label: '24 Hours', value: 'day'},
    {label: '30 Days', value: 'month'},
    {label: '52 Weeks', value: 'year'},
  ]
  hasLine = false;
  showLabel = true;
  loading = false;
  @ViewChild('oneBar1', {static: false}) oneBar1: OneBarComponent;
  @ViewChild('oneBar2', {static: false}) oneBar2: OneBarComponent;
  @ViewChild('oneBar3', {static: false}) oneBar3: OneBarComponent;
  @ViewChild('oneBar7', {static: false}) oneBar7: OneBarComponent;
  @ViewChild('oneBar8', {static: false}) oneBar8: OneBarComponent;
  @ViewChild('oneBar9', {static: false}) oneBar9: OneBarComponent;
  @ViewChild('onePie1', {static: false}) onePie1: HoopPieComponent;
  @ViewChild('onePie2', {static: false}) onePie2: HoopPieComponent;
  @ViewChild('onePie3', {static: false}) onePie3: HoopPieComponent;
  @ViewChild('onePie4', {static: false}) onePie4: HoopPieComponent;

  @ViewChild('lineChart1', {static: false}) lineChart1: TrendLineComponent;
  @ViewChild('lineChart2', {static: false}) lineChart2: TrendLineComponent;
  @ViewChild('lineChart3', {static: false}) lineChart3: TrendLineComponent;
  constructor(private service: DiskStatusService) {
    this.oneBar1 = new OneBarComponent();
    this.oneBar2 = new OneBarComponent();
    this.oneBar3 = new OneBarComponent();
    this.oneBar7 = new OneBarComponent();
    this.oneBar8 = new OneBarComponent();
    this.oneBar9 = new OneBarComponent();
    this.onePie1 = new HoopPieComponent();
    this.onePie2 = new HoopPieComponent();
    this.onePie3 = new HoopPieComponent();
    this.onePie4 = new HoopPieComponent();
    this.lineChart1 = new TrendLineComponent();
    this.lineChart2 = new TrendLineComponent();
    this.lineChart3 = new TrendLineComponent();
  }

  ngOnInit(): void {
    this.getDiskFailure('month');
    this.getDiskFailure('quarter');
    this.getDiskFailure('year');
    this.getDiskFailure('week');
    this.getHDFailureSta(this.date);
    this.getHostFailureSta(this.date);
    this.getHDMFailureSta(this.date);
    this.getHDBPro(this.date);
    this.getFHDBPro(this.date);
    this.getFHDCPro(this.date);
    this.getHDCBPro(this.date);
    this.getHDFCTrend(this.date);
    this.getHDFRTrend(this.date);
    this.getHDFTrend(this.date);
  }

  getDiskFailure(type: string) {
    this.loading = true;
    this.service.getDiskFailure(type).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const barData = new ChartType();
        const data = res.data;
        if (data['count']) {
          const list = [];
          for (const key in data['count']) {
            list.push(data['count'][key]);
          }

          const bar = {
            type: 'bar',
            barMaxWidth: 18,
            data: list,
            z: 10,
            label: {
              show: this.showLabel,
              position: 'top'
            }
          };
          barData.data = [bar];
          const names = [];
          if (type === 'week' || type === 'month') {
            for (const key in data['date']) {
              names.push(data['date'][key]);
            }
          } else if (type === 'year') {
            for (const key in data['month']) {
              names.push(data['month'][key]);
            }
          }  else if (type === 'quarter') {
            for (const key in data['season']) {
              names.push(data['season'][key]);
            }
          }
          barData.xAxis = names;

          switch (type) {
            case 'week': this.oneBar7.setConfig(barData); break;
            case 'month': this.oneBar9.setConfig(barData); break;
            case 'year': this.oneBar8.setConfig(barData); break;
          }
        }

      }
    });
  }

  changeRange(event: string) {
    this.date = event;
    this.getHDFailureSta(this.date);
    this.getHostFailureSta(this.date);
    this.getHDMFailureSta(this.date);
    this.getHDBPro(this.date);
    this.getFHDBPro(this.date);
    this.getFHDCPro(this.date);
    this.getHDCBPro(this.date);
    this.getHDFCTrend(this.date);
    this.getHDFRTrend(this.date);
    this.getHDFTrend(this.date);
  }

  getHDFailureSta(condition: string) {
    this.loading = true;
    this.service.getHDFailureSta(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const barData = new ChartType();
        const data = res.data;
        if (data['count']) {
          const list = [];
          for (const key in data['count']) {
            list.push(data['count'][key]);
          }

          const bar = {
            type: 'bar',
            barMaxWidth: 18,
            data: list,
            z: 10,
            label: {
              show: this.showLabel,
              position: 'top'
            }
          };
          barData.data = [bar];
          const names = [];
          for (const key in data['triggerid']) {
            names.push(data['triggerid'][key]);
          }
          barData.xAxis = names;
          this.oneBar1.setConfig(barData);
        }
      }
    });
  }

  getHostFailureSta(condition: string) {
    this.loading = true;
    this.service.getHostFailureSta(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const barData = new ChartType();
        const data = res.data;
        if (data['count']) {
          const list = [];
          for (const key in data['count']) {
            list.push(data['count'][key]);
          }

          const bar = {
            type: 'bar',
            barMaxWidth: 18,
            data: list,
            z: 10,
            label: {
              show: this.showLabel,
              position: 'top'
            }
          };
          barData.data = [bar];
          const names = [];
          for (const key in data['hostid']) {
            names.push(data['hostid'][key]);
          }
          barData.xAxis = names;
          this.oneBar2.setConfig(barData);
        }
      }
    });
  }

  getHDMFailureSta(condition: string) {
    this.loading = true;
    this.service.getHDMFailureSta(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const barData = new ChartType();
        const data = res.data;
        if (data['count']) {
          const list = [];
          for (const key in data['count']) {
            list.push(data['count'][key]);
          }

          const bar = {
            type: 'bar',
            barMaxWidth: 18,
            data: list,
            z: 10,
            label: {
              show: this.showLabel,
              position: 'top'
            }
          };
          barData.data = [bar];
          const names = [];
          for (const key in data['model']) {
            names.push(data['model'][key]);
          }
          barData.xAxis = names;
          this.oneBar3.setConfig(barData);
        }
      }
    });
  }

  getHDBPro(condition: string) {
    this.loading = true;
    this.service.getHDBPro(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const barData = new ChartType();
        const data = res.data;
        if (data['Brand']) {
          const list = [];
          for (const key in data['Brand']) {
            list.push({value: data['Num'][key], name: data['Brand'][key]});
          }
          barData.data = list;
          this.onePie1.setConfig(barData, '硬盘故障次数统计');
        }
      }
    });
  }

  getFHDBPro(condition: string) {
    this.loading = true;
    this.service.getFHDBPro(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const barData = new ChartType();
        const data = res.data;
        if (data['Brand']) {
          const list = [];
          for (const key in data['Brand']) {
            list.push({value: data['Num'][key], name: data['Brand'][key]});
          }
          barData.data = list;
          this.onePie2.setConfig(barData, '故障硬盘品牌比例');
        }
      }
    });
  }

  getFHDCPro(condition: string) {
    this.loading = true;
    this.service.getFHDCPro(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const barData = new ChartType();
        const data = res.data;
        if (data['Size']) {
          const list = [];
          for (const key in data['Size']) {
            list.push({value: data['Num'][key], name: data['Size'][key]});
          }
          barData.data = list;
          this.onePie3.setConfig(barData, '故障硬盘容量比例');
        }
      }
    });
  }

  getHDCBPro(condition: string) {
    this.loading = true;
    this.service.getHDCBPro(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const barData = new ChartType();
        const data = res.data;
        if (data['Size']) {
          const list = [];
          for (const key in data['Size']) {
            list.push({value: data['Num'][key], name: data['Size'][key]});
          }
          barData.data = list;
          this.onePie4.setConfig(barData, '全部硬盘容量比例');
        }
      }
    });
  }

  getHDFCTrend(condition: string) {
    this.loading = true;
    this.service.getHDFCTrend(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const lineData = new ChartType();
        const data = res.data;
        for (const key in data) {
          if (key !== 'date') {
            const line: LineObject = {
              name: key,
              type: 'line',
              stack: 'Total',
              smooth: true,
              data: []
            };
            const subList = [];
            for (const subKey in data[key]) {
              subList.push(Math.round(data[key][subKey] / (1024 * 1024  * 1024)));
            }
            line.data = subList;
            lineData.data?.push(line);
          }
        }
        if (data['date']) {
          const list = [];
          const names = [];
          for (const key in data['date']) {
            names.push(data['date'][key]);
          }
          lineData.xAxis = names;
        }
        this.lineChart3.setConfig(lineData);
      }
    });
  }

  getHDFRTrend(condition: string) {
    this.loading = true;
    this.service.getHDFRTrend(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const lineData = new ChartType();
        const data = res.data;
        for (const key in data) {
          if (key !== 'date') {
            const line: LineObject = {
              name: key,
              type: 'line',
              stack: 'Total',
              smooth: true,
              data: []
            };
            const subList = [];
            for (const subKey in data[key]) {
              subList.push(data[key][subKey]);
            }
            line.data = subList;
            lineData.data?.push(line);
          }
        }
        if (data['date']) {
          const list = [];
          const names = [];
          for (const key in data['date']) {
            names.push(data['date'][key]);
          }
          lineData.xAxis = names;
        }
        this.lineChart2.setConfig(lineData);
      }
    });
  }

  getHDFTrend(condition: string) {
    this.loading = true;
    this.service.getHDFTrend(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const lineData = new ChartType();
        const data = res.data;
        for (const key in data) {
          if (key !== 'date') {
            const line: LineObject = {
              name: key,
              type: 'line',
              stack: 'Total',
              smooth: true,
              data: []
            };
            const subList = [];
            for (const subKey in data[key]) {
              subList.push(data[key][subKey]);
            }
            line.data = subList;
            lineData.data?.push(line);
          }
        }
        if (data['date']) {
          const list = [];
          const names = [];
          for (const key in data['date']) {
            names.push(data['date'][key]);
          }
          lineData.xAxis = names;
        }
        this.lineChart1.setConfig(lineData);
      }
    });
  }
}
