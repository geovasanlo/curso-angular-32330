import { Component, OnInit } from '@angular/core';

class Persona {
  public nombre: string = 'Default';
  public edad: string;
  decirHola = () => {
    console.log("Hola!!");
  };
}

interface Alumno {
  fechaIngreso: Date;
  genero: string;
}

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit {

  public miPersona: Persona;
  public miAlumno: Alumno;

  constructor() {
    this.miPersona = new Persona();
    this.miAlumno = {
      fechaIngreso: new Date(),
      genero: 'M'
    };
  }

  ngOnInit(): void {
    this.miPersona.decirHola();
    this.miPersona.nombre;
  }

}
