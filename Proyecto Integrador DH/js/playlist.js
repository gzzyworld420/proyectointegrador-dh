let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);

/* capturar el elemento en el dom */;

let section = document.querySelector('.lista');

let personajesFavoritos = '';

/* Evaluar el localStorage */

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay items en favoritos</p>';
} else {
    /* Si contiene elementos */

    for (let i = 0; i < favoritos.length; i++) {
        /* Buscar el personaje */
        const URL =  `https://api.deezer.com/track/${favoritos[i]}`;   
        
        fetch(URL)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                personajesFavoritos += `<article class="dispo-listado dispo-elementos">
                <a href="./detalle-album.html?id=${data.album.id}">
                   <img class="img-generos" src="${data.album.cover_big}"/>
                </a>
              
               <a href="./detalle-cancion.html?id=${data.id}">
                   <p class="lista">Canción:${data.title}</p>
               </a>
               
               <a href="./detalle-artista.html?id=${data.artist.id}">
                   <p class="lista">Artista:${data.artist.name}</p>
               </a>
               
               <a href="./detalle-album.html?id=${data.album.id}">
                   <p class="lista">Albúm:${data.album.title}</p>
               </a>
               
               <iframe src=${data.preview} frameborder="0"></iframe>
               </article>`
       
            section.innerHTML = personajesFavoritos;
            }).catch(function(error) {
                console.log(error);
            })
    }
}