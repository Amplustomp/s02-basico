export function ej_03_funciones(){
    console.log("Aquí comienzan los logs del ejemplo_03_funciones ***********************")
    // Se prueba funcion de SUMA
    printSumar()
    printSumarV2()
    printSumarV3()  
    printSumarV4()     // <======================
    printMuti()
}

    function sumar(n1 , n2){
        // dependiendo del los tipos de entrada
        // concatena o suma
        return n1 + n2
    }

    function printSumar(){
        // Observe que utilizamos la misma función
        //   pero con diferentes tipos de objetos
    
        const resultado = sumar(6,9)
        const resultado_2 = sumar('Lili','ana')
        const resultado_3 = sumar('Elune',3)
        const resultado_4 = sumar(90,89)
        const resultado_5 = sumar(resultado_4,resultado_3)  // 82 1072
     
        console.log('resultado 1 : ', resultado)
        console.log("resultado 2 : ",resultado_2)
        console.log("resultado 3 : ",resultado_3)
        console.log("resultado 4 : ",resultado_4)
        console.log("resultado 5 : ",resultado_5)
    }

    // dos parámetros obligatorio
    function sumar_v2(n1:number , n2:number){
    // dependiendo del los tipos de entrada
    // concatena o suma

    return  (n1 + n2)

    //return "el Total es :" + (n1 + n2)
    //return (n1 + n2).toString()
}

function printSumarV2(){
    const resultado_55 = sumar_v2(11,72)
    console.log("resultado 55 v2 : ",resultado_55)
}

// Función que retorna un tipo de objeto 
function sumar_v3(n1:number , n2:number):number{
    // suma y retorna el resultado
    return n1 + n2
}

// Función que testea sumar_v3
function printSumarV3(){
    const resultado_6 = sumar_v3(11,72)
    console.log("resultado 5 v3 : " + resultado_6)
}


// funciona igual que ==> function sumar(n1 , n2)
const sumar_flecha  = (n1, n2) => {
    return n1 + n2
}

const sumar_flecha_v1 =(n1:number, n2:number):number =>{
    return n1 + n2
}

// Función que testea sumar_v4
function printSumarV4(){
    console.log("resultado flecha1 : " + sumar_flecha(11,72))
    console.log("resultado flecha2 : " + sumar_flecha_v1(11,72))
}

// $1 opcional, después no puede venir un no default
// se puede agregar un valor defecto y puede pasar =10
function mulpli(n1:number ,n2?:number , base:number=10):number{
    return n1*base
}

// Testint función multi
function printMuti(){
    const re1 = mulpli(2,3)   // debiera resulta 20
    const re2 = mulpli(2)     // debiera resulta 20
    const re3 = mulpli(2,3,4)  // debiera resulta 8
    
    console.log(re1)
    console.log(re2)
    console.log(re3)
    
    // Probamos sin utilizar variables
    console.log(mulpli(2,3))
    console.log(mulpli(2))
    console.log(mulpli(2,3,4))

    console.log("probemos la funcion del colega : ",mulpli(2,null,9))
}