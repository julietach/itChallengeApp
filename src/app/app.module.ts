import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { EstadoAcademicoComponent } from './components/estado-academico/estado-academico.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { InscripcionMateriaComponent } from './components/inscripcion-materia/inscripcion-materia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlumnosComponent,
    AlumnoComponent,
    EstadoAcademicoComponent,
    CursosComponent,
    DetalleCursoComponent,
    InscripcionMateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
