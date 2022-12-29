import { Component, OnInit, ViewChild } from '@angular/core';
import { PeTrainingService } from './pe-training.service';
import { TrainDisk } from '../../disk-monitor/model/TrainDisk';
import { PeTraining, TrainingObject } from '../model/PeTraining';
import { ChartType } from '../../../common/const/ChartType';
import { LineObject } from '../../disk-monitor/disk-status/disk-status.component';
import { DiskLineChartComponent } from '../../disk-monitor/distk-training/disk-line-chart/disk-line-chart.component';
import { PeLineChartComponent } from './pe-line-chart/pe-line-chart.component';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-pe-training',
  templateUrl: './pe-training.component.html',
  styleUrls: ['./pe-training.component.less'],
})
export class PeTrainingComponent implements OnInit {
  range = [];
  value = 'A-213';
  list = [
    { id: 12, name: '训练集', mae: 0, mse: 0 },
    { id: 12, name: '测试集', mae: 0, mse: 0 },
  ];
  paramsList: string[] = [];
  currentParams = new PeTraining();
  selectedModel: number = 0;
  trainingTimeList: { label: string; value: number }[] = [];
  learningRateList: number[] = [];
  chartLoading = false;
  isRunning = false;

  @ViewChild('lineChart1', { static: false }) lineChart1: PeLineChartComponent;
  @ViewChild('lineChart2', { static: false }) lineChart2: PeLineChartComponent;

  constructor(
    private service: PeTrainingService,
    private msg: NzMessageService
  ) {
    this.lineChart1 = new PeLineChartComponent();
    this.lineChart2 = new PeLineChartComponent();
  }

  ngOnInit(): void {
    this.getModelList();
    this.getTrainingStatus();
  }

  getModelList() {
    this.service.getModelList().subscribe((res) => {
      if (res.code === 200) {
        const data = res.data;
        if (data.value) {
          const model = data.value;
          if (model) {
            const list: string[] = model.train_time;
            this.trainingTimeList = list.map((train, index) => {
              return {
                label: train,
                value: index,
              };
            });
            this.learningRateList = model.learinin_rate;
            this.currentParams = model;
            this.selectedModel = this.trainingTimeList[0].value;
            this.currentParams.learinin_rate = this.learningRateList[0];
            this.getTrainData();
          }
        }
      }
    });
  }

  getRealTrainData() {
    this.currentParams.learning_rate = this.currentParams.learinin_rate;
    this.isRunning = true;
    const params = [
      'bagging_fraction',
      'feature_fraction',
      'learning_rate',
      'iterations',
      'num_leaves',
      'subsample_freq',
    ];
    const $: any = { ...this.currentParams };
    for (const k in $) {
      if (!params.includes(k)) {
        delete $[k]
      }
    }
    // const $: any = {
    //   learning_rate: 0.01,
    //   num_leaves: 31,
    //   subsample_freq: 1,
    //   feature_fraction: 0.9,
    //   bagging_fraction: 0.8,
    //   iterations: 10800,
    // };
    this.service.getRealTrainData($).subscribe({
      next: (res) => {
        console.log(res)
        if (res.code === 200) {
          this.getRealTrainResult(this.currentParams.learning_rate);
        }
        this.isRunning = false;
      },
      error: (_error) => {
        this.isRunning = false;
      },
    });
  }

  getRealTrainResult(rate: any) {
    const params = {
      learning_rate: rate,
    };
    this.service.getRealTrainResult(params).subscribe({
      next: (res) => {
        if (res.code === 200) {
          const data = res.data;
          this.setChartData(data);
        }
        this.isRunning = false;
      },
      error: (_error) => {
        this.isRunning = false;
      },
    });
  }

  getTrainData() {
    this.chartLoading = true;
    this.service.getTrainData(this.selectedModel + 1).subscribe({
      next: (res) => {
        this.chartLoading = false;
        if (res.code === 200) {
          const data = res.data;
          this.setChartData(data);
        }
      },
      error: (_error) => {
        this.chartLoading = false;
      },
    });
  }

  getTrainingStatus() {
    this.service.getTrainingStatus().subscribe({
      next: (res) => {
        console.log(res);
        if (res.code === 200) {
          if (res.data) {
            this.getRealTrainData();
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

  setChartData(data: any) {
    const metric_l1_01 = data.metric_l1_01;
    const metric_l2_01 = data.metric_l2_01;
    const sheet = data.sheet;
    this.list[0].mae = sheet.train_MAE;
    this.list[0].mse = sheet.train_MSE;
    this.list[1].mae = sheet.test_MAE;
    this.list[1].mse = sheet.test_MSE;

    if (metric_l1_01) {
      const iterations = metric_l1_01.Iterations;
      const training_l1 = metric_l1_01.training_l1;
      const valid_1_l1 = metric_l1_01.valid_1_l1;
      const lineData = new ChartType();
      const line1: LineObject = {
        name: 'Training',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: [],
      };
      const line2: LineObject = {
        name: 'Valid_1',
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: [],
      };
      const names = [];
      for (const key in training_l1) {
        line1.data?.push(training_l1[key]);
        line2.data?.push(valid_1_l1[key]);
        names.push(iterations[key]);
      }
      lineData.xAxis = names;
      lineData.data?.push(line1, line2);
      lineData.legend = ['Training', 'Valid_1'];
      this.lineChart1.setConfig(lineData);
    }

    if (metric_l2_01) {
      const iterations = metric_l2_01.Iterations;
      const training_l2 = metric_l2_01.training_l2;
      const valid_1_l2 = metric_l2_01.valid_1_l2;
      const lineData = new ChartType();
      lineData.xAxis = iterations;
      const line1: LineObject = {
        name: 'Training',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: [],
      };
      const line2: LineObject = {
        name: 'Valid_1',
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: [],
      };
      const names = [];
      for (const key in training_l2) {
        line1.data?.push(training_l2[key]);
        line2.data?.push(valid_1_l2[key]);
        names.push(iterations[key]);
      }
      lineData.xAxis = names;

      lineData.data?.push(line1, line2);
      lineData.legend = ['Training', 'Valid_1'];
      this.lineChart2.setConfig(lineData);
    }
  }

  modelChange(event: any) {
    this.selectedModel = event;
    this.currentParams.learinin_rate =
      this.learningRateList[this.selectedModel];
    this.getTrainData();
  }
}
