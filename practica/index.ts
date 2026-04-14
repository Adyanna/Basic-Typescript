import { Medico } from "./Medico";
import { Profesor } from "./Profesor";

let opcion = 2;

try {
    switch (opcion) {
        case 1:
            //CLASE MEDICO
            let m = NuevoMedico('Alejandro', 'Cacazas', '18/01/1990', 'Calle Loras Nro 243', false, 'Odontologia');
            MostrarMedico(m);
            break;
        case 2:
            //CLASE PROFESOR
            let p = new Profesor('Roberto', 'Rodrigues', '10/11/2000', 'Calle Kantutas Nro 382', 4);
            MostrarProfesor(p);
            break;
        case 3:
            //FACTORIAL
            factorial(10);
            break;
        default:
            console.log("Valor no valido.")
            break;
    }
} catch (error) {
    console.log("Error: ",error)
}



function NuevoMedico(n: string, a: string, fn: string, dir: string, g: boolean, esp: string): Medico {
    return new Medico(n, a, fn, dir, g, esp);
}

function MostrarMedico(m: Medico) {
    console.log("Doctor: ", m.nombre, ' ', m.apellido, ' Especialidad: ', m.especialidad);
}

function MostrarProfesor(p: Profesor) {
    console.log("Doctor: ", p.nombre, ' ', p.apellido, 'Total Asignaturas: ', p.asignaturas);
}

function factorial(n: number) {
    let f = 1;
    for (let x = 2; x < n; x++) {
        console.log(' ', f = f * x)
    }
}