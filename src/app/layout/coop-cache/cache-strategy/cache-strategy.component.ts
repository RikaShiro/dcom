import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cache-strategy',
  templateUrl: './cache-strategy.component.html',
  styleUrls: ['./cache-strategy.component.less']
})
export class CacheStrategyComponent implements OnInit {


  selectedModel = null;
  modelData = [];
  constructor() { }

  ngOnInit(): void {
  }

  modelChange(event: any) {}
}
