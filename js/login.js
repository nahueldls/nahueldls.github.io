function myFunction() {
    location.replace("http://127.0.0.1:5500/portada.html")
}
const n = document.getElementById("name");
const e = document.getElementById("email");

function redireccion(){
    if (n.value !="" && e.value !="") {
        myFunction()
    }
}