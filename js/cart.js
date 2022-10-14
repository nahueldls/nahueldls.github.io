//USANDO API FETCH
const cart_list = await fetch( CART_INFO_URL + "25801.json" )
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

//ADDING FUNCIONALITY FOR SUBTOTAL






