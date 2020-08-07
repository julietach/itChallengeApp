import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';
import { InscripcionCurso } from 'src/app/models/inscripcion-curso.model';
import { InscripcionCarrera } from 'src/app/models/inscripcion-carrera.model';

@Component({
  selector: 'app-estado-academico',
  templateUrl: './estado-academico.component.html',
  styleUrls: ['./estado-academico.component.css']
})
export class EstadoAcademicoComponent implements OnInit {
  inscripcionesCursosActual: InscripcionCurso[] = [];
  inscripcionesCursosAnteriores: InscripcionCurso[] = [];
  inscripcionesCarrera: InscripcionCarrera[] = [];
  promedioCursosAprobados: any[] = [];
  legajo:string;

  alumno: Alumno = null;
  constructor(private alumnosService: AlumnosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.legajo = this.route.snapshot.paramMap.get('id');
    this.alumnosService.getAlumno(this.legajo).subscribe((alumno: Alumno) => {
      this.alumno = alumno;
      this.alumnosService.getInscripcionesCursoActual(this.legajo).subscribe((resp: InscripcionCurso[]) => {
        this.inscripcionesCursosActual = resp;
      });
      this.alumnosService.getInscripcionesCarrera(this.legajo).subscribe((resp: InscripcionCarrera[]) => {
        this.inscripcionesCarrera = resp;
      });
      this.alumnosService.getInscripcionesCursoAnteriores(this.legajo).subscribe((resp: InscripcionCurso[]) => {
        this.inscripcionesCursosAnteriores = resp;
      });
      this.alumnosService.getPromedioAlumnoPorCarrera(this.legajo).subscribe((resp: any) => {
        this.promedioCursosAprobados = resp;
      });
    });
  }

}
