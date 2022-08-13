function myFunction() {
    location.replace("https://nahueldls.github.io/portada.html")
}
const n = document.getElementById("name");
const e = document.getElementById("email");

function redireccion(){
    if (n.value !="" && e.value !="") {
        myFunction()
    } else {
    }
}