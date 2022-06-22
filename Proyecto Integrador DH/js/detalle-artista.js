     //QUERYSTRING
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);//modelo de obj en js
    let busqueda = queryStringObj.get('id');
  
    //DECLARO VARIABLES
    let artista = document.querySelector("#artistafaro");
    let albumes = document.querySelector("#albumes-artista");
    let img = document.querySelector(".portada .banner img")
    let hUno = document.querySelector("#album h1")
  
    //FETCH
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${busqueda}`)
      .then(function (response) {
        console.log(response);
        return response.json()
      })
      .then(function (datos) {
        //DECLARO VARIABLES
        let cantantes = datos
        console.log(cantantes);
  
        //DECLARO NUEVAS VARIABLES
        let fotoArtista = cantantes.picture_medium;
        let nombreArtista = cantantes.name;
        
        hUno.innerText = nombreArtista;
        img.src = fotoArtista;
        img.alt = nombreArtista;
      }
  
      )
      .catch(function (error) {
        console.log(error);
      })
  
    //SEGUNDO FETCH
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${busqueda}/top?limit=5`)
      .then(function (response) {
        console.log(response);
        return response.json()
      })
      .then(function (datos) {
        console.log(datos);
        //PREPARO BUCLE
        for (let i = 0; i < 5; i++) {
          let ID= datos.data[i].id
          let songTitle = datos.data[i].title;
          let songCover = datos.data[i].cover;
          let songId = datos.data[i].id;
          albumes.innerHTML += `
        <article class="track">
        <a href="./detalle-album.html?id=${songId}"><img src="${songCover}" alt="${songTitle}"></a>
        <div>
        <a href="detalle-album.html?id=${songID}"><h2>${songTitle}</h2></a>
        </div>
    
        </article>
        `
        }
  
      })
      .catch(function(error){
        console.log(error);
      })

     // Formulario de busqueda

let formulario = document.querySelector('form.header')
let campo = document.querySelector('.campo')
formulario.addEventListener('submit', function (e) {
    e.preventDefault()
    if (campo.value == '') {
        alert('Hola, el campo esta vacio')
    } else if (campo.value.length < 3) {
        alert('Hola, el termino buscado debe tener al menos tres caracteres')
    } else {
        this.submit()
    }
}) // fin formulario