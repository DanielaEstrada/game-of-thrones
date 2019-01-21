  //DOM
const dataEpisodes = (EPISODES.episodes);
const containerRoot2 = document.getElementById("root2");

  const showData2 = (dataEpisodes) =>{
    let result2 = "";

    data.forEach(element => {
      if (element.seasonNum !=="") {
        result = containerRoot.innerHTML += `
        <div>
        <div class="card">
        <div class="box">
        <div class="img">
        <h3>${element.episodeTitle}</h3>
        <p>${element.episodeDescription}</p>
        </div>
        <h4>${element.seasonNum}<br></h4>        
        </div>
        </div>
        </div>`
      }
    });
    return result2;
  }
  window.onload = showData2(dataEpisodes);