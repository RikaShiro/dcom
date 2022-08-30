import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(size: any): string {
    const arr = ['', 'K', 'M', 'G', 'T', 'E'];
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
      if (size / Math.pow(1024, i) < 1) {
        flag = i - 1;
        break;
      }
    }
    return (size / Math.pow(1024, flag)).toFixed(2) + ' ' + arr[flag] + 'B';
  }

}
