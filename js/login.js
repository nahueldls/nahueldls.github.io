/* function myFunction() {
    window.location.href = "https://nahueldls.github.io/portada.html"
}
const n = document.getElementById("name");
const e = document.getElementById("email");

function redireccion(){
    if (n.value !="" && e.value !="") {
        myFunction()
    }
}
 1) Llamar a los inputs con DOM
 2) Crear una función de validación
 3) Establecer las condicones
 4) Redireccionar y guardar e.value en localStorage */
 function handleCredentialResponse() {
    location.replace("https://nahueldls.github.io/portada.html")
}

 const e = document.getElementById("email");
 const p = document.getElementById("password");
 const button = document.getElementById("enviar");

  function iniciar() {
    if( e.value !== "" && p.value !== "") {
        localStorage.setItem("email", e.value);
        const email = localStorage.getItem("email");
        window.location.href = "https://nahueldls.github.io/portada.html"
    }
 }

button.addEventListener("click", iniciar);
