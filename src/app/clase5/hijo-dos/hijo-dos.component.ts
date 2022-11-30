import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-hijo-dos',
  templateUrl: './hijo-dos.component.html',
  styleUrls: ['./hijo-dos.component.css']
})
export class HijoDosComponent implements OnInit {

  alumno: Alumno = {
    nombre: 'Ed', calificacion: 100
  }

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(): void {
    alert(this.alumno.nombre + ' dice Hola!');
  }

}
