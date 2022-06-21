
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let busqueda = queryStringObj.get('id');

    let track = document.querySelector("#cancionesfaro");


    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${busqueda}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (datos) {
            console.log(datos)

            let nombreTrack = datos.title
            let autorTrack = datos.artist.name
            let imagenTrack = datos.artist.picture_medium
            let albumTrack = datos.album.title
            let linkTrack = datos.preview
            let artist= datos.artist.id

            track.innerHTML += 
            `<a href="./detalle-cancion.html"><div class= "divtrack"><div class= "divtrackhijo"><img class= "imgtrack" src="${imagenTrack}" alt="${nombreTrack}"></a>
            <a href="./detalle-cancion.html"><h1 class= "headtrack" id="h1track">${nombreTrack}<h1>
            <a href="./detalle-artista.html?id=${artist}">  <h3 class= "headtrack" id="h3track">${albumTrack}</h3></a>
           <a href="./detalle-artista.html?id=${artist}"> <h4 class= "headtrack">${autorTrack}</h4></a>
            <audio controls class="audiotrack"><source src="${linkTrack}"></audio>
            </a>
          `
        })
        .catch(function (error) {
            console.log(error)
        })

let listaFavoritos= []

let recuperoStorage= localStorage.getItem('favoritos');
console.log(recuperoStorage);

if (recuperoStorage != null){
    listaFavoritos=JSON.parse(recuperoStorage);
}
let agregarAFav= document.querySelector('#agregarAFav');

if (listaFavoritos.includes(busqueda)){
    agregarAFav.innerHTML=
    ` <button>Quitar de mi playlist</button>
    <i class="fas fa-heart"></i>`
    }

 agregarAFav.addEventListener('click', function(e){
    e.preventDefault();
   
    if (listaFavoritos.includes(busqueda)){
       
        let sacarID= listaFavoritos.indexOf(busqueda);
        listaFavoritos.splice(sacarID, 1);
        agregarAFav.innerHTML =`
      <button>Agregar a mi playlist</button>
      <i class="far fa-heart"></i>`
        console.log(listaFavoritos);
    }

   else {
        listaFavoritos.push(busqueda);
        document.querySelector("#agregarAFav").innerHTML=`
        <button>Quitar de mi Playlist</button>
        <i class="fas fa-heart"></i>
        `;

    }
    
    let trackAStorage= JSON.stringify(listaFavoritos);
    localStorage.setItem('favoritos', trackAStorage);
    console.log(localStorage);
})