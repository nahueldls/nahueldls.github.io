//let lista = await getJSONData(PRODUCTS_URL + "101" + EXT_TYPE); esto no me sirvió
//console.log(lista) 
const lista = await fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
                 .then(response => response.json());
                 console.log(lista.products)
const contenedor = document.getElementById("contenedor"); 
function crearHtml(lista_de_productos) {

    for( let i = 0; i < lista_de_productos.products.length; i++) {
        contenedor.innerHTML += `
        
                <div class="row">
                    <div class="col-3">
                        <img src="${lista_de_productos.products[i].image}" alt="autos" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${lista_de_productos.products[i].name}</h4>
                            <small class="text-muted">${lista_de_productos.products[i].soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${lista_de_productos.products[i].description}</p>
                    </div>
                </div>
            
            `


    }

}

crearHtml(lista);





           //cosas que me ayudaron
        //console.log(mostrar += lista_de_productos.products[i].name)
        //<p>${lista_de_productos.products[i].name}</p>
        //<p>${lista_de_productos.products[i].description}</p>
        //<p>${lista_de_productos.products[i].cost}</p>
        //<p>${lista_de_productos.products[i].soldCount}</p>
        //<img src="${lista_de_productos.products[i].image}" />
            