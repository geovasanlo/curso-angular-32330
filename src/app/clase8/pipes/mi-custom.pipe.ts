import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miCustomPipe'
})
export class MiCustomPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    switch (args[0]) {
      case '?': 
        value = '¿' + value + '?';
        break;
      case '!':
        value = '¡' + value + '!';
        break;
    }
    switch (args[1]) {
      case 'upper':
        value = value.toUpperCase();
        break;
      case 'lower':
        value = value.toLowerCase();
        break;
    }
    return value;
  }

}
