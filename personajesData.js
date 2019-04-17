fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
    const personajes = data.results;
    personajes.forEach(function(personaje,indice) {

        const row = document.querySelector('.row');
        const card = document.createElement('div');
        card.innerHTML =`<div className="col-md-6 col-lg-4">
          								<div class="card">
          									<img class="card-img-top" src=${personaje.image} alt="Card image cap">
          									<div class="card-body">
          										<h5 class="card-title">${personaje.name}</h5>
          									</div>
          								</div>
          							</div>`;
        row.appendChild(card);
    });
  })
  .catch((error)=>{
    console.log(error);
  });
