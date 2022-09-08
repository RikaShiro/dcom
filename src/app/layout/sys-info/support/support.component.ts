import { Component, OnInit } from '@angular/core';
import {downloadFileByUrl} from '../../../common/utils/utils';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.less']
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadFile() {
    downloadFileByUrl('url', '操作手册.doc');
  }
}
