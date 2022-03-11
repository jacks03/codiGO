//ahora vamos a ver como podemos utilizar la libreria que acabamos de instalar
//! la forma antigua en la cual usabamos una libreria es usando requiere
//* const deteFormat = require("date-format")
//! el nuevo standart es usando import
import format from "date-format";

//luego de importar el format podemos utilizarlo
const fechaActual = new Date()

const fechaFormateada = format.asString("dd-mm-yyyy",fechaActual)
console.log(fechaFormateada)
