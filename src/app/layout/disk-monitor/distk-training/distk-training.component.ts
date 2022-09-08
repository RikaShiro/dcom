import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distk-training',
  templateUrl: './distk-training.component.html',
  styleUrls: ['./distk-training.component.less']
})
export class DistkTrainingComponent implements OnInit {

  range = [];
  value = 'A-213';
  constructor() { }

  ngOnInit(): void {
  }

}
