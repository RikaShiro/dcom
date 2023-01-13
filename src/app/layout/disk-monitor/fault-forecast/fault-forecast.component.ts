import { Component, OnInit } from '@angular/core';
import {FaultForecastService} from './fault-forecast.service';
import {formatNumberWidth} from '../../../common/utils/utils';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-fault-forecast',
  templateUrl: './fault-forecast.component.html',
  styleUrls: ['./fault-forecast.component.less']
})
export class FaultForecastComponent implements OnInit {

  selectedModel: any = null;
  selectedModelLabel: string = '-';
  selectTime: string = '';
  list: any[] = [];

  loading = false;
  modelData: any[] = []; // 可分组选择
  currentList = [];
  isRunning = false;
  runningList = [];
  selectedRunModel: string = '';
  modelMap: any = {};
  canRun:boolean = false;
  constructor(private service: FaultForecastService,
              private msg: NzMessageService) { }

  ngOnInit(): void {
    this.getModelList();
    this.getRunModelList();
  }

  getModelList() {
    this.service.getModelList().subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const data = res.data;
        if (data.value) {
          const model = data.value.model;
          const predict_time = data.value.predict_time;
          const list = [];
          for (let i = 1, j = 0; i <= model.length; i++, j++) {
            list.push({value: i, label: model[j]});
            this.modelMap[model[j]] = true;
          }
          this.modelData.push(...list);
          this.selectedModel = list[0].value;
          this.selectedModelLabel = list[0].label;
          const start = this.selectedModelLabel.indexOf('(');
          const end = this.selectedModelLabel.indexOf(')');
          this.selectTime = this.selectedModelLabel.substring(start + 1, end);
          this.getDataList();
        }
      }
    });
  }
  getRunModelList() {
    this.service.getRunModelList().subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const data = res.data;
        this.runningList = data.model_choice;
        // this.selectedRunModel = this.runningList[0];
        const list = [];
        let index = 1;
        for (const item of this.runningList) {
          this.modelMap[item] = false;
          index++;
          list.push({value: ('run' + index), label: item});
        }
        this.modelData.push(...list);

      }
    });
  }

  modelRunChange(event: any) {
    this.selectedRunModel = event;
  }


  getTrainingStatus() {
    if (!this.canRun) {
      this.msg.warning('当前模型为历史模型，请重新选择！')
      return;
    }
    this.isRunning = true;
    this.service.getTrainingData(this.selectedRunModel).subscribe({
      next: (res) => {
        if (res.code === 200) {
          const data = res.data;
          if (data['failure']) {
            this.list = data['failure'];
            this.list.forEach((item: any) => item.capacity_bytes = formatNumberWidth(item.capacity_bytes, 0));
          }
        }
      },
      error: (_error) => {
        this.isRunning = false;
      },
    });
  }
  getDataList() {
    this.loading = true;
    this.service.getDataList(this.selectedModel).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        const data = res.data;
        const key = 'pred_20210' + this.selectedModel;
        if (data[key]) {
          this.list = data[key];
          this.list.forEach((item: any) => item.capacity_bytes = formatNumberWidth(item.capacity_bytes, 0));
        }
      }
    });
  }

  getModelFormatData(data: any) {
    const list = [];
    if (data['model']) {
      const len = data['model'];
      const capacity_bytes = data['model']['capacity_bytes'];
      const failure = data['model']['failure'];
      const feature = data['model']['feature'];
      const model = data['model']['model'];
      const serial_number = data['model']['serial_number'];
      for (let i = 0; i < len; i++) {
        list.push(
          {
            capacity_bytes: capacity_bytes ? capacity_bytes[i] : '-',
            failure: failure ? failure[i] : '-',
            feature: feature ? feature[i] : '-',
            model: model ? model[i] : '-',
            serial_number: serial_number ? serial_number[i] : '-',
          }
        )
      }
      this.list = list;
    }

  }

  modelChange(event: any) {
    this.selectedModel = event;
    const list = this.modelData.filter( item => item.value === event);
    if (list && list.length > 0) {
      this.selectedModelLabel = list[0].label;
      if (this.modelMap[ this.selectedModelLabel]) {
        this.getDataList();
        this.canRun = false;
      } else {
        this.list = [];
        this.canRun = true;
      }
      /*const start = this.selectedModelLabel.indexOf('(');
      const end = this.selectedModelLabel.indexOf(')');
      this.selectTime = this.selectedModelLabel.substring(start + 1, end);*/
    }
  }
}
