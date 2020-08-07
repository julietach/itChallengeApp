import { Component, OnInit } from '@angular/core';
import {Curso} from '../../models/curso.model'
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
cursos: Curso[]=[];
cargando = false;
  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.cargando=true;
    this.alumnosService.getCursos().subscribe((resp:Curso[])=>{
     this.cursos=resp;
      this.cargando = false;
    });
  }
}
