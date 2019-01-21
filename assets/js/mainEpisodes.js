  //DOM
  const dataEpisodes = (EPISODES.episodes);
  const containerRoot2 = document.getElementById("root2");
  const filterTemps = document.getElementById("season")
  const showData2 = (dataEpisodes) =>{
    let result2 = "";
    episod(dataEpisodes);
    return result2;
  }

//Filtro
filterTemps.addEventListener("change", () => {
  let condition = filterTemps.value
  let filtered = window.filterSeason (dataEpisodes, condition);

  //limpiando el div
  containerRoot2.innerHTML ="";
  episod(filtered);
})

//Función para ver la data
function episod(dataEpisodes){
  //Limpiando el div
  containerRoot2.innerHTML ="";
  dataEpisodes.forEach(element => {
    containerRoot2.innerHTML += `
    <div class="card">
    <div class="box">
    <div class="href">
    <a href="${element.episodeLink}"></div>
    <h5>Episodio: ${element.episodeNum}<br><span>Temporada: ${element.seasonNum}</span></h5>
    </div>
    </div>`
  });
}

window.onload = showData2(dataEpisodes);
