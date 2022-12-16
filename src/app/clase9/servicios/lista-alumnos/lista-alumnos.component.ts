import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  constructor(
    private servicio: MiServicioService
  ) { }

  ngOnInit(): void {
    console.log('Lista alumnos: '+this.servicio.obtenerAlumnos());
  }

  ver() {
    alert(this.servicio.contador);
  }

}
