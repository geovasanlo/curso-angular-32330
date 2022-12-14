import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/clase5/alumno';

@Pipe({
  name: 'alumno'
})
export class AlumnoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): string {
    return args[0] ?
      'Alumno: ' + value.nombre + ' con calificación: ' + value.calificacion :
      value.nombre + ' - ' + value.calificacion;
  }

}
