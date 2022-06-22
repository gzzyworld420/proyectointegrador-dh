// Declaro Variables que voy a utilizar despues
let searchLocation = location.search
let queryString = new URLSearchParams(searchLocation)
let capturandoID = queryString.get('id')
console.log(capturandoID);
let generoSection = document.querySelector('.detailGenre')

// Declaramos dos variables constantes, las cuales no van a cambiar sus valores
// El valor de las variables es el endpoint de la api concatenado con capturarId
const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${capturandoID}` // de aca sacas el genero
const url2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${capturandoID}/artists` // de aca sacas el artista

// Utilizamos un fetch para traer todos los generos
fetch(url) // traes todos los generos
    .then(function (response) {
        return response.json()
    })
    .then(function (response1) {

        console.log(response1); // este objeto contiene los generos y su info

// Dentro de este otro fetch lo que hacemos es traer la segunda url (endpoint) de la cual vamos a obtener los artistas del genero seleccionado

        fetch(url2) // traes los artistas del genero seleccionado
            .then(function (response) {
                return response.json()
            })
            .then(function (response2) {
                console.log(response2);
// Seleccionamos un elemento del DOM, al cual le agregamos html con el fin de agregarle sus respectivas propiedades como nombre / imagen 
                generoSection.innerHTML = `<article>${response1.name}</article>`
                for (let i = 0; i < 5; i++) {
                    generoSection.innerHTML += ` <a href="./detalleArtista.html?id=${response2.data[i].id}"><article>
    <img class="imagenesDetalleGenero" src="${res2.data[i].picture_medium}" alt="">
          <p class="pSection" >${response2.data[i].name}</p>
 </article></a>`
                }
            })
// El catch lo que hace es captar algun error que pueda llegar a aparecer y por convencion utilizamos la letra "e", como parametro, pero eso no quiere decir que podramos introducir cualquiero otro valor en su lugar
            .catch(function (error) {
                console.log("Error: " + error);
            })

    })

// Formulario de busqueda

let formulario = document.querySelector('form.header')
let campo = document.querySelector('.campo')
formulario.addEventListener('submit', function (e) {
    e.preventDefault()
    if (campo.value == '') {
        alert('el campo esta vacio')
    } else if (campo.value.length < 3) {
        alert('el termino buscado debe tener al menos tres caracteres')
    } else {
        this.submit()
    }
})