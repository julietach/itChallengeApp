import { Persona } from '../models/persona.model'
export class Alumno {
    identificador: number;
    idPersona: number;
    legajo: number;
    persona: Persona;

    constructor() {
        this.persona = new Persona();
    }
}
