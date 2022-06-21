let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);

/*capturar el elemento en el dom*/
;

let section = document.querySelector('.lista');

let temasFavoritos = '';

/*utilizo condicionales para evaluar*/

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>Tu Playlist esta vacia</p>';
    /*si no contiene nada*/
} else {
    /*Si contiene canciones*/

    for (let i = 0; i < favoritos.length; i++) {
        /*recorro el array*/
        const URL = `https://api.deezer.com/track/${favoritos[i]}`;

        fetch(URL)
            /*declaro variable URL*/
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                temasFavoritos += `<article class="lista">
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

                section.innerHTML = temasFavoritos;

            }).catch(function (error) {
                console.log(error);
            })
    }
}

// js para el formulario 

let formulario = document.querySelector('form.header')
let campo = document.querySelector('.campo')
formulario.addEventListener('submit', function (e) {
 e.preventDefault()
 if(campo.value == ''){
    alert('el campo esta vacio')
 } else if (campo.value.length<3){
    alert('el termino buscado debe tener al menos tres caracteres')
 }else{
    this.submit()
 }
})