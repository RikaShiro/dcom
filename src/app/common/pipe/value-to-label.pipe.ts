import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueToLabel'
})
export class ValueToLabelPipe implements PipeTransform {

  transform(value: number | string, enumTypes: { label: string, value: string | number }[]): string {
    let res = '';
    if (enumTypes) {
      enumTypes.forEach(item => {
        if (item.value === value) {
          res = item.label;
          return;
        }
      });
    }
    return res;
  }

}
