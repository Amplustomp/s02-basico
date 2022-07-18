// Recordar que export nos permite que la 
// función sea invocada desde fuera este archivo
export function ej_01_variables_basicas() {
    console.log('Hola Sergio!JUAJUAJUAJUA Es mucho mejor risa');

    // Invocamos la función
    variables_tipo_por_asignacion()         // <=============================================

     // Invocamos la función
     variables_tipo_declarado()          //<<<=================================

    // Invocamos la función
    mi_propio_tipo()         //<<<<=============================

          // Invocamos la función
    ambitoVariable()         //<<<<=============================
}

// let     ==> Variable que puede cambiar en el tiempo
// const   ==> constante

// Creamos Variables dependiendo del dato asignado
// Observe que no hay export, por lo cual es local
function variables_tipo_por_asignacion(){
    const IVA = 19.8
    // Variable Numérica
    let edad = 33
    // Variable String
    let nombre = "Sergio"
    let apPaterno = "Cortes"

    // podemos concatenar variables string
    let nombreCompleto = nombre + " " + apPaterno

    console.log("edad     :",edad)
    console.log("edad * 3 :",edad * 3)
    console.log("nombre   :",nombre)
    //console.log("nombre * 3 :",nombre * 3) <== no se puede
    console.log("paterno  :",apPaterno)
    console.log("nombreCompleto :",nombreCompleto)
}

function variables_tipo_declarado(){
    // Constante tipo numérico con decimal
    const IVA:number = 19.8

    // Variable tipo String
    let apPaterno:String = "Cortés"
    const apMaterno:String = "Pérez"

    // Variable numéricas
    let edad:number = 33

    // Permite ambos tipos de objetos  <<<<<<=========
    let edadSt:number| String = 33
    console.log("Variable inicial [edadSt]: ",edadSt)
    let edat_sumar =  edadSt + 234
    edadSt = "prueba de texto"
    console.log("Variable cambió [edadSt]: ",edadSt)
    //let edat_sumar_texto_error =  edadSt + 234
    let edat_sumar_texto =  edadSt + " 234"
    let esMujer:Boolean = false

    // Any la variable puede ser de cualquier tipo
    let variableDeCualquierTipo: any = 10;
    console.log("Cualquier Tipo 10 : ", variableDeCualquierTipo)
    variableDeCualquierTipo = "20 corazones rotos";
    console.log("Cualquier Tipo 20 : ", variableDeCualquierTipo)


    // Revisamos todos los valores
    console.log("apPaterno : ", apPaterno)
    console.log("apMaterno : ", apMaterno)
    console.log("edad : ", edad)
    console.log("IVA : ", IVA)
    console.log("edadSt : ", edadSt)
    console.log("esMujer : ", esMujer)
    console.log("edat_sumar_texto : ", edat_sumar_texto)
    console.log("edat_sumar : ", edat_sumar)
}
    // Definiendo nuestro propio tipo
function mi_propio_tipo(){
    // Definiremos un tipo 
    type cedulaIdent = string| number|boolean;
    // Creamos nuestra variable del tipo recien creado
    // Observe que nuestro tipo acepta tres tipo diferente
    let numeroCedula: cedulaIdent = 'DNSUYUE-4';
    numeroCedula = false;
    numeroCedula = 171176654;
    console.log("numeroCedula : ",numeroCedula)
}

function ambitoVariable(){
    // Nivel 0
    let nroGral = 1
    {// Nivel 1
        let nroGral = 10
        {// Nivel 2
            let nroGral = 101
            {// Nivel 3
                let nroGral = 1010
                let varNiv3 = 300
                console.log(" nro Nivel 3: ", nroGral)
                console.log(" varNiv3 Nivel 3: ", varNiv3)

            }
            // Error no existe afuera del las llaves que la contienen
            //console.log(" varNiv3 Nivel 3: ", varNiv3)
            console.log(" nro Nivel 2: ", nroGral)
        }
        console.log(" nro Nivel 1: ", nroGral)
    }
    console.log(" nro Nivel 0: ", nroGral)
}