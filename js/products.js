// Usando la Api fetch ----->
const id = localStorage.getItem("catID"); 
const lista = await fetch(`https://japceibal.github.io/emercado-api/cats_products/${id}.json`)
                 .then(response => response.json());
                //  console.log(productos[0]) //prueba de que funciona
                
                 //  DOM,variables y funciones ------>


let screen;
const contenedor = document.getElementById("funciona"); 
let productos = lista.products;
console.log(productos[0])

// BOTONES Y MÁS
const buttonOrder = document.getElementById("sortAsc");
const buttonOrderBack = document.getElementById("sortDesc");
const relevancia = document.getElementById("relevancia");
const limpiar = document.getElementById("clearRangeFilter");
const minimo = document.getElementById("rangeFilterCountMin"); //input de precio mínimo
const maximo = document.getElementById("rangeFilterCountMax"); //input de precio máximo
// BOTONES Y MÁS

function crearHtml(lista_de_productos) { 

    contenedor.innerHTML = ""

    for( let i = 0; i < lista_de_productos.length; i++) {
        contenedor.innerHTML += `
        <div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${lista_de_productos[i].image}" alt="autos" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${lista_de_productos[i].name}-${lista_de_productos[i].currency} ${lista_de_productos[i].cost}</h4>
                            <small class="text-muted">${lista_de_productos[i].soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${lista_de_productos[i].description}</p>
                    </div>
                </div>
        </div>    
            `
    }

}

// crearHtml(lista.products)

// window.onload = showHtml();

 function showHtml() {
    if( screen == undefined){
        crearHtml(productos)
    } else if( screen == "costo") {
        crearHtml(productos.sort(function(a,b){
            if( b.cost > a.cost){
                return 1;
            } else {
                return -1;
            }
        }))
    } else if ( screen == "costomenor") {
        crearHtml(productos.sort(function(a,b){
            if( b.cost > a.cost){
                return -1;
            } else {
                return 1;
            }
        }))
    } else if ( screen == "relevancia") {
        crearHtml(productos.sort(function(a,b){
            if( b.soldCount > a.soldCount){
                return 1;
            } else {
                return -1;
            }
        }))
    } else if ( screen == "filtrado") {
        let inputMinimo = minimo.value; //valor de input (precio mínimo)
        let inputMaximo = maximo.value; //valor de input (precio máximo) 
        if ( inputMinimo && inputMinimo > 0 && inputMaximo && inputMaximo > 0 ) {
            crearHtml(productos.filter( producto => producto.cost >= inputMinimo && producto.cost <= inputMaximo))
        } else if( inputMinimo && inputMinimo > 0) { //rellena input de menor que ----------
            crearHtml(productos.filter( producto => producto.cost >= inputMinimo))
        } else if( inputMaximo && inputMaximo > 0 ) { //rellena input mayor que -------------
            crearHtml(productos.filter( producto => producto.cost <= inputMaximo))
        }
    } else if ( screen == "limpio") {
        let inputMinimo = minimo.value;
        let inputMaximo = minimo.value;
        inputMaximo = 0;
        inputMinimo = 0;
        crearHtml(productos)
    }
 }
 showHtml()
  

//funciones de cambio de varible para el mostrado de pantalla

function cambiar() {
    screen = "costo"
    showHtml();
} //la funcion tiene que activarse cuando se toque el botón <Mayor precio>
buttonOrder.addEventListener("click", cambiar) //botón

function cambiarAlreves() {
    screen = "costomenor"
    showHtml();
} //la funcion tiene que activarse cuando se toque el botón <Menor precio>

buttonOrderBack.addEventListener("click", cambiarAlreves) //botón

function relevanciaSc() {
    screen = "relevancia"
    showHtml()
}
 relevancia.addEventListener("click", relevanciaSc);


     //FILTROS NÚMERICOS

     /* ideas generales --> - está relacionado con el <cost>.
                            - tiene que guardar el valor recibido en su input.
                            - convertir en un dato tipo number el costo.
                            - analizar si está dentro del rango de precio(el costo)
                              y a partir de eso mostrar los productos.
                            algoritmo:
qué es lo primero quq quiero hacer? -crear una function que reciba los input max y min,cambie el valor de la 
variable screen y vaya hacia la function showHtml().

*/


                                 


const filtrar = document.getElementById("rangeFilterCount"); //botón de filtrar


function filtrando() {
    screen = "filtrado"
    showHtml()
} 
filtrar.addEventListener("click", filtrando);



function clearAll() {
    screen = "limpio"
    showHtml()
}

limpiar.addEventListener("click", clearAll)




 
   
  
 
 
 





