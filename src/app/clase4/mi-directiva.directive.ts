import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) {
    renderer.setStyle(elemento.nativeElement, 'color', 'blue');
  }

}
