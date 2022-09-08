import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fault-forecast',
  templateUrl: './fault-forecast.component.html',
  styleUrls: ['./fault-forecast.component.less']
})
export class FaultForecastComponent implements OnInit {

  selectedModel = null;
  modelData = [];
  list = [{id:12}, {id:12}, {id:12}, {id:12}, {id:12}, {id:12}, {id:12}, {id:12}, {id:12}];
  constructor() { }

  ngOnInit(): void {
  }


  modelChange(event: any) {}
}
