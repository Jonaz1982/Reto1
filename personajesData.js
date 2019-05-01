const page = document.querySelector('#page');

const row = document.querySelector('.row');
  let counter=0;
  function displayCharacter(){
    row.innerHTML='';
    ++counter;
   let url = `https://rickandmortyapi.com/api/character/?page=${counter}`;

   page.textContent=counter;

   fetch(url)
   .then((response) => {
     return response.json();
   })
   .then((data)=>{
     const personajes = data.results;
     personajes.forEach(function(personaje,indice) {
 
         
       
         const card = document.createElement('div');
         card.setAttribute('class','col-md-4');
         card.innerHTML =`<div class="card">
                             <img class="card-img-top" src=${personaje.image} alt=${personaje.name} name=${personaje.name}>
                             <div class="card-body">
                               <p class="card-text">${personaje.name}</p>
                             </div>
                           </div>`;
         row.appendChild(card);
 
         card.addEventListener("click",function(event){
           let image = event.target.attributes[1].nodeValue;
           let name = event.target.attributes[4].nodeValue;
           localStorage.setItem("localImage",image);
           localStorage.setItem("localName",name);
           location.assign("details.html");
         });
     });
   })
   .catch((error)=>{
     console.log(error);
   });
  };

  let next = document.querySelector('#next');
  next.addEventListener("click",function(event){
  event.preventDefault()
  displayCharacter()
  });
  
displayCharacter();


  