//? un objeto es una entidad independiente aora, este tiene propiedades y atributos

//* Atributos de un carro
//! numero de puertaS
//! COLOR 
//! placa
//! motor
//! cilindro
//! Hp

//? UN OBJETO ESTA COMPUESTO POi un key (llave) y un value(valor)

//? creemos el objeto carro

//! primera forma

const carro = {
    color:"azul",
    motor: 1.2,
    modelo:"gtr",
    marcar:"nissan",
    nuevo:true,
}

//? objeto persona
const persona = {
    edad:30,
    nombre:"juanito",
    sexo: "Masculino",
    talla:1.75,
    estadoCivil:"soltero",
    mayorEdad: true,
    donantedeorganos: true,
    dni:"7777373" ,
    tatuajes:true,
    nacionalidad: "peruano"
}

//?como cree que puede que puedo accede al atributo nombre
console.log("nombre", persona .nombre)
console.log("DNI",persona.DNI)

//? creen pueda agregar mas atributos?
//esto es una forma de agregar un elemento a un objeto
//! mejor es usar esta forma
persona.celular = "999-999-999"

console.log(persona)

//!  2da forma de agragar un elemento
//? quiero la profesion de una persona
personal["profesion"] = "ingeniero"

console.log ("persona con profesion", persona)

//? creando objeto de la forma antigua
//? instacion a la clase object
//? la clase object en JS es una clase la cual permite decir que esta variable sera unobjeto

const casa = new Object ()
casa["color"] = "rosada"
casa.pintura = "negro"

console.log ("casa", casa)

//! 3ra forma de creer un objeto
const laptop = new Object()
modelo = "macbook pro"
peso = 2.5
color = "gris"
ram ="16gb"
memoria = 512

 //create object phone using new object
 //laptop[color] = "gris"
const phone = new Object()

console.log("laptop", laptop)

//creemos un objeto para celular
const celular = {
    model: "iphone 11",
    flexible: false ,
    tamaño:6.1,
    gama :"alta",
    color: "gris",
    camaras: 2,
    precio: "$ 700",
}

//como puedo cambiar el valor de atributo?
celular.camaras = 4
celular.camaras = "128"

console.log("ceñlular")

// quiero crear una funcion la cual me entormne el nombre la memoria y precio del celular
const mostrarDetalleCelular = (celular) => {
    return `el modelo es ${celularObjeto.modelo} y tiene ${celularObjeto.memoria} de espacio a tan solo ${celularobjeto.precio}`
}

console.log("objeto celular", mostrardetallecelular(celular))

//? destructuracion de objetos
const mostrarDetalleCelular2 = (celularObjeto) => {
    const {modelo,memoria, precio} = celularobjeto
    return `el modelo es ${modelo} y tiene ${memoria} de espacio a tan solo ${precio}`
}

console.log("objeto celular2" , mostrarDetalleCelular2(celular))

//creemos el objeto usuario 
const usuario = {
    nickname:"loquitoprogramador01",
    email:"loquiQgmail.com",
    password:"******",
    carnetvacunacion:true,
    location: "peru",
    level: "pro",
    edad:18
}

//? creen una funcion la cual me valide si el usuario es de peru
//? si es de peru impriman su nickname junto a su nivel,
//? si no es de peru impriman "oye tu nnickname eres peruano"

const validarAlUsuario = (usuario) => {
    const {nickname,location, level} = usuario
    return location === "perú" 
    ? `${nickname} eres ${level}`
    : "oye tu eres chileno"
} 