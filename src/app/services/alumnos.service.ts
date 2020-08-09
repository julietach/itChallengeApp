import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alumno } from '../models/alumno.model';
import { InscripcionCurso } from '../models/inscripcion-curso.model';
import { InscripcionCarrera } from '../models/inscripcion-carrera.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private urlApi: string = environment.apiUrl;
  constructor( public http: HttpClient) { }

  getAlumnos(){
    return this.http.get(this.urlApi+ 'alumnos');
  }
  getAlumno(id:any){
    return this.http.post(this.urlApi+'alumno',{id});
  }
  createAlumno(alumno: Alumno){
    return this.http.put(this.urlApi+'alumno/add',{alumno});
  }
  updateAlumno(alumno: Alumno){
    return this.http.post(this.urlApi+'alumno/update',{alumno});
  }
  getInscripcionesCursoActual(id:any){
    return this.http.post(this.urlApi+'alumno/inscripcionesCursoActual',{id});
  }
  getInscripcionesCursoAnteriores(id:any){
    return this.http.post(this.urlApi+'alumno/inscripcionesCursoAnteriores',{id});
  }
  getInscripcionesCarrera(id:any){
    return this.http.post(this.urlApi+'alumno/inscripcionesCarrera',{id});
  }
  getPromedioAlumnoPorCarrera(id:any){
    return this.http.post(this.urlApi+'alumno/promedioAlumno',{id});
  }
  getCursos(){
    return this.http.get(this.urlApi+ 'cursos');
  }
  getCurso(id:any){
    return this.http.post(this.urlApi+ 'curso',{id});
  }
  getCursosDeCarrera(id:any){
    return this.http.post(this.urlApi+ 'cursosCarrera',{id});
  }
  getDetalleCurso(id:any){
    return this.http.post(this.urlApi+ 'cursos/detalleCurso',{id});
  }
  createIncripcionCurso(inscripcionCurso: InscripcionCurso){
    return this.http.put(this.urlApi+ 'inscripcionCurso',{inscripcionCurso});
  }
  getCarreras(){
    return this.http.get(this.urlApi+ 'carreras');
  }
  createInscripcionCarrera(inscripcionCarrera: InscripcionCarrera){
    return this.http.put(this.urlApi+ 'inscripcionCarrera/create',{inscripcionCarrera});
  }
  getCarrera(idcarrera){
    return this.http.post(this.urlApi+ 'carrera',{idcarrera});
  }
}
