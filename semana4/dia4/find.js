//* find, es de la familia,find solo un dato
//* find esparecido filter, recordemos que filter retorna un array mientras que 
//*retorna el primer dato que en la condicion

const edades =[10, 11,22,32,50,34]

edades.find((edad)=> edad >30)
//?recordemos que find retorna un dato
//?en caso find esta buscando en el arreglo edades la edad que sea mayor a 30
//? el primer caso que cumple con esa condicion find termina su ejecucion y devuelve como resultado al numero32

console.log(mayores30);

//find y filter necesitan una condicion si no solo iteran elemento
//? usen find cuando quieran encontrar un solo dato
const finder = edades.find((edad, index) => console.log(edad));

const products2 = [
  { nombre: "Laptop", categoria: "Computo" },
  { nombre: "Licuadora", categoria: "Electro" },
  { nombre: "all in one", categoria: "Computo" },
  { nombre: "refri", categoria: "Electro" },
];

const filtro = products.find((product) => product.categoria === "Computo");
console.log(filtro);

const alumnos = [
  ["Pepe", "Patricia", "Juan", "Luis", "Paco"],
  ["Leonardo", "Armando", "Karina"],
];

//* quiero una funcion que reciba el nombre de un alumno y me diga si existe en lista
const buscarAlumno = (arrayAlumnos, nombre) => {
  // forEach no puede ser detenido, el return o el break no detiene al forEach
  for (let i = 0; i < arrayAlumnos.length; i++) {
    const filtro = arrayAlumnos[i].find((alumno) => alumno === nombre);
    // findIndex es lo mismo que find sin embargo este retorna el indice
    const num = arrayAlumnos[i].findIndex((alumno) => alumno === nombre);
    // si existe
    if (filtro) {
      return num;
    }
  }

  return false;
};

console.log("buscar", buscarAlumno(alumnos, "Juan"));

const laptops = [
    {
      marca: "Lenovo",
      imagen: "https://logo.com",
      nombre: "Ide Centre AIO I3",
      vendedor: "Falabella",
      precioOferta: 1599,
      precioNormal: 3599,
      calificacion: 2,
      caracteristicas: {
        procesador: "i3",
        tarjetaDeVideo: "integrada",
        discoDuro: "1TB",
        discoDuroSolido: "no aplica",
      },
    },
    {
      marca: "Acer",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i5",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
    {
      marca: "Acer 2",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i3",
        tarjetaDeVideo: "GTX 1650",
        discoDuro:"no tiene",
        discoDuroSolido:"256gb",
      }
    }
]
const laptops = laptops.filter(
    (laptops) => 
laptops.caracteristicas.procesador==="i3"&& laptops.preciosOferta < 2000
)

console.log(filterlaptopsi3)

//forEach
//! Crear un nueo array basado en el array laptop y agregar un nuevo atributo llamada
//! vendido sera true ∣∣´false
const arrayLaptops = [];
//!recordemos que el forEach no retorna nada, por lo uso cunado qquiero hacer una accion 
//!pero no necesita esta retorne algo 
laptops.forEach((laptop, index) => {
    //numero % 2 = hallar el residuo de una division 
    //si el residuo es 0 es un par si no es impar
    laptop.vendido = index % 2 === 0 ? true : false;

    arrayLaptops.push(laptop);
});
console.log( arrayLaptops)

//for 
//while
//map
//forEach
//filter
//find
//findIndex

//* POR VER
// for of
// for in
// do while
// flat
// flatMap
// every

// object.entries


console.log("nombreDesdeRepaso", nombreDesdeRepaso);