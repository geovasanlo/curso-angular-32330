import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public personas = ['José', 'Juan', 'Miguel'];
  public bandera = false;
  public valorSwitch: string;
  public hoy = new Date();

  constructor() { }

  verDatos() {
    console.log('Nombre: ', this.nombre);
    console.log('Apellido: ', this.apellido);
  }

  cargarDatos() {
    this.nombre = "Lionel";
    this.apellido = "Messi";
  }
 

  ngOnInit(): void {
  }

  decirHola(): void {
    alert('Hola!!!');
  }

}
