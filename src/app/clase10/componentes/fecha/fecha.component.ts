import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MisDatosService } from '../../sevicios/mis-datos.service';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit, OnDestroy {

  public fechaObservable: Observable<Date>;
  public usuarios: any[];
  private suscripcion: Subscription;

  constructor(
    public servicio: MisDatosService
  ) { }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.servicio.getAlumnos().subscribe(valores => {
      console.log(valores);
    });

    this.fechaObservable = this.servicio.getFecha();

    this.servicio.usuarios$.subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

}
