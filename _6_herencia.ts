/**
 * HERENCIA
 * PARA EVITAR REPETIR CODIGO
 * FAVORECER LA REUTILIZACIN DE CODIGO
 * QUE LAS CLASES HIJAS UTILICEN LAS FUNCIONES DEL PADRE
 * FACILITANDO EL MANTENIMIENTO DE LA APLICACION
 */

//herencia (padre, hijo)
//sobreescribir metodos del padre
//palabra reservada protected: permite usar propiedades o métodos solo dentro de la clase y sus hijas, pero no desde afuera.
//getters and setters: para proyecto grandes y poder organizar e inicializar los valores 
// - Los getters y setters permiten encapsular el acceso a las propiedades, agregando validaciones o lógica al momento de leer o modificar valores.


class clase_padre {

    public texto: string;
    protected dato: number;
    private _nombre: string;
    constructor(s: string, d: number, n: string) {
        this.texto = s;
        this.dato = d;
        this._nombre = n; //setter y getter
    }

    public func_datos() {
        console.log("Funcion de la clase padre ", this.texto);
    }

    //protected solo uso dentro de la clase
    protected func_proc() {

        this.dato = 454765;
        console.log("funcion protegida - ", this.dato);
    }

    //GETTER
    get nombre(): string {
        return this._nombre;
    }

    //SETTER
    set nombre(val: string) {
        this._nombre = val;
    }
}

class clase_hijo extends clase_padre {

    edad: number;
    constructor(n: string, e: number, d: number, nm: string) {
        super(n, d, nm); //lamamos al constructir del clase padre
        this.edad = e;
    }

    muestraedad() {
        console.log("clase hijo ", this.texto, " - ", this.edad);
        this.func_proc();
    }

}

let readVar = new clase_padre("padre", 45, "nombre");
readVar.func_datos();
//readVar.dato=5; //error
//readVar.func_proc(); //error

let hijoname = new clase_hijo('hijo', 30, 23, 'nombre');
hijoname.func_datos();
hijoname.muestraedad();
//hijoname.func_proc(); //error

let prubaserget = new clase_padre('dato', 4, 'nombre seter');
console.log(prubaserget.nombre);
prubaserget.nombre = 'seter nombre';
console.log(prubaserget.nombre);


//--------------------------EJERCICIOS---------------------------------

enum tipo { domentico, salvaje };

class animal {
    private _domestico: boolean;
    private readonly _mesesGestacion: number;

    constructor(d: boolean, mg: number) {
        this._domestico = d;
        this._mesesGestacion = mg
    }

    get domestico(): boolean {
        return this._domestico;
    }

    set domestico(val: boolean) {
        this._domestico = val;
    }

}

class mamifero extends animal {
    protected _capaznadar: boolean;
    constructor(d: boolean, mg: number, cn: boolean) {
        super(d, mg);
        this._capaznadar = cn;
    }
}

class ave extends animal {
    protected _envergaduraAlas: number;
    constructor(d: boolean, mg: number, ea: number) {
        super(d, mg);
        this._envergaduraAlas = ea;
    }
}

class gato extends mamifero {
    private _especie: string;
    constructor(d: boolean, mg: number, cn: boolean, e: string) {
        super(d, mg, cn);
        this._especie = e;
    }
    get capaznadar(): boolean {
        return this._capaznadar;
    }

    set capaznadar(val: boolean) {
        this._capaznadar = val;
    }

    get especie(): string {
        return this._especie;
    }

    set especie(val: string) {
        this._especie = val;
    }
}

let gato_datos = new gato(true,3,true,'angora');
console.log(gato_datos);
gato_datos.especie="persa" ;
console.log(gato_datos);

class aguila extends ave{
     private _numEjem: number;
    constructor(d: boolean, mg: number, en: number, nejem: number) {
        super(d, mg, en);
        this._numEjem = nejem;
    }   

    get evergaduraAlas(): number {
        return this._envergaduraAlas;
    }

    set evergaduraAlas(val: number) {
        this._envergaduraAlas = val;
    }

    get numeroEjemplares(): number {
        return this._numEjem;
    }

    set numeroEjemplares(val: number) {
        this._numEjem = val;
    }
}

let ave_datos = new aguila(false,2,230,2304);
console.log(ave_datos);
ave_datos.numeroEjemplares=3304;
console.log(ave_datos);