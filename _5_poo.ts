//CLASES
//planilla para crear objetos que cuentan con sus definicion de propiedades(datos), contructores(inicializa el objeto) y funciones

enum Especie { angora, meztizo, siames, persa }

class gato {
    nombre: string;
    edad: number;
    especie: Especie;

    constructor(n: string, e: number, esp: Especie) {
        this.nombre = n;
        this.edad = e;
        this.especie = esp;
    }

    showgato() {
        console.log("Nombre: ", this.nombre, " edad: ", this.edad, " especie es: ", Especie[this.especie]);
    }
}

//mygato es un objeto
let mygato = new gato('Chavelo', 12, Especie.meztizo);
mygato.showgato();


//CLASES GENERICAS

class  numeroGenerico<Numtype>{
    valor:Numtype;
    agregar:(x:Numtype,y:Numtype)=>Numtype;
    constructor(v:Numtype,agregar_:(x:Numtype,y:Numtype)=>Numtype){
        this.valor=v;
        this.agregar=agregar_;
    }
}

let resultado_gen = new numeroGenerico<number>(3,function(x,y){return x+y;});
console.log('RESULTADO ANONIMO',resultado_gen.agregar(4,5));

let resultado_str = new numeroGenerico<string>("",function(x,y){return x+y;});
resultado_str.valor='primero';
console.log('RESULTADO ANONIMO string',resultado_str.agregar(resultado_str.valor,' segundo'));

//INTERFACES  //herencia de parametros y funciones que debe tener una clase
// contrato que dice qué propiedades y tipos debe tener algo
//Una interfaz define cómo debe ser un objeto, obligando a cumplir una estructura.

//datos en comun de la clase
interface animal {
    nombre: string,
    edad: number,
    datos(): void
}

//definimos nuestra clase con la interface
class perro implements animal {
    nombre: string;
    edad: number;

    //? - indica como no obligatorio, lo que nos permite solo declara la case sin enviar datos
    constructor(n?: string, e?: number) {
        this.nombre = n ?? "";
        this.edad = e ?? 0;
    }

    datos(): void {
        console.log("mi perro se llama ", this.nombre, ' y tiene ', this.edad, ' anios.');
    }
}

let myperro = new perro();
myperro.edad = 12;
myperro.nombre = 'Neron';
myperro.datos();


//---------------- TIPOS ---------------

type animal_t = {
    nombre: string;
    edad: number;
    datos(): void;
}

let jirafa: animal_t = {
    nombre: "Sel",
    edad: 23,
    datos(): void {
        console.log("mi nombre ", this.nombre);
    },
}

jirafa.datos();


//EJERCICIO


class calculos {

    longitud: number;
    constructor(l: number) {
        this.longitud = l;
    }
    //1) hacer una serie de fibonaci en ts
    fibonaci(): number[] {
        let num_fibo: number[] = [0, 1];
        let count: number = 2;
        while (count < this.longitud) {
            // console.log();
            num_fibo[count] = num_fibo[count - 1]! + num_fibo[count - 2]!;
            count++;
        }
        return num_fibo;
    }
    //2) Deolver los primeros 100 numeros impares
    numerosParesImpares(pares: boolean): string {

        let resultado: string;
        resultado = "";
        let aux_p: number = 0;
        let count_p: number = 0;
        let rest = 1;
        if (pares)
            rest = 0;

        while (count_p < this.longitud) {
            if (aux_p % 2 === rest) {
                resultado += " " + aux_p;
                count_p++;
            }
            aux_p++;
        }
        return resultado;
    }
}


let fibo = new calculos(12);
let pares = new calculos(50);

let opcion_ = 3;

switch (opcion_) {
    case 1:
        console.log(fibo.fibonaci());
        break;
    case 2:
        console.log(fibo.numerosParesImpares(true));
        break;
    case 3:
        console.log(fibo.numerosParesImpares(false));
        break;
    default:
        console.log('Valor no valido.');
        break;
}



//-------------------- PALABRA RESERVADA THIS------------------------------------

let imprimir = function (cad1:string, cad2:string) {
    return {
        nombre: cad1,
        devuelveCadena: function () { console.log(this.nombre); },
        nombre2:
        {
            nombre:cad2,
            devuelveCadena:function(){console.log(this.nombre);}
        }
    };
};

let aux = imprimir("Adri","Ana");
aux.devuelveCadena();
aux.nombre2.devuelveCadena();


// PALABRAS RESERVADAS PUBLIC/PRIVATE
// se puede inficar que los parametros o funciones sin publicas o privadas
// en caso que no se coloque ninguno, el valor por defecto es publico

class objeto_m{

    //FORMA TRADICIONAL DE DEFINIR LOS PARAMETROS

    // public texto:string;
    // constructor(s:string){
    //     this.texto = s;
    // }

    //OTRA FORMA DE DEFINIR

    constructor(public texto:string){
    }

    public func_datos(){
        console.log(this.texto);
    }
}

let da=new objeto_m("texto neuvo");
da.func_datos();


//PABRA SOLO LECTURA / READONLY


class objeto_R{

    public texto:string;
    public readonly nombre:string;
    public readonly apellido:string;
    constructor(s:string,a:string){
         this.texto = s;
         this.nombre ="dato solo de lectura";
         this.apellido=a;
     }

    public func_datos(){
        console.log(this.texto,' - ',this.nombre," ",this.apellido);
    }
}

let readVar=new objeto_R("texto neuvo",'apaza');
readVar.func_datos();
