import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumno } from 'src/app/models/alumno.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  alumno: Alumno;
  constructor(private alumnosService: AlumnosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.alumnosService.getAlumno(id)
        .subscribe((resp: Alumno) => {
          this.alumno = resp;
        });
    } else {
      this.alumno = new Alumno();
    }
  }
  guardar(form: NgForm) { 
   
    if (form.valid) {
      Swal.fire({
        title: 'Espere',
        text: 'Guardando información',
        icon: 'info',
        allowOutsideClick: false
      });
      Swal.showLoading();
      if (this.alumno.identificador !== null && this.alumno.identificador !== undefined) {
        this.alumnosService.updateAlumno(this.alumno).subscribe((resp: Alumno) => {
          Swal.fire({
            title: 'Éxito',
            text: 'Los datos se guardaron correctamente',
            icon: 'success'
          });
        }, (err: any) => {
          Swal.fire({
            title: 'Error',
            text: 'Ocurrio un error al guardar alumno',
            icon: 'error'
          });
        });
      } else {
        this.alumnosService.createAlumno(this.alumno).subscribe((resp: Alumno) => {
          Swal.fire({
            title: 'Éxito',
            text: 'El alumno se registró correctamente',
            icon: 'success'
          });
        }, (err: any) => {
          Swal.fire({
            title: 'Error',
            text: 'Ocurrio un error al guardar alumno',
            icon: 'error'
          });
        });
      }
    }
  }
}
