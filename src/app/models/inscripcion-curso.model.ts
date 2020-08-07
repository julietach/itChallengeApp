import {Curso} from '../models/curso.model'
import {Alumno} from '../models/alumno.model'
export class InscripcionCurso {
    fechainscripcion: Date;
    notafinal: number;
    estado: string;
    curso: Curso;
    alumno: Alumno;
    constructor() {
        this.curso=new Curso();
    }
}
