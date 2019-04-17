//Metodo fetch
fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
    const results = data.results;
    const person = results[0]
    person.name;
    person.image;

    var array1 = ['card', 'card', 'card','card','card', 'card', 'card','card','card', 'card', 'card','card','card', 'card', 'card','card','card', 'card', 'card','card'];

    array1.forEach(function(element) {
      console.log(element);
    });


    const row = document.querySelector('.row');
    const card = document.createElement('div');
    card.innerHTML=`<div className="col-md-6 col-lg-4">
      								<div class="card">
      									<img class="card-img-top" src=${person.image} alt="Card image cap">
      									<div class="card-body">
      										<h5 class="card-title">${person.name}</h5>
      									</div>
      								</div>
      							</div>`;
  row.appendChild(card);

    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  });

// 1identificar el lugar en el html en el que se van a colocar los elementos en el javascript
// 2crear el elemento
// 3 contenido al elemento
// 4 agregar en el lugar en el html
fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
    const results = data.results;
    const person = results[1];
    person.name;
    person.image;

    const row = document.querySelector('.row');
    const card = document.createElement('div');
    card.innerHTML=`<div className="col-md-6 col-lg-4">
      								<div class="card">
      									<img class="card-img-top" src=${person.image} alt="Card image cap">
      									<div class="card-body">
      										<h5 class="card-title">${person.name}</h5>
      									</div>
      								</div>
      							</div>`;
  row.appendChild(card);

    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  });
  fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
      return response.json();
    })
    .then((data)=>{
      const results = data.results;
      const person = results[2];
      person.name;
      person.image;

      const row = document.querySelector('.row');
      const card = document.createElement('div');
      card.innerHTML=`<div className="col-md-6 col-lg-4">
        								<div class="card">
        									<img class="card-img-top" src=${person.image} alt="Card image cap">
        									<div class="card-body">
        										<h5 class="card-title">${person.name}</h5>
        									</div>
        								</div>
        							</div>`;
    row.appendChild(card);

      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    });



//investigar metodo createElement
//investigar  propiedades innerHTML
//investigar textContent
//investigar appendChild
//metodos que le puedo apuntar aun objeto, array
//metodos para recorrer array
