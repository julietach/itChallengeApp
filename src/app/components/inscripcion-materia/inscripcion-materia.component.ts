import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { InscripcionCurso } from 'src/app/models/inscripcion-curso.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { InscripcionCarrera } from 'src/app/models/inscripcion-carrera.model';
import { Carrera } from 'src/app/models/carrera.model';

@Component({
  selector: 'app-inscripcion-materia',
  templateUrl: './inscripcion-materia.component.html',
  styleUrls: ['./inscripcion-materia.component.css']
})
export class InscripcionMateriaComponent implements OnInit {
  legajo: number;
  carrerasAlumno: InscripcionCarrera[];
  cursos: Curso[];
  inscripcionCurso: InscripcionCurso = new InscripcionCurso();
  alumnoEncontrado = true;
  inscribirseCarrera: boolean;
  inscripcionCarrera: InscripcionCarrera=new InscripcionCarrera();
  carreras: Carrera[];

  constructor(private alumnosService: AlumnosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscripcionCurso = new InscripcionCurso();
  }
  buscarAlumno(legajo: number) {
    this.alumnosService.getAlumno(legajo).subscribe((resp: Alumno) => {
      this.inscripcionCurso.alumno = resp;
      if (!this.inscripcionCurso.alumno) {
        this.alumnoEncontrado = false;
      }
      this.alumnosService.getInscripcionesCarrera(this.inscripcionCurso.alumno.legajo).subscribe((carrerasAlumno: InscripcionCarrera[]) => {
        this.carrerasAlumno = carrerasAlumno;
      });
    });
  }
  buscarCursos(carrera) {
    this.alumnosService.getCursosDeCarrera(carrera).subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
  }
  guardarInscripcionMateria(form: NgForm) {
    if (form.valid) {
      Swal.fire({
        title: 'Espere',
        text: 'Guardando información',
        icon: 'info',
        allowOutsideClick: false
      });
      Swal.showLoading();
      this.inscripcionCurso.estado = 'EN CURSO';
      this.inscripcionCurso.fechainscripcion = new Date();
      this.alumnosService.createIncripcionCurso(this.inscripcionCurso).subscribe(resp => {
        Swal.fire({
          title: 'Éxito',
          text: 'La inscripción se realizó correctamente',
          icon: 'success'
        });

      }, (err: any) => {
        if (err.status === 409) {
        Swal.fire({
          title: 'Error',
          text: 'El curso ya alcanzó el cupo máximo',
          icon: 'error'
        });
      } if (err.status === 401) {
        Swal.fire({
          title: 'Error',
          text: 'El alumno ya se encuentra inscripto a esa materia',
          icon: 'error'
        });
      }
      });
    }
  }
  getCarreras(){
    this.inscribirseCarrera=true;
      this.alumnosService.getCarreras().subscribe((carreras: Carrera[]) => {
      this.carreras = carreras;
    });
  }
  guardarSeleccion(carrera){
    this.alumnosService.getCarrera(carrera).subscribe((carrera: Carrera) => {
      this.inscripcionCarrera.carrera=carrera;
    });
  }
  guardarInscripcionCarrera() {
    this.inscripcionCarrera.alumno=this.inscripcionCurso.alumno;
    this.inscripcionCarrera.fechainscripcion=new Date();
    this.alumnosService.createInscripcionCarrera(this.inscripcionCarrera).subscribe((inscripcionCarrera: InscripcionCarrera) => {
      this.carrerasAlumno.push(this.inscripcionCarrera);
      Swal.fire({
        title: 'Éxito',
        text: 'La inscripción se realizó correctamente',
        icon: 'success'
      });
      this.buscarAlumno(this.inscripcionCarrera.alumno.legajo);
    }, (err: any) => {
      if (err.status === 409) {
      Swal.fire({
        title: 'Error',
        text: 'El alumno ya se encuentra inscripto a la carrera',
        icon: 'error'
      });
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Error al registrar inscripcion',
        icon: 'error'
      });
    }
    });
  }
}
