// Usando la Api fetch ----->
const id = localStorage.getItem("catID"); 
const lista = await fetch(`https://japceibal.github.io/emercado-api/cats_products/${id}.json`)
                 .then(response => response.json());
                 console.log(lista.products) //prueba de que funciona
                
                 //  DOM,variables y funciones ------>


let screen = undefined;
const contenedor = document.getElementById("contenedor"); 
let productos = lista.products;
const buttonOrder = document.getElementById("sortAsc");

/* function cambiar(){
    screen = "costo";
    mostrar()
}
 buttonOrder.addEventListener("click", cambiar);

function ordenar(b, a) {
    return a.cost - b.cost;
}

function mostrar() {
    if (screen == undefined) {crearHtml(productos)}
    else {crearHtml(productos.sort(ordenar))}
} */

function crearHtml(lista_de_productos) { 

    for( let i = 0; i < lista_de_productos.length; i++) {
        contenedor.innerHTML += `
        <div onclick="setCatID(${lista_de_productos[i].id})" class="list-group-item list-group-item-action cursor-active">
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

 function showHtml() {
    if ( screen == undefined){
        crearHtml(productos)
    }else if( screen == "costo"){
        crearHtml(productos.sort(ordenar))
    }
 }
 showHtml()

//  crear una funcion que cree el criterio de orden 

function ordenar(a, b) {
    return b.costo - a.costo;
}

//  crear una funcion que cambie el valor de la variable screen 

function cambiar() {
    screen = "costo"
    showHtml();
} //la funcion tiene que activarse cuando se toque el botón <Mayor precio>
buttonOrder.addEventListener("click", cambiar)



/* PROBELMA: LA FUNCIÓN CAMBIAR, LE DA UN VALOR NUEVO A LA VARIABLE SCREEN Y ORDENA EN FUNCIÓN DE COSTOS
PERO NO REDIRECCIONA A LA FUNCIÓN showHtml PARA QUE EVALÚE EL VALOR DE SCREEN */




 
   
  
 
 
 
 /* function ordenar(x, y) {
    if (x.apellido < y.apellido) {return -1;}
    if (x.apellido > y.apellido) {return 1;}
    return 0;
    la función observa lo que hace es comparar dos cosas(las que se toman por parametro) y ver cual es menor,
    si la primera es menor que la segunda retorna un numero menor a uno y viceversa,al comparar todos va ubicando
    de menor a mayor.

   }
 */

   /* function ordenar2(x, y) {
    return x.apellido.localeCompare(y.apellido);
   } 
   let r = n.sort(ordenar2)
   console.log(r) 
   El método localeCompare () retorna un número indicando si una cadena de carateres de referencia va antes,
   después o si es la misma que la cadena dada en orden alfabético.*/



