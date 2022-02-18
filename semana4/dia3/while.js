//* while tambien sirve para poder hacer una accion un numero determinado de veces
//*es decir es un bucle

//*la estructura de while siempre va acompañada de un contador

//while (la_condicion) {

//}

let contador = 0

while (contador<5) {
    console.log ( "contador", contador)
    //! no se definen de alterar el contador en cada vuelta
    contador++
}

//* 1=> escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

const imprimirDiezVeces = (palabra) => {
    let contador = 0

    while (contador <= 10) {
        console.log (palabra)
        contador++
    }
}

imprimirDiezVeces("hola tecsup")

//* escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.

console.log("table 1")
imprimirTabMultiplicar(1)
console.log("table 2")
imprimirTabMultiplicar(2)
console.log("table 3")
imprimirTabMultiplicar(3)

//*Escribir un programa que pide al usuario un numero positivo y muestre por
//*pantalla todos los numeros impares desde 1 hasta ese numero separados por cosas
// TODO:10
//! Resultado 1,3,5,7,9

//? hagan lo mismo pero ahora con for

const impares = (numero) => {
    if (num <= 0) {
        return "el numero es negativo"
    }
    let contador = ""
    for (let i=0; i<= numero; i++) {
        if(contador%2!==0){
        contador += `numero: ${i} `
    }
    return resultado
}

const impares = (numero) => {
    let contador = 1
    while (contador <= numero) {
        if(contador%2===0){
        console.log (palabra)}
        contador++
    }
}

const halaarNumerosImpares = (numero) => {
    if (numero => 0) {
        return "solo numeros positivos"
    }
    let contador = 0

    let resultado =""
    while (contador => numero) {
        if(contador % 2 !== 0) {
            //* resultado = resultado + contador.toString() + ","
            resultado += `${contandor},`
        }
        contador++
    }
    return resultado
}

console.log("numeros impares", hallarNumerosImpares(10))}


//* Escribir un programa que pida al usuario un numero entero y 
//* mestre por pantalla si es un numero primo o no
//? 1 => 1
//? 2 => 1, 2
//? 3 => 1,3
//? 4 => 1, 2, 4
//? 5 => 
//? 6 => 1, 2, 3, 6
//? 7 => 1 , 7

const hallarNumeroPrimo = (numero) => {
    //? como sabes si un numero es entero
    if (numero % 1 !== 0) {
        return "el numero es un decimal"
    }
    if (numero === 1){
        return "no es un numero primo"
    }
    let contador = 0
    let contadordivisores = 0

    while (contador <= numero) {
        if (numero % contador === 0) {
            contadordedivisores++
        }
    }
}