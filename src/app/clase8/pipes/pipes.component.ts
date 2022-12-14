import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/clase5/alumno';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public miPropiedad = "Curso Angular";
  public alumnos: Alumno[];
  public hover: number;

  constructor() {
    this.alumnos = [
      {
      nombre: 'Jose',
      calificacion: 80
      },
      {
      nombre: 'Juan',
      calificacion: 100
      },
      {
      nombre: 'Pedro',
      calificacion: 50
      }
    ]
  }

  ngOnInit(): void {
  }

}
