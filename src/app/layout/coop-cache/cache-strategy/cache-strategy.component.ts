import { Component, OnInit } from '@angular/core';
import { CacheStrategyService } from './cache-strategy.service';

@Component({
  selector: 'app-cache-strategy',
  templateUrl: './cache-strategy.component.html',
  styleUrls: ['./cache-strategy.component.less'],
})
export class CacheStrategyComponent implements OnInit {
  selectedModel: string = '';
  modelList: string[] = [];
  predictData = {};
  loading = true;

  constructor(private service: CacheStrategyService) {}
  ngOnInit(): void {
    this.getModelList();
    this.getPredictData();
  }
  getModelList() {
    this.loading = true;
    this.service.getModelList().subscribe((res) => {
      if (res.code === 200) {
        const $ = res.data.modelList;
        if (Array.isArray($) && $.length > 0) {
          this.modelList = $;
          this.selectedModel = this.modelList[0];
        }
      }
    });
  }
  getPredictData() {
    this.loading = true;
    this.service.getPredictData(this.selectedModel).subscribe((res) => {
      // console.log(res);
      if (res.code === 200) {
        const $ = res.data;
        this.predictData = {
          xAxis: $.xAxis,
          data: $.dataSource,
        };
        if ('moduleList' in $) {
          this.modelList = $.moduleList;
          if (this.selectedModel.length === 0) {
            this.selectedModel = this.modelList[0];
          }
        }
        this.loading = false;
      }
    });
  }
  modelChange(selectedModel: string) {
    if (selectedModel.length > 0) {
      this.getPredictData();
    }
  }
}
