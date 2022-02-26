const crear = document.querySelector("#crear-session")
const obtener = document.querySelector("#obtener-session")
const eliminar = document.querySelector("#eliminar-session")

crear.onclick = function() {
    //para poder crear variable en session storage invocamos a session
    sessionStorage.setItem(
        "variable_1",
        "mi primera variable en session storage"
    )
}

obtener.onclick = function () {
    const variable = sessionStorage.getItem("variable")
    console.log(variable)
}

eliminar.onclick = function () {
    sessionStorage.removeItem("variable_1")
}
