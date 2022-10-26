let num = 0; // guarodo un valor numerico para después usarlo en el all_cost
const section_send = document.getElementById("send"); //Div where I store the content for sends

function forSends() {
        section_send.innerHTML = `<hr> <hr>
        <h3>Tipo de envío</h3>
        <input type="radio" name="tipo_de_envio" id="premium"> <label>Premium 2 a 5 días (15%)</label> <br>
        <input type="radio" name="tipo_de_envio" id="express"> <label>Express 5 a 8 días (7%)</label> <br>
        <input type="radio" name="tipo_de_envio" id="standard"> <label>Standard 12 a 15 días (5%)</label>
        
        <h3>Dirección de envío</h3>
        <label> Calle
        <input type="text">
        </label>
        <label> Esquina
        <input type="text" >
        </label>
        <label> Número
        <input type="text">
        </label>
        <hr>`
}

forSends()

    //ADDING A PRODUCT IN THE CART

let product_content = document.getElementById("new_product");
const items = JSON.parse(localStorage.getItem("items"));
// console.log(items[0].cost);

items.forEach(item => {
        product_content.innerHTML += `
        
        <tr>
        <td><img src="${item.images[0]}" height="35px" width="45px" alt="auto" ></td>
        <td>${item.name}</td>
        <td>${item.currency} ${item.cost}</td>
        <td> <input style=" width: 60px;" type="number" min="1" value = "1" class="cantidad"> </td>
        <td class="subtotal"></td>
        </tr>
        `

});


let subtotal = document.getElementsByClassName("subtotal")
let cantidad = document.getElementsByClassName("cantidad");
let valor_númerico = 0; //necesito mostrar en la tabla el valor númerico de las operaciones,para eso primero debo crearlo 
//y así cuando lo muestre en forma de texto no tenga problemas por el tipo de dato

for (let u = 0; u < subtotal.length; u++) {
        checkCurrency(u)
        valor_númerico = cantidad[u].value * items[u].cost
        subtotal[u].innerHTML = items[u].currency + " "  + valor_númerico
        
} /*creo esta función para que cuando se cargue la pagina muestre primeramente 
    el valor del costo del producto mulltiplicado por la unidad y no un espacio vacío (en el subtotal)*/

function subtotalPrices() {
        for (let i = 0; i < cantidad.length; i++) {
                cantidad[i].addEventListener("click", () => {
                        subtotal[i].innerHTML = items[i].currency + " "  + cantidad[i].value * items[i].cost
                })  
                
        }
} /*Y el fin de esta función es para darle funcionalidad al input y así el valor del subtotal varíe 
    a partir de la operación: cantidad[i].value * items[i].cost.*/

subtotalPrices()
function checkCurrency(i) {
        if ( items[i].currency == "UYU") {
                items[i].currency = "USD"
                items[i].cost = items[i].cost / 40
        }
} /*Esta función analiza los tipos de monedas recibidos por el usuario,y en caso de no ser dólares hace la conversión. */


let cost_conteiner = document.getElementById("info_container");
let all_cost = document.getElementById("subtotal_general"); //para mostrar la suma de los costos totales
let shippingType = document.getElementById("shippingType"); //tipo de envío
function showAllCost() {
        for (let i = 0; i < subtotal.length; i++) {
                num += items[i].cost
                all_cost.innerHTML = "USD" + " " + num
        }
}
showAllCost()