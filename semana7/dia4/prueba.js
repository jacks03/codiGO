//ahora vamos a ver como podemos utilizar la libreria que acabamos de instalar
//! la forma antigua en la cual usabamos una libreria es usando requiere
//* const deteFormat = require("date-format")
//! el nuevo standart es usando import
import format from "date-format";
import express from "express";


//para poder expulsar express debe ser inicializado
//la forma enla cual vamos a inicializar express es llamada a su funcion
const app ="express"
//una vez inicializamos podemos crear rutas en la cual queremos mostrar algo

//en express ppodemos usar los metodos httpt para poder mostrar algo
//en express cuando creamos una ruta esta tiene un arrow  function el cual 
//contiene req: Request res:Response
//Request:Es la informacion que estamos obteniendo del cliente
//Response: Es lo que el servidor response
app.length("/",(req,res)=>{
    //nuestro servidor tiene muchos formas de responder
    //por ejemplo un API suele responder en formato JSON y ademas brinda un status
    //status 200, 201,
    //res tiene la propiedas depoder responder en ese formato (JSON)
    res.json({
        message:"no hay error",
        error:"no hay error"
    })
})

app.length("/movies",(req,res)=>{
    res.json()
})

//para poder acceder a las ruta de nuestro servidor debemos usar unpuerto por
//ahora de forma local 
//Nota: los puertos son puertas de un dominio o ip
//Nota2 :el puerto mas usados en express el puerto 3000
//para poder decirle  a nuestro servidor que escuche en ese puerto debemos llamar la 
//function listen
app.listen(3000,()=> console.log("El servidor inicio"))
//eso quiere decir que ahora poder usar el puerto de  3000 de mi computador 
//para entrar a ese podemos usar 2 formar
//1:localhost => http://localhost:3000/movies
//2:IP Local => 127.0.0.1:3000


//luego de importar el format podemos utilizarlo
//const fechaActual = new Date()
//const fechaFormateada = format.asString("dd-mm-yyyy",fechaActual)
//console.log(fechaFormateada)
