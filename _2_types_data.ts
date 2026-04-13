
//DECLARACION DE VARIABLES
//Tipos primitivos: string,number,boolean,null, undefined
// Tipos no primitivos: el resto
let numero: number;
let cadena: string;
let bool: boolean;

//ASIGNACION DE VALORES
cadena = "Hola Mundo";
bool = true;
numero = 8;
console.log(cadena);
console.log(numero);

// OTRA FORMA DE ANIADIR VALOR
let nombre: string = "nombre tipo string";
let numero_: number = 123;


//------------------OBJETOS -------------------
// DECLARACION
let casa = {
    calle: "Calle",
    numero: 13,
    portero : false,
    familia:{
        padre:'Juan',
        hijo:'Pedro'
    }
}

console.log(casa);
console.log(casa.numero);

//ASIGNACION DE VARIABLES

casa.calle='Las flores';
// casa.piso= '4to piso'; NO SE PUEDE ANIADIR UN PARAMETRO NO ASIGANDO EN LA CREACION
console.log(casa);

// OTRA FORMA DE ANIADIR VALOR
let casa2:
{
    calle:string,
    numero:number,
    portero:boolean,
    familia:
    {
        padre:string,
        hijo:string
    }
}=
{
    calle:"Calle melaconlia 2",
    numero:45,
    portero:true,
    familia:
    {        
        padre:"Juan",
        hijo:"Pepe"

    }

}


//---------------------- ARRAYS
// DECLARACION
let string_:string[];
let number_:number[];
let cualqueira: any[];

//ASIGNACION DE VALORES
string_=['Ana','Pedro','Rafa'];
number_= [1,2,3,4];
cualqueira = ['Selena',3,4,5,'Sonia',null]

// ARRAY EN OBJETOS

let datos={
    nombre:'Jhon',
    apellido:"Salva",
    direccion:['La Paz','Achachicala','Las Flores',345]
};

//ARRAY EN ARRAY
let objet_array =[string_,number_]


//---------------------TUPLAS
// estructura con datos definidos
// parecen array si no especificamos el tipo de datos

//DECLARACION DE DATOS
let silla:[string,string,string];
type datos=[string,number,string];

// ASIGNACION DE DATOS
let silla2:datos=['stirng',3,'prueba'];
let silla3:["dato","dato",2];

//----------------------ENUM
//conjunto de valores definidos y limitados para una variable.
//existen en typescript, pero no en js

//DECLARACION DE VARIABLE
enum monedas{euro,dolar,yen};
enum animal{anfibio,reptil,ave,pez,mamifero}

//ASIGNACION DE VALOR
let gato =
{
    especie:"Comun",
    edad:7,
    animal:animal.mamifero //valor 4
}



/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/**
 *          ROMPER EL CODIGO
 * El tipo `any` permite no definir un tipo específico.
 * Sin embargo, esto elimina las ventajas de TypeScript,
 * ya que puede introducir errores al no validar los datos.
 *
 * La idea de usar TypeScript es justamente evitar errores
 * mediante el control de tipos.
 */

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////



//ANY - una variable de tipo any puede contener datos de cualquier tipo, en cualquier momento.
//Si nos queremos saltar el tipado
let variasCosas: any[]=['Gato',3,-4.56,true,null,undefined]

//UNION - similar al tipo any pero mas acotado(acepta cierto tipos definidos)
let numeroBol: number|boolean;
numeroBol=4;
numeroBol=true;

let mescla: [number|boolean];
mescla = [true];

//LITERAL - definimos el valor, sin poder cambiar ya que lo toma como tipo de dato.

let animalp:'gato';
//animalp='perro'// no funciona