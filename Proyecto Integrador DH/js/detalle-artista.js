// CARGAR PAGINA ANTES DE TODO
window.addEventListener("load", function () {

    console.log(window);
    console.log(location);
    console.log(location.search);
  
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
  
    //SEGUNDO FETCH PARA BUSCAR ALBUMES POR ARTISTA
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${busqueda}/albums`)
      .then(function (response) {
        console.log(response);
        return response.json()
      })
      .then(function (datos) {
        console.log(datos);
        //PREPARO BUCLE
        for (let i = 0; i < 5; i++) {
          let albumID= datos.data[i].id
          let albumTitle = datos.data[i].title;
          let albumCover = datos.data[i].cover;
          let albumId = datos.data[i].id;
          albumes.innerHTML += `
        <article class="track">
        <a href="./detalle-album.html?id=${albumId}"><img src="${albumCover}" alt="${albumTitle}"></a>
        <div>
        <a href="detalle-album.html?id=${albumID}"><h2>${albumTitle}</h2></a>
        </div>
    
        </article>
        `
        }
  
      })
      .catch(function(error){
        console.log(error);
      })
  })