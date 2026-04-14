import { persona } from "./Persona";

export class Medico extends persona {

    private _guardia: boolean;
    private _especialidad: string;

    constructor(n: string, a: string, fn: string, d: string, g: boolean, es: string) {
        super(n, a, d, fn);
        this._guardia = g;
        this._especialidad = es;
    }

    get guardia(): boolean {
        return this._guardia;
    }
    set guardia(val: boolean) {
        this._guardia = val;
    }
    get especialidad(): string {
        return this._especialidad;
    }
    set especialidad(val: string) {
        this._especialidad = val;
    }

}