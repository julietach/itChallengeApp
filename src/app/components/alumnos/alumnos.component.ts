import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];
  cargando = false;
  legajo: number;
  @Output() alumno = new EventEmitter<Alumno>();
  constructor(private alumnosService: AlumnosService) {

  }

  ngOnInit(): void {
    this.cargando = true;
    this.alumnosService.getAlumnos().subscribe((resp: Alumno[]) => {
      this.alumnos = resp;
      this.cargando = false;
    });
  }
}
