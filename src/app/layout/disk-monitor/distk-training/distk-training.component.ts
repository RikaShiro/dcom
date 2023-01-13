import {Component, OnInit, ViewChild} from '@angular/core';
import {DistkTrainingService} from './distk-training.service';
import {TrainDisk} from '../model/TrainDisk';
import {TrendLineComponent} from '../disk-status/trend-line/trend-line.component';
import {DiskLineChartComponent} from './disk-line-chart/disk-line-chart.component';
import {DiskLineStepComponent} from './disk-line-step/disk-line-step.component';
import {LineObject} from '../disk-status/disk-status.component';
import {ChartType} from '../../../common/const/ChartType';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-distk-training',
  templateUrl: './distk-training.component.html',
  styleUrls: ['./distk-training.component.less']
})
export class DistkTrainingComponent implements OnInit {

  range = [];
  value = 'A-213';
  loading = false;
  modelData = [
    {label: '202101', value: 1},
    {label: '202102', value: 2},
    {label: '202103', value: 3},
    {label: '202104', value: 4},
    {label: '202105', value: 5},
    {label: '202106', value: 6},
  ];
  selectedModel = null;
  paramsList: TrainDisk[] = [];
  dateList: string[] = [];
  currentParams = new TrainDisk();
  @ViewChild('lineChart', {static: false}) lineChart: DiskLineChartComponent;
  @ViewChild('lineStep', {static: false}) lineStep: DiskLineStepComponent;
  chartLoading = false;
  isRunning = false;
  selectedLabel: string = '-';
  constructor(private service: DistkTrainingService,
              private msg: NzMessageService) {
    this.lineChart = new DiskLineChartComponent();
    this.lineStep = new DiskLineStepComponent();
  }

  ngOnInit(): void {
    this.getModelList();
  }

  getModelList() {
    this.service.getModelList().subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const data = res.data;
        if (data.parameter_settings) {
          const model = data.parameter_settings;
          if (model && model.length > 0) {
            this.paramsList = model;
            this.paramsList.forEach( (item: TrainDisk, index) => {
              item.value = index + 1;
              item.date = index + 202101;
            });
            this.currentParams = model[0];
            this.selectedModel = model[0].value;
            this.selectedLabel = model[0].train_data;
            this.getTrainData();
          }
        }
      }
    });
  }
  getTrainingStatus() {
    this.isRunning = true;
    this.service.getTrainingStatus().subscribe({
      next: (res) => {
        if (res.code === 200) {
          if (!res.data) {
            this.setRealTraining();
          } else {
            this.msg.warning('正在进行训练，请执行完毕再操作。');
          }
        }
      },
      error: (_error) => {
        this.isRunning = false;
      },
    });
  }

  setRealTraining() {
    this.isRunning = true;
    this.currentParams.date = '20210' + this.selectedModel;
    this.service.onGoTraining(this.currentParams).subscribe({
      next: (res) => {
        this.isRunning = false;
        if (res.code === 200) {
          const data = res.data;
          this.setChartConfig(data);
        }
      },
      error: (_error) => {
        this.isRunning = false;
      },
    });
  }
  getTrainData() {
    this.chartLoading = true;
    this.service.getTrainData(this.selectedModel).subscribe(res => {
      this.chartLoading = false;
      if (res.code ===200) {
        const data = res.data;
        this.setChartConfig(data);
        /*const metric = data['Metric_20210' + this.selectedModel];
        const roc = data['ROC_20210' + this.selectedModel];
        if (metric) {
          const Iterations = metric.Iterations;
          const training_auc = metric.training_auc;
          const valid_1_auc = metric.valid_1_auc;
          const lineData = new ChartType();
          const line: LineObject = {
            name: 'Iterations',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: []
          };
          const line2: LineObject = {
            name: 'Training_auc',
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: []
          };
          const line3: LineObject = {
            name: 'Valid_1_auc',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: []
          };
          const names: any[] = [];
          let index = 1;
          for (const key in Iterations) {
            // line.data?.push(Iterations[key]);
            line2.data?.push(training_auc[key]);
            line3.data?.push(valid_1_auc[key]);
            names.push(index++);
          }
          lineData.data?.push(line2, line3);
          lineData.xAxis = names;
          lineData.legend = ['Training_auc', 'Valid_1_auc'];
          this.lineChart.setConfig(lineData);
        }
        if (roc) {
          const acc = roc.ACC;
          const auc = roc.AUC;
          const fpr = roc.FPR;
          const tpr = roc.TPR;
          const stepChart = new ChartType();
          const dataList = [];
          for (const key in fpr) {
            const pointer = {
              label: {
                show: false
              },
              emphasis: {
                label: {
                  show: false
                }
              },
              name: key,
              value: [fpr[key], tpr[key], 1, 'fpr']
            };
            dataList.push(pointer);
          }
          const links = dataList.map(function (item, idx) {
            return {
              source: idx,
              target: idx + 1
            };
          });
          this.lineStep.setConfig(dataList, links, acc['0'], auc['0']);
        }*/
      }
    }, err =>{
      this.chartLoading = false;
    });
  }

  setChartConfig(data: any) {
    const metric = data['Metric_20210' + this.selectedModel];
    const roc = data['ROC_20210' + this.selectedModel];
    if (metric) {
      const Iterations = metric.Iterations;
      const training_auc = metric.training_auc;
      const valid_1_auc = metric.valid_1_auc;
      const lineData = new ChartType();
      const line: LineObject = {
        name: 'Iterations',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: []
      };
      const line2: LineObject = {
        name: 'Training_auc',
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: []
      };
      const line3: LineObject = {
        name: 'Valid_1_auc',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: []
      };
      const names: any[] = [];
      let index = 1;
      for (const key in Iterations) {
        // line.data?.push(Iterations[key]);
        line2.data?.push(training_auc[key]);
        line3.data?.push(valid_1_auc[key]);
        names.push(index++);
      }
      lineData.data?.push(line2, line3);
      lineData.xAxis = names;
      lineData.legend = ['Training_auc', 'Valid_1_auc'];
      this.lineChart.setConfig(lineData);
    }
    if (roc) {
      const acc = roc.ACC;
      const auc = roc.AUC;
      const fpr = roc.FPR;
      const tpr = roc.TPR;
      const stepChart = new ChartType();
      const dataList = [];
      for (const key in fpr) {
        const pointer = {
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: false
            }
          },
          name: key,
          value: [fpr[key], tpr[key], 1, 'fpr']
        };
        dataList.push(pointer);
      }
      const links = dataList.map(function (item, idx) {
        return {
          source: idx,
          target: idx + 1
        };
      });
      this.lineStep.setConfig(dataList, links, acc['0'], auc['0']);
    }
  }

  modelChange(event: any) {
    this.selectedModel = event;
    const list = this.paramsList.filter( item => item.value === event);
    if (list && list.length > 0) {
      this.selectedLabel = list[0].train_data;
    }
    this.currentParams = this.paramsList[event];
    this.getTrainData();
  }
}
