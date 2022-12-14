import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appRepetir(numero: number) {
    for (var i = 0; i < numero; i++)
      this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
