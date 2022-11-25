import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './clase1/mi-primer-componente/mi-primer-componente.component';
import { MiSegundoComponenteComponent } from './clase1/mi-segundo-componente/mi-segundo-componente.component';
import { InterpolacionComponent } from './clase4/interpolacion/interpolacion.component';
import { MiDirectivaDirective } from './clase4/mi-directiva.directive';
import { MiPipePipe } from './clase4/mi-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiSegundoComponenteComponent,
    InterpolacionComponent,
    MiDirectivaDirective,
    MiPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
