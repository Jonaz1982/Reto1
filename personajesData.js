fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
    const personajes = data.results;
    personajes.forEach(function(personaje,indice) {

        const row = document.querySelector('.row');
        const card = document.createElement('div');
        card.innerHTML =`<div className="card" style="padding: 1rem;">
                            <img className="card-img-top" src=${personaje.image} alt="Card image cap">
                            <div className="card-body">
                              <p className="card-text">${personaje.name}</p>
                            </div>
                          </div>`;
        row.appendChild(card);
    });
  })
  .catch((error)=>{
    console.log(error);
  });
