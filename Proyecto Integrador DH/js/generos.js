let doc = document.querySelector(".geneross");
let genres = '';
let a
fetch(' https://api.deezer.com/genre')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for (i=0; i<data.results.length; i++){
    genres=data.results[i];
    doc.innerHTML+= `<article class='articulos'> <p>Status: ${genres.artist} </p></article>`
  }
  
})
.catch(function(error) {
  console.log("Error: " + error);
})