import { Component, OnInit } from '@angular/core';
import {CoopTrainingService} from './coop-training.service';

@Component({
  selector: 'app-coop-training',
  templateUrl: './coop-training.component.html',
  styleUrls: ['./coop-training.component.less']
})
export class CoopTrainingComponent implements OnInit {

  range = [];
  value = 'A-213';
  list = [{id:12, name: '训练集'}, {id:12, name: '测试集'}];
  loading = false;
  constructor(private service: CoopTrainingService) { }

  ngOnInit(): void {
    this.getCacheData();
  }

  getCacheData() {
    this.loading = true;
    this.service.getCacheData().subscribe(res => {
      this.loading = false;
      if (res.code === 200) {
        console.log(res.data);
      }
    });
  }

  getDataList(condition: any) {
    this.loading = true;
    this.service.getDataList(condition).subscribe(res => {
      this.loading = false;
      if (res.code ===200) {
        console.log(res.data);
      }
    });
  }
}
