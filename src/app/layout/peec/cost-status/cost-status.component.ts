import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-status',
  templateUrl: './cost-status.component.html',
  styleUrls: ['./cost-status.component.less']
})
export class CostStatusComponent implements OnInit {

  date = 0;
  rangeList = [
    {label: '24 Hours', value: 0},
    {label: '30 Days', value: 1},
    {label: '52 Weeks', value: 2},
  ]
  hasLine = false;
  showLabel = true;
  constructor() { }

  ngOnInit(): void {
  }

}
