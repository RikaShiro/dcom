import { Component, OnInit } from '@angular/core';
import { assert } from 'console';
import { CoopTrainingService } from './coop-training.service';

@Component({
  selector: 'app-coop-training',
  templateUrl: './coop-training.component.html',
  styleUrls: ['./coop-training.component.less'],
})
export class CoopTrainingComponent implements OnInit {
  range = [];
  value = 'A-213';
  list = [
    { id: 12, name: '训练集' },
    { id: 12, name: '测试集' },
  ];
  loading: boolean[] = [];
  lines: number[][][] = [];
  xAxis: number[]= [];
  MSE: number = 0;

  constructor(private service: CoopTrainingService) {}

  ngOnInit(): void {
    this.getCacheData();
    this.getTrafficData();
  }

  getCacheData() {
    this.loading = new Array(4).fill(true);
    this.service.getCacheData().subscribe((res) => {
      if (res.code !== 200) return;
      const data = res.data;
      this.xAxis = data['xAxis'];
      if (!this.validate(this.xAxis)) return;
      this.lines[0] = [data['ad_UTIL'], data['ad_UTIL_ran']];
      this.lines[1] = [data['ad_ADL'], data['ad_ADL_ran']];
      this.lines[2] = [
        data['ad_hitTraffic'],
        data['ad_hitTraffic_ran'],
        data['ad_reTraffic'],
      ];
      this.lines[3] = [data['ad_HIT'], data['ad_HIT_ran']];
      for (let i = 0; i < this.lines.length; i++) {
        this.loading[i] = !this.validate(this.lines[i]);
      }
    });
  }

  getTrafficData() {
    this.service.getTrafficData().subscribe((res) => {
      if (res.code !== 200) return;
      console.log(res.data);
      const data = res.data;
      assert('MSE' in data);
    });
  }

  getDataList(condition: any) {
    // this.loading = true;
    this.service.getDataList(condition).subscribe((res) => {
      // this.loading = false;
      if (res.code === 200) {
        console.log(res.data);
      }
    });
  }

  validate(arr: any): boolean {
    arr = arr.flat();
    return Array.isArray(arr) && arr.length > 0 && typeof arr[0] === 'number';
  }
}
