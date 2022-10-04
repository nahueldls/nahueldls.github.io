//USANDO API FETCH
const cart_list = await fetch( CART_INFO_URL + "25801.json" )
.then( response => response.json())
console.log(cart_list.articles[0])

//ESTRUCTURAR EL CONTENIDO
let content = document.getElementById("article"); //Div where I store the table

const product_object = function(product) {
        
        content.innerHTML = `
        <table>
        <tr>
        <th>foto</th>
        <th>Nombre</th>
        <th>Costo</th>
        <th>Cantidad</th>
        <th>Subtotal</th>
        </tr>
    
        <tr>
        <td><img src="${product.articles[0].image}" height="35px" width="45px" alt="auto"></td>
        <td>${product.articles[0].name}</td>
        <td>${product.articles[0].currency} ${product.articles[0].unitCost}</td>
        <td> <input style=" width: 60px;"> </td>
        <td> USD 15200</td>
        
        </tr>
        </table>`
        //TENGO QUE CREAR LA FUNCIONALIDAD PARA LA CANTIDAD Y EL SUBTOTAL    
}

product_object(cart_list)

const section_send = document.getElementById("send"); //Div where I store the content for sends






