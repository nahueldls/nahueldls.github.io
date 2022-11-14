const save_changes_button = document.getElementById("save_changes");



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  /*Mi función se fija si la collección de objetos con cierta clase no está vacía,
  en caso afirmativo guarda un array en el localstorage con dichos datos y
  los muestra cada vez que el ususario ingrese,hasta que se cambien los datos.
  si los datos ya existen,los reescribe.*/
const array_de_datos = []
const form_input = document.getElementsByClassName("keep-data");
let array_json;

// console.log(!array_json);

  function save_data() {
    for (let i = 0; i < form_input.length; i++) {
        if( form_input[i].value != "" && array_json != undefined ) {
            localStorage.removeItem(i)
            array_de_datos.push(form_input[i].value)
        }

    if (form_input[i].value != "" && array_json == undefined) {
        //Agrego los valores de los inputs al array
        array_de_datos.push(form_input[i].value)
    }
        localStorage.setItem("Datos", JSON.stringify(array_de_datos))
        array_json = JSON.parse(localStorage.getItem("Datos"))
        localStorage.setItem(i, array_json[i])
    }

  }

  save_changes_button.addEventListener("click", save_data)
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("email_for_profile").value = localStorage.getItem("email")
    for (let x = 0; x < form_input.length; x++) {
        form_input[x].value = localStorage.getItem(x)
        
    }
  })