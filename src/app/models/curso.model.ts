import {Carrera} from '../models/carrera.model';
import {Docente} from '../models/docente.model';
export class Curso {
    identificador: number;
    idCarrera: number;
    nombre: string;
    descripcion: string;
    cupomaximo: number;
    anio: number;
    carrera: Carrera;
    docente: Docente
    constructor() {
        
    }
}
