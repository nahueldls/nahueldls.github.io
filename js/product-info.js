//Usando API fetch
const id_products = localStorage.getItem("productID");
const lista_de_productos = await fetch(`https://japceibal.github.io/emercado-api/products/${id_products}.json`)
.then(response => response.json())
console.log(lista_de_productos);

// console.log(lista_de_productos.images[0])
let contenedor_div = document.getElementById("producto");
let for_images = document.getElementById("for_images");
// console.log(lista_de_productos)

function showcontent(array_list) {
    let content = ""

     content = `
     <h1 class="p-4" style=" display: inline;">${array_list.name}</h1> <button id="carrito" class="btn btn-primary btn-lg" type="submit" style=" margin: 50px 0 50px 500px;">Comprar</button> <hr class="mb-4">
     <h3>Precio</h3>
     <p>${array_list.currency}-${array_list.cost}</p>
     <h3>Descripción</h3>
    <p>${array_list.description}</p>
     <h3>Categorías</h3>
     <p>${array_list.category}</p>
     <h3>Cantidad de vendidos</h3>
     <p>${array_list.soldCount}</p>
     <h3>Imágenes ilustrativas</h3>`

     contenedor_div.innerHTML = content
}

showcontent(lista_de_productos)

 function images() {
    for( let i = 0; i < lista_de_productos.images.length; i++) {
        for_images.innerHTML += `
        <img src="${lista_de_productos.images[i]}" alt="imagen del producto" height="150px" class=" mb-4 shadow-sm custom-card ">`
    }
}

images()

const stars = document.getElementById("estrellas");

// COMENTARIOS

/* ideas: los comentarios tienen su propio Json aparte del producto pero se obtienen con la id del mismo,
asi que debo guardar la id del producto(ya lo hice) y guardar en una variable el link de los comentarios.
los comentarios son más de uno,necesito un bucle for que los recorra e imprima en pantalla,con cierta estructura
html,por lo que debo crear un div que contenga los comentarios*/

const lista_de_comentarios = await fetch(`https://japceibal.github.io/emercado-api/products_comments/${id_products}.json`)
.then(response => response.json())
// console.log(lista_de_comentarios) //prueba de que funciona

const div_for_comments = document.getElementById("comments");

let content = "" /* content representa las estrellas,como yo voy a usar estrellas en más de una función
lo que hago es definir la variable como global para que no tenga problema cuando la use en más de una función. */

function showComments() {
    // let content = ""
    let u;
    for ( let i = 0; i < lista_de_comentarios.length; i++) { //recorre los comentarios
        for ( u = 0; u < lista_de_comentarios[i].score; u++) { //recorre los "score" de los comentarios
            content += `<span class="fa fa-star checked"></span>`
        }
        while ( u < 5) {
            content += `<span class="far fa-star"></span>`
            u++
        }
        div_for_comments.innerHTML += `<div class="list-group-item"><b>${lista_de_comentarios[i].user}</b> - 
        ${lista_de_comentarios[i].dateTime} - ${content}
        <p>${lista_de_comentarios[i].description}</p></div>`
        content = "" //después de cada iteración la variable content (la puntuación) se vuelve cero.

    }
}

showComments()

// console.log(lista_de_comentarios.length);

// COMENTAR

let do_comments = document.getElementById("comentar");


function comentar() {
        do_comments.innerHTML = ` <h3  class="p-4">Comentar</h3>
        <p>Tu opinión</p>
        <textarea rows="3" cols="60" id="reseña"></textarea>
        <p>Tu puntuación</p>
        <div class="col-md-2 mb-3">
        <select class="custom-select form-select d-block w-100" id="rank">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </div>
        <button class="btn btn-primary btn-lg" type="submit" id="send">Enviar</button>`
}

comentar()

//AGREGAR UN COMENTARIO

const btn_enviar = document.getElementById("send");
const reseña = document.getElementById("reseña");
const make_A_Rank = document.getElementById("rank");


function makeAcomment() {
    // fecha
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let hours = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();


    //estrellas
    let u;
    // let content;
    for ( u = 0; u < make_A_Rank.value; u++) { //recorre los valores de la puntuación
        content += `<span class="fa fa-star checked"></span>`
    }
    while ( u < 5) {
        content += `<span class="far fa-star"></span>`
        u++
    }
    
    
    // comentario
        div_for_comments.innerHTML += `<div class="list-group-item"><b>${localStorage.getItem("email")}</b> 
        - ${day}/${month}/${year} ${hours}:${min}:${sec} - ${content}
        <p>${reseña.value}</p></div>`
        reseña.value = ""
        content = "";
    // console.log(day)

}

btn_enviar.addEventListener("click", makeAcomment)

//PRODUCTOS RELACIONADOS

let related_products = document.getElementById("related_products"); //contenedor the productos relacionados
related_products.innerHTML += `
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner" id="carousel_products">

    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`
let carousel = document.getElementById("carousel_products");
// console.log(carousel)
// REDIRECCIÓN

//mb-4 shadow-sm custom-card cursor-active redirect

function show_related_products(list) {
    for (let i = 0; i < list.length; i++) {
        carousel.innerHTML += `
        <div class="carousel-item">
          <img src="${list[i].image}" alt="${list[i].name}" class="d-block w-100 redirect" />
        </div>`
        
    }

    carousel.children[0].classList.add("active")

    const class_for_redirect = document.getElementsByClassName("redirect"); //array de imagenes(de los productos relacionados)
    
    for (let i = 0; i < list.length; i++) {
        class_for_redirect[i].addEventListener("click", function() {
            localStorage.setItem("productID", list[i].id);
            window.location = "product-info.html"
        })
        
    }
    
}

show_related_products(lista_de_productos.relatedProducts)


// { <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div> }






//    ----------------cart.html------------------
localStorage.setItem(lista_de_productos.name , localStorage.getItem("productID"))

const cart = document.getElementById("carrito");
cart.addEventListener("click", htmlCart)
function htmlCart() {    
    let item = localStorage.getItem(`${lista_de_productos.name}`)
    console.log(item);
    location.href = "cart.html"
}

