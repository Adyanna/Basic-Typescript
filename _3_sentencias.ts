//IF
//tradicional
if(1==1){
    console.log(true);
}
else{
    console.log(false);
}

//varias condiciones
let a = 4
let b = 3
if (a+b>10){
    console.log("Suma mayor que 10");
}
else if(a+b>20){
    console.log("Suma es mayor a 20");
}
else{
    console.log("Suma es menor a 10");
}

//------------------ OPERADOR TERNEARIO------------------

let resultado = a>b? "'a' es mayor a 'b'":"'b' es mayor a 'a'";
console.log(resultado)


//------ SWITCH

let dia:number=1;

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("martes");
    default:
        console.log("Valor invalido");
        break;
}


//------- FOR
// definir let, solo nos deja ver la variable "i" dentro del ambito del for
// definir var, nos deja ver el valor de "i" fuera del ambito de for
//ITERAR
for(let i=0; i<6 ;i++)
{
    console.log(i);
}
//ARRAY   OF - obtenemos el valor
let array = ['Bol','Arg','CL'];
for (let elemento of array){  //array, tuplas, matrices
    console.log(elemento);
}
//ARRAY IN - obtenemos el inidice numerico
for (let indice in array){  
    console.log(array[indice]);
}


//------- WHILE
let num :number=0;

while (num<10){
    console.log(num);
    num+=1;
}


//------- DO WHILE
let aux=11
do{
    console.log("condicion do while: ",aux);
    aux+=1;
}while(aux<10);


//------------OPERADORES

// and   - &&
// or    - ||
// resto - %
// ARITMETICOS



// EJERCICIOS
//1) hacer la serie de fibonacci


let fibonacci:number=10;
let count:number=2;
let num_fibo:number[] = [0, 1];
while(count<fibonacci){
    num_fibo[count]=num_fibo[count-1]!+num_fibo[count-2]!;// el signo ! indica que no es un valor indefinido
    count++;
} 
console.log(num_fibo);
console.log(num_fibo.length);

//2) Devolver los primeros 100 numeros primos

let cantidad_p:number=100;
let aux_p:number=0;
let count_p:number=0;
while(count_p<cantidad_p){
    if(aux_p%2!=0)
    {
        console.log("numero impares: ",aux_p);
        count_p++;
    }
    aux_p++;
}


//3) hace un menu con swich 

let opcion =1;
switch (opcion) {
    case 1:
        //ejerciicio fibonavi
        break;
    case 2:
        //ejercicio impares
        break;
    default:
        console.log('Opcion no contemplada');
        break;
}