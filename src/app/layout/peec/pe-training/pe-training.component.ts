import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pe-training',
  templateUrl: './pe-training.component.html',
  styleUrls: ['./pe-training.component.less']
})
export class PeTrainingComponent implements OnInit {

  range = [];
  value = 'A-213';
  list = [{id:12, name: '训练集'}, {id:12, name: '测试集'}];
  constructor() { }

  ngOnInit(): void {
  }

}
