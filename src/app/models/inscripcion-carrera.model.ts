import {Carrera} from '../models/carrera.model'
import {Alumno} from '../models/alumno.model'
export class InscripcionCarrera {
    fechainscripcion: Date;
    carrera: Carrera;
    alumno: Alumno;
    constructor() {
    }
}
