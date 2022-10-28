import { Component, OnInit } from '@angular/core';
import { CacheStrategyService } from './cache-strategy.service';

@Component({
  selector: 'app-cache-strategy',
  templateUrl: './cache-strategy.component.html',
  styleUrls: ['./cache-strategy.component.less'],
})
export class CacheStrategyComponent implements OnInit {
  selectedModel = null;
  modelData = [];
  predictData = {};
  loading = true;

  constructor(private service: CacheStrategyService) {}
  ngOnInit(): void {
    this.getPredictData();
  }
  getPredictData() {
    this.loading = true;
    this.service.getPredictData().subscribe((res) => {
      if (res.code === 200) {
        const $ = res.data;
        this.modelData = $.moduleList;
        this.selectedModel = this.modelData[0];
        this.predictData = {
          xAxis: $.xAxis,
          data: $.dataSource,
        };
        this.loading = false;
      }
    });
  }
  modelChange(event: any) {}
}
