import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../alumno';
import { HijoDosComponent } from '../hijo-dos/hijo-dos.component';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css']
})
export class AbueloComponent implements OnInit, AfterViewInit {

  public alumnos: Alumno[] = [
    {nombre: 'Juan', calificacion: 70},
    {nombre: 'Jose', calificacion: 80},
    {nombre: 'Pedro', calificacion: 50}
  ];
  public seleccionado: Alumno;
  @ViewChild(HijoDosComponent, {static: false}) hijoDos: HijoDosComponent;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.hijoDos);
    this.hijoDos.alumno.nombre = 'Ejemplo ViewChild';
    this.hijoDos.sayHello();
  }

  ngOnInit(): void {
    console.log(this.hijoDos); //Mandará undefined
  }

  alumnoSeleccionado(alumno: Alumno) : void{
    this.seleccionado = alumno;
  }

}
