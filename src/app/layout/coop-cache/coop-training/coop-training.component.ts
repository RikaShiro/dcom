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
  loading = false;
  lines = {
    delay: [] as number[][],
    hitRate: [] as number[][],
    utility: [] as number[][],
    hitTraffic: [] as number[][],
  };
  
  constructor(private service: CoopTrainingService) {}

  ngOnInit(): void {
    this.getCacheData();
  }

  getCacheData() {
    this.loading = true;
    this.service.getCacheData().subscribe((res) => {
      this.loading = false;
      if (res.code === 200) {
        // console.log(res.data);
        const temp = res.data;
        this.lines.delay = [temp['ad_ADL'], temp['ad_ADL_ran']];
        this.lines.hitRate = [temp['ad_HIT'], temp['ad_HIT_ran']];
        this.lines.utility = [temp['ad_UTIL'], temp['ad_UTIL_ran']];
        this.lines.hitTraffic = [
          temp['ad_hitTraffic'],
          temp['ad_hitTraffic_ran'],
          temp['ad_reTraffic'],
        ];
        console.log(this.lines.delay, this.lines.hitRate)
      }
    });
  }

  getDataList(condition: any) {
    this.loading = true;
    this.service.getDataList(condition).subscribe((res) => {
      this.loading = false;
      if (res.code === 200) {
        console.log(res.data);
      }
    });
  }
}
