import { Persona } from '../models/persona.model'
export class Docente {
    identificador: number;
    idPersona: number;
    legajo: number;
    persona: Persona;

    constructor() {
        this.persona = new Persona();
    }
}
