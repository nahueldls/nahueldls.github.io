document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});


// const sesion = document.getElementById("Log-out")

// sesion.addEventListener("click", logOut)

// function logOut() {
//     window.location.replace("index.html");
//     nav.innerHTML = ""
//     // localStorage.getItem("email") = ""
// } Esta función debe ir en el init.js ya que el mismo está enlazado a cada archivo html los cuales deben recibir la funcionalidad



