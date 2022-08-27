//let lista = await getJSONData(PRODUCTS_URL + "101" + EXT_TYPE); esto no me sirvió
//console.log(lista) 
let id = localStorage.getItem("catID");
const lista = await fetch(`https://japceibal.github.io/emercado-api/cats_products/${id}.json`)
                 .then(response => response.json());
                 console.log(lista.products) //prueba de que funciona
const contenedor = document.getElementById("contenedor"); 
function crearHtml(lista_de_productos) { 

    for( let i = 0; i < lista_de_productos.products.length; i++) {
        contenedor.innerHTML += `
        <div onclick="setCatID(${lista_de_productos.products[i].id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${lista_de_productos.products[i].image}" alt="autos" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${lista_de_productos.products[i].name}-${lista_de_productos.products[i].currency} ${lista_de_productos.products[i].cost}</h4>
                            <small class="text-muted">${lista_de_productos.products[i].soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${lista_de_productos.products[i].description}</p>
                    </div>
                </div>
        </div>    
            `


    }

}

crearHtml(lista); 


 let texto = document.getElementById("textogrande");

switch (id) {
    case "101":
        texto.innerHTML = "verás aquí todos los productos de la categoría Autos"
        break;
    case "102":
        texto.innerHTML = "verás aquí todos los productos de la categoría Juguetes"
        break;
    case "103":
        texto.innerHTML = "verás aquí todos los productos de la categoría Muebles"
        break;
    case "104":
        texto.innerHTML = "verás aquí todos los productos de la categoría Herramientas"
        break;
        case "105":
        texto.innerHTML = "verás aquí todos los productos de la categoría Computadoras"
        break;
        case "106":
        texto.innerHTML = "verás aquí todos los productos de la categoría Vestimenta"
        break;
        case "107":
        texto.innerHTML = "verás aquí todos los productos de la categoría Electrodomésticos"
        break;
        case "108":
        texto.innerHTML = "verás aquí todos los productos de la categoría Deporte"
        break;
        case "109":
        texto.innerHTML = "verás aquí todos los productos de la categoría Celulares"
        break;

    default:
        break;
}






           //cosas que me ayudaron
        //console.log(mostrar += lista_de_productos.products[i].name)
        //<p>${lista_de_productos.products[i].name}</p>
        //<p>${lista_de_productos.products[i].description}</p>
        //<p>${lista_de_productos.products[i].cost}</p>
        //<p>${lista_de_productos.products[i].soldCount}</p>
        //<img src="${lista_de_productos.products[i].image}" />
            