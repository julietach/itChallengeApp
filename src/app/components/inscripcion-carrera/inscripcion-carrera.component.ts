import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Carrera } from 'src/app/models/carrera.model';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumno } from 'src/app/models/alumno.model';
import { InscripcionCarrera } from 'src/app/models/inscripcion-carrera.model';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-inscripcion-carrera',
  templateUrl: './inscripcion-carrera.component.html',
  styleUrls: ['./inscripcion-carrera.component.css']
})
export class InscripcionCarreraComponent implements OnInit {
  carreras: Carrera[] = [];
  @Input() alumno: Alumno;
  @Output() respuesta = new EventEmitter<InscripcionCarrera>();
  inscripcionCarrera: InscripcionCarrera=new InscripcionCarrera();
  constructor(private alumnosService: AlumnosService, private router: Router,) { }

  ngOnInit(): void {
    this.alumnosService.getCarreras().subscribe((carreras: Carrera[]) => {
      this.carreras = carreras;
    });
  }
  guardarSeleccion(carrera){
    console.log(carrera);
    this.alumnosService.getCarrera(carrera).subscribe((carrera: Carrera) => {
      console.log(carrera);
      this.inscripcionCarrera.carrera=carrera;
    });
  }
  guardar() {
    this.inscripcionCarrera.alumno=this.alumno;
    this.inscripcionCarrera.fechainscripcion=new Date();
    console.log(this.inscripcionCarrera);
    this.alumnosService.createInscripcionCarrera(this.inscripcionCarrera).subscribe((inscripcionCarrera: InscripcionCarrera) => {
      Swal.fire({
        title: 'Éxito',
        text: 'La inscripción se realizó correctamente',
        icon: 'success'
      });
      this.respuesta.emit(this.inscripcionCarrera);
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
    this.respuesta.emit(null);
    });
  }
}
