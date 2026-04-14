import { persona } from "./Persona";

export class Profesor extends persona {

    private _asignaturas: number;

    constructor(n: string, a: string, fn: string, d: string, asig: number) {
        super(n, a, d, fn);
        this._asignaturas = asig;
    }

    get asignaturas(): number {
        return this._asignaturas;
    }
    set asignaturas(val: number) {
        this._asignaturas = val;
    }
}