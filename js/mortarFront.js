import { shows }from "./objetos.js";
console.log(shows);

// montando o grid de shows 
// passando o grid shows para o JS, sera nele que os cards irão ficar 
const gridshows = document.querySelector('#gridShows');

// montando os shows dentro dos cards 
shows.forEach(show => {
    gridshows.innerHTML += `
    <div class="col-md-6 col-lg-4 my-3">
            <div class="card">
                <a href="" class="text-decoration-none text-dark">
                    <img src="${show.banner}" class="card-img-top" alt="${show.artista}" loading="lazy">
                    <div class="card-body">
                        <h4 class="my-3 bd-bottom">${show.artista}</h4>
                        <div class="d-flex justify-content-between">
                            <p>Local: ${show.local} </p>
                            <p>Data: ${show.data} </p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p>Horário: ${show.horario} </p>
                            <p>Ingresso: ${show.tipo_ingresso} </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `
}) 








