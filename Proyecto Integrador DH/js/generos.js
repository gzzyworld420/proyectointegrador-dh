let doc = document.querySelector(".opa");
let geneross    ;
let a
fetch('  https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for (i=1; i<data.data.length; i++){
    geneross=data.data[i];
    console.log(geneross);
    doc.innerHTML+=
     `<a href="./detail-genres.html?id=${geneross.id}"><p>${geneross.name}<p/>
     <img src=${geneross.picture} alt='' /></a>`;
  }
 let mod = document.querySelector(".opa");
 mod.style.fontSize= "20px";
 mod.style.textAlign= "center";
 mod.style.backgroundColor="black";
 mod.style.width= "500px";
 mod.style.marginLeft= "250px";
 mod.style.marginTop= "50px";
 
 
 



let title = document.querySelector(".titulosection");
title.style.fontSize= "40px";
 document.querySelector("h2").innerText="GENEROS";

 



})
.catch(function(error) {
  console.log("Error: " + error);
})