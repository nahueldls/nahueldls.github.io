let num = 0; // guarodo un valor numerico para después usarlo en el all_cost
//porcentajes de envío
let porcentaje;
const porcentaje_standard = 5; 
const porcentaje_premium = 15;
const porcentaje_express = 7;

const section_send = document.getElementById("send"); //Div where I store the content for sends

function forSends() {
        section_send.innerHTML = `<hr> <hr>
        <h3>Tipo de envío</h3>
        <input type="radio" name="tipo_de_envio" id="premium" class="shippingtype_radio"> <label>Premium 2 a 5 días (15%)</label> <br>
        <input type="radio" name="tipo_de_envio" id="express" class="shippingtype_radio"> <label>Express 5 a 8 días (7%)</label> <br>
        <input type="radio" name="tipo_de_envio" id="standard" class="shippingtype_radio"> <label>Standard 12 a 15 días (5%)</label>
        
        <h3>Dirección de envío</h3>
        <label> Calle
        <input type="text" class="second_check">
        </label>
        <label> Esquina
        <input type="text" class="second_check">
        </label>
        <label> Número
        <input type="text" class="second_check">
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

let cost_conteiner = document.getElementById("info_container");
let all_cost = document.getElementById("subtotal_general"); //para mostrar la suma de los costos totales
let shippingType = document.getElementById("shippingType"); //tipo de envío
let all_values = 0;

let valor_númerico_anterior;
function subtotalPrices() {
        for (let i = 0; i < cantidad.length; i++) {
                cantidad[i].addEventListener("click", () => {
                        valor_númerico = cantidad[i].value * items[i].cost
                        subtotal[i].innerHTML = items[i].currency + " " + valor_númerico

                        //Para mostrar el subtotal de la sección costos en función de la cantidad de productos
                                num = 0
                                showAllCost()
                })  
                
        }
} /*El fin de esta función es para darle funcionalidad al input y así el valor del subtotal varíe 
    a partir de la operación: cantidad[i].value * items[i].cost.*/

subtotalPrices()
function checkCurrency(i) {
        if ( items[i].currency == "UYU") {
                items[i].currency = "USD"
                items[i].cost = items[i].cost / 40
        }
} /*Esta función analiza los tipos de monedas recibidos por el usuario,y en caso de no ser dólares hace la conversión. */




function showAllCost() {
        for (let i = 0; i < subtotal.length; i++) {
                // num += items[i].cost
                num += cantidad[i].value * items[i].cost
                all_cost.innerHTML = "USD" + " " + num
                //shippingtype = "USD" + " " + num --- 100%
                //                             num --- porcentaje = 5%/7%/15%
                // porcentaje es una variable,su valor va a depender de qué tipo de envío elija el usuario                                                
        }
}

showAllCost()
//el detalle en este método es que si se actualiza la cantidad de un producto(sube el costo general) no se actualiza el porcentaje y
//el precio final
//tengo que arreglar eso
document.getElementById("standard").addEventListener("click", () => {
        porcentaje = porcentaje_standard * num / 100;
        shippingType.innerText = "USD" + " " + porcentaje
        document.getElementById("finalvalue").innerHTML = "USD " + ( num + porcentaje )
})

document.getElementById("express").addEventListener("click", () => {
        porcentaje = porcentaje_express * num / 100;
        shippingType.innerText = "USD" + " " + porcentaje
        document.getElementById("finalvalue").innerHTML = "USD " + ( num + porcentaje )
})

document.getElementById("premium").addEventListener("click", () => {
        porcentaje = porcentaje_premium * num / 100;
        shippingType.innerText = "USD" + " " + porcentaje
        document.getElementById("finalvalue").innerHTML = "USD " + ( num + porcentaje )
})

const credit_card = document.getElementById("tarjeta_radio");
// credit_card.checked = false
const wire_transfer = document.getElementById("transf");
// wire_transfer.chcked = false
const wire_transfer_input = document.getElementById("count_number");
wire_transfer_input.disabled = false;
const from_tar = document.getElementsByClassName("from_tar")

credit_card.addEventListener("click", () => {

        wire_transfer_input.disabled = true
        for (let h = 0; h < from_tar.length; h++) {
                from_tar[h].disabled = false
                
        }
        
        })

for (let h = 0; h < from_tar.length; h++) {
        from_tar[h].disabled = false
        
}

wire_transfer.addEventListener("click", () => {
        for (let h = 0; h < from_tar.length; h++) {
                from_tar[h].disabled = true
                
        }
        wire_transfer_input.disabled = false
})

const save_changes = document.getElementById("save_changes")
// save_changes.addEventListener("click", () => {

// })
const alert_ok = `<div class="alert alert-success" role="alert">
Su compra ha sido realizada con éxito
</div>`

const button_send = document.getElementById("fin_compr");
const shippingtype_radio = document.getElementsByClassName("shippingtype_radio");
const second_check = document.getElementsByClassName("second_check")
console.log(second_check);
button_send.addEventListener("click", () => {

        if ( ( shippingtype_radio[0].checked == true || shippingtype_radio[1].checked == true || shippingtype_radio[2].checked == true ) && (credit_card.checked == true || wire_transfer.checked == true) ) {

                for (let u = 0; u < second_check.length; u++) {
                        if (second_check[u].value !== "") {
                                alert("Su compra ha sido realizada con éxito")
                                break;
                        }
                }
        }

                if ( shippingtype_radio[0].checked == false && shippingtype_radio[1].checked == false && shippingtype_radio[2].checked == false ) {
                        alert("Elija el tipo de envío")
                        
                }
                for (let i = 0; i < second_check.length; i++) {
                        if (second_check[i].value == "") {
                                alert("Rellene los campos relacionados a la dirección")
                                break;
                        }
                        // console.log(second_check[i].innerText);
                }
                if ( credit_card.checked == false && wire_transfer.checked == false) {
                        alert("Debe elegir un medio de pago");
                }


})
// console.log(credit_card);
// console.log(wire_transfer.checked);