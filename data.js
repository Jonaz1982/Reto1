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
      card.innerHTML =`<div className="col-md-6 col-lg-4">
        								<div class="card">
        									<img class="card-img-top" src=${person.image} alt="Card image cap">
        									<div class="card-body">
        										<h5 class="card-title">${person.name}</h5>
        									</div>
        								</div>
        							</div>`;
    row.appendChild(card);
    }
  })
  .catch((error)=>{
    console.log(error);
  });
