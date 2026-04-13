/**
 * CLASE ABSTRACTA
 * Una clase abstracta es una plantilla base que no se puede instanciar y obliga a las clases hijas a implementar ciertos métodos.
 */

abstract class Matematicas {
    public x: number;
    public y: number;
    public resultado: number = 0;

    constructor(x1: number, y1: number) {
        this.x = x1;
        this.y = y1;
    }

    abstract operation(): void;

    mostrarResultaodo(): void {

        console.log("El resultado es: ", this.resultado);
    }
}

class Suma extends Matematicas {

    constructor(x1: number, y1: number) {
        super(x1, y1);
    }

    operation(): void {
        this.resultado = this.x + this.y;
    }

}


class Resta extends Matematicas {

    constructor(x1: number, y1: number) {
        super(x1, y1);
    }

    operation(): void {
        this.resultado = this.x - this.y;
    }

}

let unasuma = new Suma(4, 3);
unasuma.operation();
unasuma.mostrarResultaodo();

let unaresta = new Resta(4, 3);
unaresta.operation();
unaresta.mostrarResultaodo();


//----------- METODOS ESTATICOS
/**
 * METODOS ESTATICOS
 * es una propiedad o método que pertenece a la clase y no a sus objetos, por lo que se comparte y se usa sin crear una instancia (new....).
 * Valores constantes
 * Métodos globales relacionados a la clase
 */

class cls_statica {

    //PROPIEDADES
    public dato: string;
    static d_statico: number;

    constructor(d: string) {
        this.dato = d;
    }


    //METODOS
    public cambiar(dato_: string) {
        this.dato = dato_;
        cls_statica.d_statico++;
    }

    static modoEstatico(): void {
        console.log("Hola statico");
    }
}

cls_statica.d_statico = 12; //DAMOS UN VALOR A LA PROPIEDAD ESTATICA
console.log(cls_statica.d_statico);

let st = new cls_statica("Holi");
st.cambiar('hola');
console.log(st)
console.log(cls_statica.d_statico);
cls_statica.modoEstatico(); //LLAMAMOS AL METODO ESTICO


//EJERCICIO PARA MESCLAR TODO

interface Persona {
    nombre: string
    mostrarNombre(): void;
}

interface Casa {
    direccion: string;
    mostrarDireccion(): void;
}

abstract class Empleado implements Persona, Casa {
    nombre: string;
    direccion: string;
    static empresa: string;

    constructor(n: string, d: string) {
        this.direccion = d;
        this.nombre = n;
    }

    abstract datosEmpleado(): void;

    static datosEmpresa(): void {
        console.log("Empresa: ", Empleado.empresa);
    }

    mostrarNombre(): void {
        console.log("El empleado es: ", this.nombre)
    }

    mostrarDireccion(): void {
        console.log("La direccion es: ", this.direccion)

    }
}

class general extends Empleado {

    constructor(n: string, d: string) {
        super(d, n);
    }

    datosEmpleado(): void {
        console.log("Mis datos: ", this.nombre, " ", this.direccion);
    }

}

Empleado.empresa = "Empresa USYMM SRL";
general.datosEmpresa();

let general_ = new general("", "");
general_.direccion = "Calle Loritas, Numero 34";
general_.nombre = "Sebastian Larons";

general_.mostrarNombre();
general_.mostrarDireccion();
general_.datosEmpleado();


/**
 * PRACTICA
 * Definir una interfaz vehiculo que tiene que implementar la clase coche
 * la clase abastracta vehiculoPesado que posteriormente sea implementado 
 * por la clase camion
 * 
 * BUENA PRACTICA, definir interface
 * 
 * 
 * Interface → reglas del juego 🎯 - CONTRADO
 * Abstract → base con lógica compartida 🧱 - BASE REUTILIZABLE
 * Clase final → implementación completa 🚗 - IMPLEMENTACION FINAL
 */

interface vehiculo {
    // cantidadllantas: string;
    velocidad: number;
    peso: number;
    color: string;

    dameVelocidad(): void;
    damePeso(): void;
    dameColor(): void;

}

class coche implements vehiculo {

    velocidad: number;
    peso: number;
    color: string;
    constructor(v: number, p: number, c: string) {
        this.velocidad = v;
        this.peso = p;
        this.color = c;
    }

    dameVelocidad(): void {
        console.log("La velocidad es: ", this.velocidad);
    }
    damePeso(): void {
        console.log("El peso es: ", this.peso);
    }
    dameColor(): void {
        console.log("El color es: ", this.color);
    }
}

let auto = new coche(110, 1222, 'Rojo');
auto.dameVelocidad();
auto.damePeso();
auto.dameColor();

abstract class vehiculoPesado implements vehiculo {

    velocidad: number;
    peso: number;
    color: string;
    numeroRuedas: number;

    constructor(v: number, p: number, c: string, nr: number) {
        this.velocidad = v;
        this.peso = p;
        this.color = c;
        this.numeroRuedas = nr;
    }

    abstract dameNumeroRuedas(): void;

    dameVelocidad(): void {
        console.log("La velocidad es: ", this.velocidad);
    }
    damePeso(): void {
        console.log("El peso es: ", this.peso);
    }
    dameColor(): void {
        console.log("El color es: ", this.color);
    }

}

class camion extends vehiculoPesado {

    constructor(v: number, p: number, c: string, nr: number) {
        super(v, p, c, nr);
    }

    dameNumeroRuedas(): void {
        console.log("Total numero de ruedas: ", this.numeroRuedas);
    }

}

let camionDatos = new camion(123, 2000, 'White', 6);
camionDatos.dameVelocidad();
camionDatos.damePeso();
camionDatos.dameColor();
camionDatos.dameNumeroRuedas();