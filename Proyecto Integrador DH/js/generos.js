let doc = document.querySelector(".opa");
/*creo variable doc para alacenar el div opa*/ 
let geneross;
fetch('  https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
/*utilizo fetch para obtener datos del endpoint que nos provee su API*/
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for (i=1; i<data.data.length; i++){
    /*utilizo un bucle for para recorrer el array, utilizo la prop length para que retorne el numero de elementos que contiene el array*/
    geneross=data.data[i];
    console.log(geneross);
    doc.innerHTML+=
    /*mediante innerHTML reemplazo la estructura interna del div .opa*/
    /*mediante un a creo una ruta para ver el detalle del genero*/
     `<a href="./detalle-cancion.html?id=${geneross.id}">
     <p>${geneross.name}<p/>
     <img src=${geneross.picture} alt='' />
     </a>`;
  }
  
/*utilizo prop style para modificar estilos*/
 doc.style.fontSize= "20px";
 doc.style.textAlign= "center";
 doc.style.backgroundColor="black";
 doc.style.width= "500px";
 doc.style.marginLeft= "250px";
 doc.style.marginTop= "50px";
 
 
 


/*declaro la variable title para almacenar el dato y modificarlo*/
let title = document.querySelector(".titulosection");
title.style.fontSize= "40px";
 document.querySelector("h2").innerText="GENEROS";

 



})
.catch(function(error) {
  console.log("Error: " + error);
})