import { Component, OnInit } from '@angular/core';
import {FaultForecastService} from './fault-forecast.service';
import {formatNumberWidth} from '../../../common/utils/utils';

@Component({
  selector: 'app-fault-forecast',
  templateUrl: './fault-forecast.component.html',
  styleUrls: ['./fault-forecast.component.less']
})
export class FaultForecastComponent implements OnInit {

  selectedModel: any = null;
  list: any[] = [];

  loading = false;
  modelData: any[] = [];
  currentList = [];
  constructor(private service: FaultForecastService) { }

  ngOnInit(): void {
    this.getModelList();
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
          for (let i = 1, j = 0; i < 7; i++, j++) {
            list.push({value: i, label: model[j]});
          }
          this.modelData = list;
          this.selectedModel = list[0].value;
          this.getDataList();
        }
      }
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
    this.getDataList();
  }
}
