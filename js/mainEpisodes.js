    //DOM
  const dataEpisodes = (EPISODES.episodes);
  const containerRoot2 = document.getElementById("root2");
  
  //Mostrando data
  const showData2 = (dataEpisodes) =>{
    let result2 = "";
    episod(dataEpisodes);
    return result2;
  }

  const filterTemps = document.getElementById("season")
//Filtro
filterTemps.addEventListener("change", () => {
  let condition = Number(filterTemps.value)
  let filtered = window.filterSeason(dataEpisodes, condition);

  //limpiando el div
  containerRoot2.innerHTML ="";

  episod(filtered);
})

//Función para ver la data
function episod(Data2){
  //Limpiando el div
  containerRoot2.innerHTML ="";
  Data2.forEach(element => {
    containerRoot2.innerHTML += `
    <div class="target col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
    <div class="card-episode">
    <div class="box">
    <div class="href">
    <div "${element.episodeLink}"></div>
    <h4>Capítulo: ${element.episodeNum}<br><h5>"${element.episodeTitle}"</h5><h6>Temporada: ${element.seasonNum}</h6></h4>
    </div>
    </div>
    <p>${element.episodeDescription}</p>
    </div>`
  });
}

window.onload = showData2(dataEpisodes);