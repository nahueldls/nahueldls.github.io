//USANDO API FETCH
const cart_list = await fetch(CART_INFO_URL + "25801.json")
.then( response => response.json())
// console.log(cantidad)

//ESTRUCTURAR EL CONTENIDO
let content = document.getElementById("article"); //Div where I store the table
let img = document.getElementById("product_imagen");
img.src = `${cart_list.articles[0].image}`
let name = document.getElementById("nombre");
name.innerHTML = `${cart_list.articles[0].name}`
let cost = document.getElementById("costo");
cost.innerHTML = `${cart_list.articles[0].currency} ${cart_list.articles[0].unitCost}`
let price = `${cart_list.articles[0].unitCost}`

     //SUBTOTAL VARIABLE
let cantidad = document.getElementById("cantprod")
let subtotal = document.getElementById("subtotal");
cantidad.addEventListener("click", function() {
        subtotal.innerHTML = "<b>" + "USD " + cantidad.value * price + "</b>";
})

if ( cantidad != null) {
        subtotal.innerHTML = "<b>" + "USD " + cantidad.value * price + "</b>";
} 



const section_send = document.getElementById("send"); //Div where I store the content for sends

function forSends() {
        section_send.innerHTML = `<hr> <hr>
        <h3>Tipo de envío</h3>
        <input type="radio" name="tipo_de_envio" > <label>Premium 2 a 5 días (15%)</label> <br>
        <input type="radio" name="tipo_de_envio"> <label>Express 5 a 8 días (7%)</label> <br>
        <input type="radio" name="tipo_de_envio"> <label>Standard 12 a 15 días (5%)</label>
        
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
import { item } from "./product-info.js"
let id_for_cart = localStorage.getItem( item )
console.log(id_for_cart);
let product_content = document.getElementById("new_product")

let newProduct =  await fetch(`https://japceibal.github.io/emercado-api/products/${id_for_cart}.json`)
.then( response => response.json())
// console.log(newProduct)

function addingTheProduct() {
        product_content.innerHTML += `
        
        <tr>
        <td><img src="${newProduct.images[0]}" height="35px" width="45px" alt="auto" ></td>
        <td>${newProduct.name}</td>
        <td>USD ${newProduct.cost}</td>
        <td> <input style=" width: 60px;" type="number" min="1" value = "1" > </td>
        <td></td>
        </tr>
        `
}

// addingTheProduct()




