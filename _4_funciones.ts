
//FUNCIONES

// function nombre(parametros):tipo de valor a devolver
//number,string,boolean, void (para no tener que devolver nada)

function sumar(a: number, b: number): number {
    return a + b;
}

console.log(sumar(9, 9));

function fibonacci(longitud: number): number[] {
    let count: number = 2;
    let num_fibo: number[] = [0, 1];
    while (count < longitud) {
        num_fibo[count] = sumar(num_fibo[count - 1]!, num_fibo[count - 2]!);
        count++;
    }
    return num_fibo;
}

console.log(fibonacci(16));



//FUNCIONES ANONIMAS - funciones flecha, lambda
// =>(parametros){cuerpo funcion} , evitamos llamar la palabra funcion

let suma = (a: number, b: number): number => { return a + b };
let fibonacci_f = (long: number): number[] => {
    let count: number = 2;
    let num_fibo: number[] = [0, 1];
    while (count < long) {
        num_fibo[count] = sumar(num_fibo[count - 1]!, num_fibo[count - 2]!);
        count++;
    }
    return num_fibo;
};

console.log("suma anonima: ",suma(4,5));
console.log("Fibonaci anonimo: ",fibonacci_f(6));

//FUNCION QUE RETORNAN ERROR, TIPO NEVER
// Representa valores que nunca va a suceder
// entramos en un bucle infinito ya que se declara como una funcion "never", nunca tiene respuesta, esto se muestra en la funcion flecha, pero en el tradicional se muestra como "void"

//DA ERROR
//let f_tipoNever = (cad:string):never=>{while(true);} 
// let lanzaError = (txt:string)=>{throw new Error(txt);}
// lanzaError("data");


//FUNCIONES COMO TIPOS
console.log("FUNCION COMO TIPOS");
function multiple(a:number,b:number):number
{
    return a*b;
}
//guardamos la funcion en una variable
let asigmultiplicar=multiple;
// podemos definir que tipo de funcion queremos asignar
let asigmul_conPam:(a:number,b:number)=>string;
let fibo_var:(a:number)=>number[];
fibo_var=fibonacci;

console.log(asigmultiplicar(3,4));
console.log(fibo_var(5));


//FUNCIONES CALLBACK
//funciones que pasan como parametro a otra funcion

console.log("FUNCIONES CALLBKAC");

//se puede declara en las variables
function operacion(x:number,y:number,func:(v1:number,v2:number)=>number):number{
    return func(x,y);
}

//o llamar por fuera con type
type fun_ope=(v1:number,v2:number)=>number;
function operacion_2(x:number,y:number,func:fun_ope):number{
    return func(x,y);
}


console.log(operacion(4,5,suma));
console.log(operacion(5,7,(x:number,y:number)=>{return y*x}));


//GENERICOS

function identidad<Type>(objeto:Type):Type {
    return objeto;
}

let v1 = identidad("hola");
console.log(v1);

let v2 = identidad<number>(10238);
console.log(v2);

