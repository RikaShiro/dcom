import {Component, OnInit, ViewChild} from '@angular/core';
import {CostStatusService} from './cost-status.service';
import {ChartType} from '../../../common/const/ChartType';
import {LinesChartComponent} from './lines-chart/lines-chart.component';
import {StackBarComponent} from './stack-bar/stack-bar.component';
import {PeecBarComponent} from './peec-bar/peec-bar.component';

interface BarObject {
  type: string,
  barMaxWidth: number,
  name?: string;
  data: number[],
  z: number,
  stack: string,
  label: {
    show: boolean,
    position?: string
  }
}

@Component({
  selector: 'app-cost-status',
  templateUrl: './cost-status.component.html',
  styleUrls: ['./cost-status.component.less']
})
export class CostStatusComponent implements OnInit {

  date = 'day';
  rangeList = [
    {label: '24 Hours', value: 'day'},
    {label: '30 Days', value: 'month'},
    {label: '52 Weeks', value: 'year'},
  ]
  hasLine = false;
  showLabel = true;
  loading = false;

  barData = new ChartType();
  stackData = new ChartType();
  @ViewChild('lineChart', {static: false}) lineChart: LinesChartComponent;
  @ViewChild('stackBar', {static: false}) stackBar: StackBarComponent;
  @ViewChild('peecBar4', {static: false}) peecBar4: PeecBarComponent;
  @ViewChild('peecBar1', {static: false}) peecBar1: PeecBarComponent;
  @ViewChild('peecBar2', {static: false}) peecBar2: PeecBarComponent;
  @ViewChild('peecBar3', {static: false}) peecBar3: PeecBarComponent;
  @ViewChild('peecBar5', {static: false}) peecBar5: PeecBarComponent;

  pueLoading = false;
  itLoading = false;
  chartLoading = false;
  constructor(private service: CostStatusService) {
    this.lineChart = new LinesChartComponent();
    this.stackBar = new StackBarComponent();
    this.peecBar1 = new PeecBarComponent();
    this.peecBar2 = new PeecBarComponent();
    this.peecBar3 = new PeecBarComponent();
    this.peecBar4 = new PeecBarComponent();
    this.peecBar5 = new PeecBarComponent();
  }

  ngOnInit(): void {
    this.getPCData('week');
    this.getPCData('quarter');
    this.getPCData('year');
    this.getPCData('day');
    this.getPCData('month');
    this.getPCTrend();
    this.getPueTrend();
  }

  getPCData(type: string) {
    this.chartLoading = true;
    this.service.getPCData(type).subscribe(res => {
      this.chartLoading = false;
      if (res.code === 200) {
        const data = res.data;
        this.setConfigData(data, type);
      }
    }, error => {
      this.chartLoading = false;
    });
  }

  setConfigData(data: any, type: string) {
    const power = data.Power;
    const bar: BarObject = {
      type: 'bar',
      barMaxWidth: 35,
      name: '耗电量',
      data: [],
      z: 10,
      stack: '',
      label: {
        show: false,
        position: 'top'
      }
    };
    for (const key in power) {
      bar.data.push(power[key]);
    }
    const barDataSimple = new ChartType();
    barDataSimple.data = [bar];
    const list: any[] = [];
    if (data['hour'] && data['minute']) {
      for (const key in data['hour']) {
        const minute = data['minute'][key] < 10 ? '0' + data['minute'][key] : data['minute'][key];
        list.push(data['hour'][key] + ':' + minute);
      }
    } else if (data['day']) {
      for (const key in data['day']) {
        const val = data['day'][key];
        list.push(val);
      }
    } else if (data['month']) {
      for (const key in data['month']) {
        const val = data['month'][key];
        list.push(val);
      }
    } else if (data['season']) {
      for (const key in data['season']) {
        const val = data['season'][key];
        list.push(val);
      }
    }
    barDataSimple.xAxis = list;
    switch (type) {
      case 'week': this.peecBar1.setConfig(barDataSimple); break;
      case 'month': this.peecBar2.setConfig(barDataSimple); break;
      case 'quarter': this.peecBar3.setConfig(barDataSimple); break;
      case 'year': this.peecBar4.setConfig(barDataSimple); break;
      case 'day': this.peecBar5.setConfig(barDataSimple); break;
    }
  }

  changeRange(event: string) {
    this.date = event;
    this.getPCTrend();
    this.getPueTrend();
  }

  getPCTrend() {
    this.itLoading = true;
    this.service.getPCTrend(this.date).subscribe(res => {
      this.itLoading = false;
      if (res.code === 200) {
        const data = res.data;
        if (data['IT_Power']) {
          const bar: BarObject = {
            type: 'bar',
            barMaxWidth: 35,
            name: 'IT设备',
            data: [],
            z: 10,
            stack: 'all',
            label: {
              show: false
            }
          };
          for (const key in data['IT_Power']) {
            const value: number = data['IT_Power'][key];
            bar.data.push(data['IT_Power'][key]);
          }
          const bar2: BarObject = {
            type: 'bar',
            barMaxWidth: 35,
            name: '制冷设备',
            data: [],
            z: 10,
            stack: 'all',
            label: {
              show: false
            }
          };
          for (const key in data['Refrigeration_Power']) {
            bar2.data.push(data['Refrigeration_Power'][key]);
          }
          this.stackData.data = [bar, bar2];
        }
        const list: any[] = [];
        if (data['hour'] && data['minute']) {
          for (const key in data['hour']) {
            const minute = data['minute'][key] < 10 ? '0' + data['minute'][key] : data['minute'][key];
            list.push(data['hour'][key] + ':' + minute);
          }
        } else if (data['day']) {
          for (const key in data['day']) {
            list.push(data['day'][key]);
          }
        } else if (data['month']) {
          for (const key in data['month']) {
            list.push(data['month'][key]);
          }
        }
        this.stackData.xAxis = list;
        this.stackData.legend = ['IT设备', '制冷设备'];
        setTimeout( () =>{
          this.stackBar.setConfig(this.stackData);
        }, 100);
      }
    }, error => {
      this.itLoading = false;
    });
  }

  getPueTrend() {
    this.pueLoading = true;
    this.service.getPueTrend(this.date).subscribe(res => {
      this.pueLoading = false;
      if (res.code === 200) {
        const data = res.data;
        if (data['PUE']) {
          const list: any[] = [];
          for (const key in data['PUE']) {

            list.push(data['PUE'][key]);
          }
          this.barData.data = [
            {type: 'line', data: list, name: 'PUE'}
          ];
        }
        const list: any[] = [];
        if (data['hour'] && data['minute']) {
          for (const key in data['hour']) {
            const minute = data['minute'][key] < 10 ? '0' + data['minute'][key] : data['minute'][key];
            list.push(data['hour'][key] + ':' + minute);
          }
        } else if (data['day']) {
          for (const key in data['day']) {
            list.push(data['day'][key]);
          }
        } else if (data['month']) {
          for (const key in data['month']) {
            list.push(data['month'][key]);
          }
        }
        this.stackData.xAxis = list;
        setTimeout( () =>{
          this.lineChart.setConfig(this.barData);
        }, 100);

      }
    }, error => {
      this.pueLoading = false;
    });
  }

}
