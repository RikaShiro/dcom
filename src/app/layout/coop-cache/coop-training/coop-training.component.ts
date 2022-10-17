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
        const D = res.data;
        this.lines.delay = [D['ad_ADL'], D['ad_ADL_ran']];
        this.lines.hitRate = [D['ad_HIT'], D['ad_HIT_ran']];
        this.lines.utility = [D['ad_UTIL'], D['ad_UTIL_ran']];
        this.lines.hitTraffic = [
          D['ad_hitTraffic'],
          D['ad_hitTraffic_ran'],
          D['ad_reTraffic'],
        ];
        console.log(this.lines.delay)
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
