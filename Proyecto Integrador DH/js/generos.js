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
  /* section */
  doc.style.display = 'flex';
  doc.style.justifyContent = 'space-between';
  doc.style.flexWrap = 'wrap'
})
.catch(function(error) {
  console.log("Error: " + error);
})