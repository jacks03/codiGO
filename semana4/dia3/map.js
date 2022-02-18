//* existen  metodos (funciones) que nos permite leer arrays y objeto de una forma sencilla
//* .map este map es un bucle que sirve parfa poder leer arreglos y lo que le hace 
//*especial es que el map retorna un array

const productos = [
    {
        name: "laptop",
        price: 1500,
    },
    {
        name: "celular",
        price: 230,
    },
    {
        name: "monitor",
        peice: 1000,
    }
]

productos.map((producto, index) => {
    console.log("indice", index);
    console.log("products", prodcto.price)
});

const nombres = ["juan", "pedro", "maria", "jose"];

//? el index es el indice qe cada elemento
//! recuerdan que el indice empieza en 0 y por cada se le suma 1
nombres.map((nombre, indicadorcito) => {
    if (indicadorcito > 0) {
        console.log(nombre)
    }
});

//array of objects form products
const places = [
    {
        name: "tecsup",
        location: "san salvador"
    },
    {
        name: "codigo facilito",
        location: "lima",
    },
    {
        name: "platzi",
        location: "bogota",
    },
];

places.map((place) => {
    console.log(place.name);
})

//*veamos el return en el map
const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const operacionProducto = numeritos.map((numerito) => {
    //* el map tiene la propiedad de retornar valores en cada iteracion
    return numerito * 2;
})

// cual es el valor de operationproducto
// {2,4,6..20}
console.log(operacionProducto)

//* reto => quiero modificar el precio al doble
const preciosCyberNow = productos.map((producto) => {
    // en cada vuelta el elemento modificalo por este return
    // producto = {name:"Laptop",price:1500}
    return {
        name: producto.name,
        price: producto.price * 5,
    }

});

console.log("preciosCyberWow", preciosCyberNow)


// creemos un array de numeros y luego calculemos el cubo de cada numero 
// y hay que guardarlo en un a variable

const numeroCuadrados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//como es solo una line se podria usar una funcion inline
const resultado = numeroCuadrados.map((numero) => {
    if (numero % 2 === 0) {
        return Math.pow(numero, 3)
    }
})

console.log(resultado)
//[1,8,27,64,125,216,343,512,729,1000]
const resultado = numeroCuadrados.map((numero) => Math.pow(numero, 3))
console.log(resultado2);

//*escribir un programa que muestre por pantalla la  tabla de multiplicar del 1 al 10.
const imprimirtabla = (numero =>{
    // es instacia esta creando un array vacio con 10 elementos
    const arrayDiez = new Array(10);
    arrayDiez.map((teble, index) =>{
        console.log ("indice", index)
        console.log ("producto", numero * index)
    })
})

imprimir