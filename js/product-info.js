//Usando API fetch
const id_products = localStorage.getItem("productID");
const lista_de_productos = await fetch(`https://japceibal.github.io/emercado-api/products/${id_products}.json`)
.then(response => response.json())


// console.log(lista_de_productos.images[0])
let contenedor_div = document.getElementById("producto");
let for_images = document.getElementById("for_images");
console.log(lista_de_productos.images)

function showcontent(array_list) {
    let content = ""

     content = `
     <h1 class="p-4">${array_list.name}</h1> <hr class="mb-4">
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