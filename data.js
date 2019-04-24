//Metodo fetch
fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
    const results = data.results;
    for (var i = 0; i < 3; i++) {
      var randomNumero = Math.floor(Math.random() * 19);
      console.log(randomNumero);
      const person = results[randomNumero];
      person.name;
      person.image;

      const row = document.querySelector('.row');
      const card = document.createElement('div');
      card.innerHTML =`<div class="card">
                          <img class="card-img-top" src=${person.image} alt="Card image cap">
                          <div class="card-body">
                            <p class="card-text">${person.name}</p>
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
