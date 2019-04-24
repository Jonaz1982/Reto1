fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
    const personajes = data.results;
    personajes.forEach(function(personaje,indice) {

        const row = document.querySelector('.row');
        const card = document.createElement('div');
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
