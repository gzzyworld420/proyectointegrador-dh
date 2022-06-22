    let canciones= document.querySelector(".canciones");
    let imgAlbum=document.querySelector(".banner img");
    let imgArtista= document.querySelector(".info-jb figure img");
    let h1=document.querySelector("h1");
    let h4= document.querySelector("div a h4");
    let aDiv = document.querySelector(".info-jb div a");
    let a = document.querySelector("#a");
    let h6=document.querySelector("h6");
    let h5=document.querySelector("h5");
    
    let queryString= location.search;
    let queryStringObj= new URLSearchParams(queryString);
    let busqueda= queryStringObj.get('id');
    
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${busqueda}`)
    
    .then(function(response){
      console.log(response)
    return response.json()
    })
    .then(function(datos){
    
    let nombreAlbum= datos.title
    let album= datos.tracks.data
    let artistaAlbum= datos.artist.name
    let imagenAlbum=datos.cover_medium
    let imagenChica= datos.cover_small
    let imagenArtista= datos.artist.picture_small
    let releaseDate= datos.release_date
    let genero= datos.genres.data[0].name
    let genreID= datos.genres.data[0].id
    let artist= datos.artist.id
    
    imgAlbum.src= imagenAlbum
    imgAlbum.alt=nombreAlbum
    h1.innerText=nombreAlbum
    imgArtista.src=imagenArtista
    imgArtista.alt=nombreAlbum
    aDiv.href= `./detale-artista.html?id=${artist}`
    h4.innerText=artistaAlbum
    h6.innerText=releaseDate
    a.href=`generos.html?id=${genreID}`
    h5.innerText=genero
    
    
    for(let i=0; i<album.length; i++){
    
     let nombreCancion= album[i].title
     let track=album[i].id
    
    
       canciones.innerHTML= canciones.innerHTML +
       
      ` <article class="track">
      <a href="./detalle-cancion.html?id=${track}"><img src= "${imagenChica}" alt="${nombreAlbum}"></a> 
      <div>
         <a href="detalle-cancion.html?id=${track}"><h2>${nombreCancion}</h2></a>                    
      </div>    
      </article>`
    }
    })
     .catch(function (error) {
    console.log(error)
    })
    
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${busqueda}`)
    .then(function(response){
    console.log(response)
    return response.json
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