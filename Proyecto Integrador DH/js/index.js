// JavaScript Index File
// Declaramos variables y a su vez con querySelector obtenemos los elementos del html con su respectiva class

let listaCanciones = document.querySelector('.lisCanciones');
let listaArtistas = document.querySelector('.lisArtistas');
let listaAlbums = document.querySelector('.lisAlbums');


// Declaramos una funcion que nos permita obtener la informacion de las canciones
// Trabajamos con un Fetch para obtener la informacion de las canciones
// En la funcion se obtiene la informacion de las canciones y se muestra en el html 

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.artists.data[0].id);

        // Seccion canciones
        // Se obtiene la informacion de las canciones y se muestra en el html
        for (let i = 5; i < 10; i++) {
            let titulo = data.tracks.data[i].title;
            let artista = data.tracks.data[i].artist.name;
            let imagenes = data.tracks.data[i].artist.picture_medium;
            let id = data.tracks.data[i].id;

            listaCanciones.innerHTML += 
            ` <li class="article">
            <p>
                <a href="./detalleCanciones.html?id=${id}">${titulo}</a> by <a href="./detalleArtista.html?id=${data.tracks.data[i].artist.id}">${nombreArtista}</a>
            </p>
            <a href="./detalleCanciones.html?id=${id}" class='aParaResponsive'> <img src="${imagenes}" alt='' class='picture'></a>
        </li>`;
        }


        // Seccion artistas
        // Se obtiene la informacion de los artistas y se muestra en el html

        for (let i = 0; i < 5; i++) {
            let nombre = data.artists.data[i].name;
            let imagenes = data.artists.data[i].picture_medium;
            let id = data.artists.data[i].id;

            listaArtistas.innerHTML += ` <div class="artistas"> <img src="${imagenes}" alt=""> <p>${nombre}</p> <button class="btnPlay" onclick="playArtist(${id})">Play</button> </div>`;
        }


        // Seccion albums
        // Se obtiene la informacion de los albums y se muestra en el html

        for (let i = 0; i < 5; i++) {
            let nombre = data.albums.data[i].title;
            let imagenes = data.albums.data[i].cover_medium;
            let id = data.albums.data[i].id;

            listaAlbums.innerHTML += ` <div class="albums"> <img src="${imagenes}" alt=""> <p>${nombre}</p> <button class="btnPlay" onclick="playAlbum(${id})">Play</button> </div>`;
        }
    })



// Formulario 

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