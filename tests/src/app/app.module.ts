import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedias/espias/medicos.component';
import { MedicosService } from './intermedias/espias/medicos.service';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { MedicoService } from './intermedio2/medico/medico.service';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MedicosService,
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
