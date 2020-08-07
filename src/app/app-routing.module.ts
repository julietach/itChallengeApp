import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { EstadoAcademicoComponent } from './components/estado-academico/estado-academico.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { InscripcionMateriaComponent } from './components/inscripcion-materia/inscripcion-materia.component';

const routes: Routes = [
  {path: 'alumnos', component: AlumnosComponent},
  { path: 'alumno/:id', component: AlumnoComponent },
  { path: 'estadoAcademico/:id', component: EstadoAcademicoComponent },
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/detalle/:id', component: DetalleCursoComponent},
  {path: 'inscripcionMateria', component: InscripcionMateriaComponent},
  { path: '', pathMatch: 'full', redirectTo: 'alumnos' },
  { path: '**', pathMatch: 'full', redirectTo: 'alumnos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
