import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css']
})
export class AbueloComponent implements OnInit {

  public alumnos: Alumno[] = [
    {nombre: 'Juan', calificacion: 70},
    {nombre: 'Jose', calificacion: 80},
    {nombre: 'Pedro', calificacion: 50}
  ];
  public seleccionado: Alumno;

  constructor() { }

  ngOnInit(): void {
  }

  alumnoSeleccionado(alumno: Alumno) : void{
    this.seleccionado = alumno;
  }

}
