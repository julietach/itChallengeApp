import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Curso } from 'src/app/models/curso.model';
import { InscripcionCurso } from 'src/app/models/inscripcion-curso.model';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {
  curso: Curso;
  inscripcionCurso: InscripcionCurso[] = [];
  cargando = false;
  constructor(private alumnosService: AlumnosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargando = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.alumnosService.getCurso(id).subscribe((curso: Curso) => {
      this.curso = curso;
      this.cargando = false;
    });
    this.alumnosService.getDetalleCurso(id).subscribe((inscripcion: InscripcionCurso[]) => {
      this.inscripcionCurso = inscripcion;
      this.cargando = false;
    });
  }

}
