import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'valueToText'
})
export class ValueToTextPipe implements PipeTransform {

  transform(value: number | string, enumTypes: { text: string, value: string | number }[]): string {
    let text = '';
    if (enumTypes) {
      enumTypes.forEach(item => {
        if (item.value === value) {
          text = item.text;
          return;
        }
      });
    }
    return text;
  }

}
