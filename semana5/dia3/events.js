//* addEventListener
//* La forma de JS moderno me permite agregar los eventos de una forma
//* mas legible
const btnPrueba = document.querySelector("#btn-prueba");

function showAlert(icon, title, text) {
  Swal.fire({
    icon,
    title,
    text,
    footer: "<a href='https://google.com'>Link de footer</a>",
  });
}

btnPrueba.onclick = function (event) {
  console.log("click desde el boton");
  console.log(event);
  Swal.fire("Hola mundo");
};

const btnPregunta = document.querySelector("#btn-pregunta");

btnPregunta.onclick = function () {
  Swal.fire("Alguna pregunta", "Aca el texto de la pregunta", "question");
};

const btnError = document.querySelector("#btn-error");

btnError.onclick = function () {
  showAlert("error", "Hubo un error", "Email or Password erroneos");
};

const btnWarning = document.querySelector("#btn-warning");
btnWarning.onclick = function () {
  showAlert("warning", "Hay una alerta de peligro", "El peligro se acerca");
};

const btnSuccess = document.querySelector("#btn-success");
btnSuccess.onclick = function () {
  showAlert("success", "Todo ok", "Todo salio bien");
};

const btnInfo = document.querySelector("#btn-info");
btnInfo.onclick = function () {
  showAlert("info", "Informacion", "Mensaje informativo de mi alerta");
};

const btnalertabotones = document.querySelector("#btn-alerta-botones")
btnalertabotones.onclick = function () {
  Swal.fire({
    title:"alerta",
    text:"Texto de alerta",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText:"guardar",
    denyButtonText:"nel pastel",
  }).then((resultado)=> {
    console.log("resultado",resultado)
    if (resultado.isConfirmed) {
      showAlert("succes", "comfirmado","se confirmo la operacion")
      console.log("marco la confirmacion")
    }

    if (resultado.isDenied) {
      console.log("marco que nel pastel");
    }

    if(resultado.isDismissed) {
      console.log("marco cancel")
    }
  })
}

const btnAlertNotification = document.querySelector("#btn-alerta-notificacion");
// 1000 => 1 segundo
btnAlertNotification.onclick = function () {
  Swal.fire({
    position: "top-end", // top, center, top-start, center-start, center-end, bottom, bottom-start, bottom-end
    icon: "success",
    title: "Notificacion",
    showConfirmButton: false,
    timer: 3000,
  })
}

const urlMarvel =
  "https://comidasperuanas.net/wp-content/uploads/2017/06/Chicharron-de-cerdo.jpg";
const btnAlertaImagen = document.querySelector("#btn-alerta-imagen");
btnAlertaImagen.onclick = function () {
  Swal.fire({
    title: "Imagen",
    text: "Alerta con imagen",
    imageUrl:
      "https://comidasperuanas.net/wp-content/uploads/2017/06/Chicharron-de-cerdo.jpg",
    imageUrl: urlMarvel,
    imageWidth: 300,
    imageHeight: 300,
  });
};

const btnAlertCustom = document.querySelector("#btn-alerta-custom");
btnAlertCustom.onclick = function () {
  Swal.fire({
    title: "Custom Alert",
    text: "Alerta customisable",
    background: `url(${urlMarvel})`,
    color: "#fff",
    backdrop: `
    rgba(0,0,0,0.3)
    url(https://media1.giphy.com/media/zDrQxFFgiiGoU/giphy.gif?cid=ecf05e47dzbtw7kjg18nh6yyp8kczfhbv6bevandbtjql2s1&rid=giphy.gif)
    left top
    no-repeat
    `,
  });
};

const btnAlertInput = document.querySelector("#btn-alerta-inputs");
btnAlertInput.onclick = function () {
  Swal.fire({
    title: "Input para email",
    input: "email",
    inputLabel: "Ingrese su correo",
    inputPlaceholder: "El correo debe ser valido",
  }).then((resultado) => {
    // obtengo el resultado de lo que escribio el usario en el input
    console.log(resultado.value);
  });
};

const paises = document.querySelector("#select-opciones");

// onchange: Sirve para detectar si hay un cambio en mi elemento
paises.onchange = function (event) {
  // de evento quiero obtener el value y options
  const { value, options } = event.target;

  console.log("valor de event", value);
  const index = options.selectedIndex;
  console.log("index", index);
  console.log("texto", options[index].text);
};

// const usuario = {
//   nombre: "Pepe",
//   apellido: "Zapata",
//   edad: 30,
//   direccion: {
//     calle: "Calle falsa",
//     numero: "123",
//     ciudad: "Madrid",
//   },
// };

// // Estoy lo puedo descomponer en una variable
// // Estos es conocido como destructuracion de objetos
// const { nombre, apellido, edad, direccion } = usuario;
// console.log(nombre); // Pepe