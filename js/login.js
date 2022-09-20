/* function myFunction() {
    window.location.href = "https://nahueldls.github.io/portada.html"
}
const n = document.getElementById("name");
const e = document.getElementById("email");

function redireccion(){
    if (n.value !="" && e.value !="") {
        myFunction()
    } else {
    }
} */

function handleCredentialResponse() {
    location.replace("https://nahueldls.github.io/portada.html")
}

const e = document.getElementById("email");
const p = document.getElementById("password");
const button = document.getElementById("enviar");

function validation() {
    if ( e.value !== "" && p.value !== "") {
        localStorage.setItem("email", e.value);
        const mostra = localStorage.getItem("email")
        location.href = "portada.html"
     }
}
button.addEventListener("click", validation);

console.log(localStorage.getItem("email"))