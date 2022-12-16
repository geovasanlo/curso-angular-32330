import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/clase5/alumno';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  public contador = 0;

  constructor(
    private http: HttpClient
  ) { }

  public obtenerAlumnos(): Alumno[] {
    return [
      {
        nombre: 'Juan',
        calificacion: 10
      }
    ];
  }

  public obtenerPersonajes(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

}
