import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disk-status',
  templateUrl: './disk-status.component.html',
  styleUrls: ['./disk-status.component.less']
})
export class DiskStatusComponent implements OnInit {

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
