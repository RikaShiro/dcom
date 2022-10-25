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
  constructor(private service: CacheStrategyService) {}

  ngOnInit(): void {
    this.getPredictData()
  }
  getPredictData() {
    this.service.getPredictData().subscribe((res) => {
      if (res.code === 200) {
        console.log(res.data);
        // misspell moduleList -> modelList
        const $ = res.data
        this.modelData = $.moduleList
        this.selectedModel = this.modelData[0]
      }
    });
  }
  modelChange(event: any) {}
}
