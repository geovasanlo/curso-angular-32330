import { Component, OnInit } from '@angular/core';
import { MisDatosService } from '../../sevicios/mis-datos.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  public contador = 0;

  constructor(
    private misDatos: MisDatosService
  ) { }

  ngOnInit(): void {
    this.misDatos.getFecha().subscribe(_ => {
      this.contador++;
    });
  }

  agregarUsuario() {
    this.misDatos.addUsuario({id: '1000', email: 'email@gmail.com'});
  }

}
