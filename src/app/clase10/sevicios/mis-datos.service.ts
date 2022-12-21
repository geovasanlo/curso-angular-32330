import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, of } from 'rxjs';
import { Alumno } from 'src/app/clase5/alumno';

@Injectable({
  providedIn: 'root'
})
export class MisDatosService {

  public usuarios$: Observable<any[]>;
  private usuarios: BehaviorSubject<any[]>;

  constructor(
    private httpClient: HttpClient
  ) {
    this.usuarios = new BehaviorSubject<any>([]);
    this.usuarios$ = this.usuarios.asObservable();
    this.getusuarios().subscribe(response => {
      this.usuarios.next(response.data);
    });
  }

  public getAlumnos(): Observable<Alumno[]> {
    return of([
      {nombre: 'Juan', calificacion: 50}
    ]);
  }

  public getFecha(): Observable<Date> {
    return interval(1000).pipe(map(_ => new Date()));
  }

  public getusuarios(): Observable<any> {
    return this.httpClient.get(
      'https://reqres.in/api/users?page=2'
    );
  }

  public addUsuario(usuario: any): void {
    const usuarios = this.usuarios.getValue();
    usuarios.push(usuario)
    this.usuarios.next(usuarios);
  }

}
