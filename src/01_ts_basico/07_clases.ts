export function xxx(){console.log("Clases")

// Revisamos el resultado
console.log("iPersona:",iPersona)
console.log("primea persona",p1)

}

// Creamos una interface
interface Cliente{
    rut:17117665; // Valor por obligacion
    dv:String;
    nombres:String;
}

// Creamos una estructura por medio de la interfaz
const iPersona:Cliente={
    rut:17117665, // No puedo cambiar el original
    dv:'4',
    nombres:'Sergio Cortés'

}

//****************************************** */
// Clase Persona
//Private, Public, Protected
class PersonaV10 {
    // si coloco los accesos(public ,private,protected) las variables 
    // pasan a ser de las clases
    // Signo de Pregnta => opcional
    // Constructor inicia automáticamente
    constructor( 
        public nombre: string, 
        public direccion?: string  //$2 signo de Pregunta
    )  {
        // Se ejecuta cuando se realiza un new
        console.log("Persona v10:",nombre,direccion)
    }
    
}

const p1 = new PersonaV10('Sergio', 'Cortes  nnnn');
