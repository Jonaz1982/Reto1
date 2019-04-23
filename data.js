//Metodo fetch
fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
    const results = data.results;
    for (var i = 0; i < 4; i++) {
      var randomNumero = Math.floor(Math.random() * 19);
      console.log(randomNumero);
      const person = results[randomNumero];
      person.name;
      person.image;

      const row = document.querySelector('.row');
      const card = document.createElement('div');
      card.innerHTML =`<div className="card" style="padding: 1rem;">
                          <img className="card-img-top" src=${person.image} alt="Card image cap">
                          <div className="card-body">
                            <p className="card-text">${person.name}</p>
                          </div>
                        </div>`;
    row.appendChild(card);
    }
  })
  .catch((error)=>{
    console.log(error);
  });
//clases Card
//investigar como pasar parametros  por la url ...ruteo en js
