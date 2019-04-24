
let image = localStorage.getItem("localImage");
let name = localStorage.getItem("localName");
let parrafo = document.querySelector(".card-text");
let picture = document.querySelector(".card-img-top")
parrafo.textContent = name;
picture.setAttribute("src",image);
