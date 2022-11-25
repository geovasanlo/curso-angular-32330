import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  template: `<h2>Hola mundo</h2>`
})
export class MiSegundoComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
