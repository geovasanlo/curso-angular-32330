import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Alumno } from 'src/app/clase5/alumno';

@Directive({
  selector: '[appMiPropiaDirectiva]'
})
export class MiPropiaDirective implements OnInit {

  @Input('alumno') alumno: Alumno;
  @Input('weight') weight: string;
  @Input('colorNombre') colorNombre: string;

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if (!this.alumno) return;
    if (this.alumno.calificacion >= 70) {
      this.renderer.setStyle(
        this.elemento.nativeElement,
        'color',
        'blue'
      );
      return;
    }
    this.renderer.setStyle(
      this.elemento.nativeElement,
      'color',
      'red'
    );
    this.renderer.setStyle(
      this.elemento.nativeElement,
      'font-weight',
      this.weight
    );
  }

}
