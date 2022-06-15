let doc = document.querySelector(".opa");
let geneross    ;
let a
fetch('  https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for (i=0; i<data.data.length; i++){
    geneross=data.data[i];
    console.log(geneross);
    doc.innerHTML+=
     `<p>${geneross.name}<p/>
     <img src=${geneross.picture} alt='' />`;
  }
 let name = document.querySelector(".opa");
 name.style.color= "white";
 name.style.fontSize= "20px";
 name.style.textAlign= "center";
 

 document.querySelector("h2").innerText="GENEROS";

 



})
.catch(function(error) {
  console.log("Error: " + error);
})