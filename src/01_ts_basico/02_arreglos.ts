export function ej_02_arreglos() {
    console.log("Aquí comienzan los logs del ejemplo_02_arreglos******")

     // Arreglo de any vacio
    // any no es bueno, mejor ser estricto
    let productos = []
    productos.push("Nintendo Switch")
    productos.push(33)
    productos.push(true)
    console.log("productos: ",productos)

    let personas: Array<String> = []
    personas.push("Sergio")
    personas.push("Cortés")
    personas.push("17.117.665-4")
    personas.push("Sexo:M")
    console.log("persona: ",personas)

     // Varios Objetos diferentes
    // Cuando se crea detecta number, String y un arreglo de Nros
    let productos_v1 = [1,2,'Juan',[1,2,3,4,5]]
    productos_v1.push([7634,567,334])
    // Error ya que detecta el tipo de objeto en su creación
    //productos_v1.push([true,false])
    //productos_v1.push(["no funciona","texto"])
    //productos_v1.push(true)
    console.log("productos_v1 :",productos_v1)

    // Tipo String o number
    // Detecta al inicio que existen String y Number
    let productos_nombres_mescla = ['Zapatillas','Televisores','Cafeteras',900]
    productos_nombres_mescla.push(456) // Ahora si
    console.log("productos_nombres_mescla :",productos_nombres_mescla)

    let productos_nombres_objetos:(Boolean|String|number)[] = ['Zapatillas','Televisores','Cafeteras',900]
    productos_nombres_objetos.push(true) // Ahora si
    console.log("productos_nombres_objetos :",productos_nombres_objetos)

    let lNumeros : number[] = [1, 2, 3];
    console.log("listaDeNumeros:",lNumeros)

    //lNumeros.push('a');

    let lNumerosArr: Array<number> = [1, 2, 3];
    console.log("listaDeNumerosArr:",lNumerosArr)


}
