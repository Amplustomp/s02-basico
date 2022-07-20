console.log("Hola Como Estas, Soy Sergio")
console.log("Creo que entendí el ejercicio")
console.log("Y esto lo demuestra")

// Importamos nuestro archivo de variables
// *  ==> todos los export dentro del archivo
// xx ==> le asignamos un nombre
// './ts_basicos/variables_let_const'  ==> nombre del archivo
import * as e01 from './01_ts_basico/01_variables_let_const';
import * as e02 from './01_ts_basico/02_arreglos';
import * as e03 from './01_ts_basico/03_funcions';



// Por medio del nombre ==> xx
//  invocamos a la función que se encuentra exportada
e01.ej_01_variables_basicas()

// Invocamos al método del arreglo
e02.ej_02_arreglos()

//  invocamos a la función que se encuentra exportada
e03.ej_03_funciones()