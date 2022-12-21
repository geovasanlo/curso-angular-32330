import { Component, OnInit } from '@angular/core';
import { MisDatosService } from '../../sevicios/mis-datos.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  public visible = true;

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }

}
