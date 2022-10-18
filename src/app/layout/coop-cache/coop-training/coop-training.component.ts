import { Component, OnInit } from '@angular/core';
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
  xAxis = [] as number[];

  constructor(private service: CoopTrainingService) {}

  ngOnInit(): void {
    this.getCacheData();
  }

  getCacheData() {
    this.loading = new Array(4).fill(true);
    this.service.getCacheData().subscribe((res) => {
      if (res.code === 200) {
        const D = res.data;
        this.xAxis = D['xAxis'];
        if (!this.validate(this.xAxis)) return;
        this.lines[0] = [D['ad_UTIL'], D['ad_UTIL_ran']];
        this.lines[1] = [D['ad_ADL'], D['ad_ADL_ran']];
        this.lines[2] = [
          D['ad_hitTraffic'],
          D['ad_hitTraffic_ran'],
          D['ad_reTraffic'],
        ];
        this.lines[3] = [D['ad_HIT'], D['ad_HIT_ran']];
        for (let i = 0; i < this.lines.length; i++) {
          this.loading[i] = !this.validate(this.lines[i]);
        }
        console.log(this.loading)
      }
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
