function myFunction() {
    location.replace("C:\Users\PC\Documents\GitHub\nahueldls.github.io\portada.html")
}
const n = document.getElementById("name");
const e = document.getElementById("email");

function redireccion(){
    if (n.value !="" && e.value !="") {
        myFunction()
    }
}