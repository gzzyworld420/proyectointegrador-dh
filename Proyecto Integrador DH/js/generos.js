let doc = document.querySelector(".opa");
let geneross = '';
let a
fetch('  https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for (i=0; i<data.results; i++){
    geneross=data.results[i];
    doc.innerHTML+=
     `<p>${geneross.name}<p/>`
     `<img src=${geneross.picture} alt='' />`;
  }
})
.catch(function(error) {
  console.log("Error: " + error);
})