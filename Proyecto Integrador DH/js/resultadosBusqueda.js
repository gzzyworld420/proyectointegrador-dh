let artistas = document.querySelector('.artists')
let albums = document.querySelector('.album')
let canciones = document.querySelector('.songs')
let serRes = document.querySelector('.searchResults')
let sec = document.querySelector('.buscador')

let dataError = document.querySelector('.dataError')
let qs = location.search;
let queryStringObject = new URLSearchParams(qs);
let capturar = queryStringObject.get('busqueda')


// traemos las canciones
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${capturar}`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    if (data.data.length == 0) {
      canciones.style.display = 'none'
    } else {
      for (let i = 0; i < 5; i++) {
        canciones.innerHTML += `<a href="./detalle-canciones.html?id=${data.data[i].id}"><p>${data.data[i].title}</p></a>`
      }
    }

  })
  .catch(function (error) {
    console.log("Error: " + error);
  })
// traemos los albums
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${capturar}`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    if (data.data.length == 0) {
      albums.style.display = 'none'
    } else {
      for (let i = 0; i < 5; i++) {
        albums.innerHTML += `<a href="./detalle-album.html?id=${data.data[i].id}"><p>${data.data[i].title}</p></a>`
      }
    }

  })
  .catch(function (error) {
    console.log("Error: " + error);
  })
// traemos los artistas
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${capturar}`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    if (data.data.length == 0) {
      artistas.style.display = 'none'
    } else {
      for (let i = 0; i < 5; i++) {
        artistas.innerHTML += `<a href="./detalle-artista.html?id=${data.data[i].id}"><p>${data.data[i].name}</p></a>`
      }
    }

  })
  .catch(function (error) {
    console.log("Error: " + error);
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