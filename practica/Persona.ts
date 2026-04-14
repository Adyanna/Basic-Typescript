//crear una clase persona con datos realtivos.

export class persona {
    private _nombre: string;
    private _apellido: string;
    private readonly _fecha_nacimeinto: string;
    private _direccion: string;

    constructor(n: string, a: string, fn: string, d: string) {
        this._nombre = n;
        this._apellido = a;
        this._fecha_nacimeinto = fn;
        this._direccion = d;
    }

    get nombre(): string {
        return this._nombre
    }
    set nombre(val: string) {
        this._nombre = val;
    }

    get f_nac(): string {
        return this._fecha_nacimeinto
    }
    // es readonly no tiene set

    get apellido(): string {
        return this._apellido;
    }
    set apellido(val: string) {
        this._apellido = val;
    }

    get direccion(): string {
        return this._direccion
    }
    set direccion(val: string) {
        this._direccion = val;
    }
}