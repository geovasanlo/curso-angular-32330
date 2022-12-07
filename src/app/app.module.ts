import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './clase1/mi-primer-componente/mi-primer-componente.component';
import { MiSegundoComponenteComponent } from './clase1/mi-segundo-componente/mi-segundo-componente.component';
import { InterpolacionComponent } from './clase4/interpolacion/interpolacion.component';
import { MiDirectivaDirective } from './clase4/mi-directiva.directive';
import { MiPipePipe } from './clase4/mi-pipe.pipe';
import { AbueloComponent } from './clase5/abuelo/abuelo.component';
import { HijoUnoComponent } from './clase5/hijo-uno/hijo-uno.component';
import { HijoDosComponent } from './clase5/hijo-dos/hijo-dos.component';
import { NietoUnoComponent } from './clase5/nieto-uno/nieto-uno.component';
import { FormulariosComponent } from './clase6/formularios/formularios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjemplosMaterialComponent } from './clase7/ejemplos-material/ejemplos-material.component';
import { MaterialModule } from './modulos/material.module';
import { ModalComponent } from './clase7/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiSegundoComponenteComponent,
    InterpolacionComponent,
    MiDirectivaDirective,
    MiPipePipe,
    AbueloComponent,
    HijoUnoComponent,
    HijoDosComponent,
    NietoUnoComponent,
    FormulariosComponent,
    EjemplosMaterialComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
