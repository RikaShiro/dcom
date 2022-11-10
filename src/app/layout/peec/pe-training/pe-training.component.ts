import {Component, OnInit, ViewChild} from '@angular/core';
import {PeTrainingService} from './pe-training.service';
import {TrainDisk} from '../../disk-monitor/model/TrainDisk';
import {PeTraining} from '../model/PeTraining';
import {ChartType} from '../../../common/const/ChartType';
import {LineObject} from '../../disk-monitor/disk-status/disk-status.component';
import {DiskLineChartComponent} from '../../disk-monitor/distk-training/disk-line-chart/disk-line-chart.component';
import {PeLineChartComponent} from './pe-line-chart/pe-line-chart.component';

@Component({
  selector: 'app-pe-training',
  templateUrl: './pe-training.component.html',
  styleUrls: ['./pe-training.component.less']
})
export class PeTrainingComponent implements OnInit {

  range = [];
  value = 'A-213';
  list = [{id:12, name: '训练集', mae: 0, mse: 0}, {id:12, name: '测试集', mae: 0, mse: 0}];
  paramsList: string[] = [];
  currentParams = new PeTraining();
  selectedModel: number = 0;
  trainingTimeList: {label: string, value: number}[] = [];
  learningRateList: number[] = [];
  chartLoading = false;
  @ViewChild('lineChart1', {static: false}) lineChart1: PeLineChartComponent;
  @ViewChild('lineChart2', {static: false}) lineChart2: PeLineChartComponent;
  constructor(private service: PeTrainingService) {
    this.lineChart1 = new PeLineChartComponent();
    this.lineChart2 = new PeLineChartComponent();
  }

  ngOnInit(): void {
    this.getModelList();
  }

  getModelList() {
    this.service.getModelList().subscribe(res => {
      if (res.code ===200) {
        const data = res.data;
        if (data.value) {
          const model = data.value;
          if (model) {
            const list: string[] = model.train_time;
            this.trainingTimeList = list.map( (train, index) => {
              return {
                label: train,
                value: index
              }
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

  getTrainData() {
    this.chartLoading = true;
    this.service.getTrainData(this.selectedModel + 1).subscribe(res => {
      this.chartLoading = false;
      if (res.code ===200) {
        const data = res.data;
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
            data: []
          };
          const line2: LineObject = {
            name: 'Valid_1',
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: []
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
            data: []
          };
          const line2: LineObject = {
            name: 'Valid_1',
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: []
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
    }, err =>{
      this.chartLoading = false;
    });
  }

  modelChange(event: any) {
    this.selectedModel = event;
    this.currentParams.learinin_rate = this.learningRateList[this.selectedModel];
    this.getTrainData();
  }
}
