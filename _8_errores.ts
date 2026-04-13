//CONTROL DE ERRORES

/*
try {
    console.log("Hola mundo TRY");
    let error = { data: "error forzado" };
    throw (error);


} catch (e) {
    console.log("Se produjo un error catch: ", e);
}
finally {

    //se ejecutia se produsca o no un error
    //para cerrar las conexiones, y/o liberar recursos
    console.log("se ejecuta siempre");
}

*/

//EXCEPCIONES
// Una excepción (exception) es un error que ocurre durante la ejecución del programa y que interrumpe su flujo normal.
/*
RangeError -> Ocurre cuando un valor está fuera del rango permitido
    let arr = new Array(-1); // ❌ tamaño inválido

ReferenceError -> Ocurre cuando usas una variable que no existe
    console.log(x); // ❌ x no está definida

SyntaxError -> Error de sintaxis (el código está mal escrito) 
    let = 10; // ❌ sintaxis inválida

TypeError -> Ocurre cuando usas un tipo de dato de forma incorrecta
    let num = 10;
    num.toUpperCase(); // ❌ number no tiene ese método

URIError -> Ocurre cuando hay error en funciones de URL
    decodeURI("%"); // ❌ URI mal formada
*/


//EJERCICIO
//Anadir control de errores 

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
        try {
            console.log("La velocidad es: ", this.velocidad);
            throw new Error("Error de datos");
            
        } catch (error) {
            console.log("La velocidad es: ", error);
        }
    }
    damePeso(): void {
        try {
            console.log("El peso es: ", this.peso);
        } catch (error) {
            console.log("La velocidad es: ", error);
        }

    }
    dameColor(): void {
        try {
            console.log("El color es: ", this.color);
        } catch (error) {
            console.log("La velocidad es: ", error);
        }

    }
}

try {
    let auto = new coche(110, 1222, 'Rojo');
    auto.dameVelocidad();
} catch (error) {
    console.log("La velocidad es: ", error);
}
