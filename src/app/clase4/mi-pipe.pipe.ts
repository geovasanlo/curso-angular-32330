import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return args[0] === 'Mayus' ? value.toUpperCase() : value.toLowerCase();
  }

}
