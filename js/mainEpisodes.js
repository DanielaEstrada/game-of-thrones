const dataEpisodes = (EPISODES.episodes);

const containerEpisodes = document.getElementById("root2");



//console.log(dataEpisodes);
    //console.log(data);

    document.getElementById("seasons").addEventListener("click",()=>{
     document.getElementById("root2").style.display="block";
   })


    const showEpisodes = (dataEpisodes) => {
      let result2 = "";

    //let arrEpisodes = [];

    dataEpisodes.forEach(element => {
      if (element.seasonNum !=="") {
        result = containerEpisodes.innerHTML += `
        <div>
        <div class = "card">
        <div class = "box">
        <div class = "img">
        <h2>${element.episodeTitle}</h2>
        </div>
        <p>${element.episodeDescription}</p>
        <h3>${element.seasonNum}</h3>
        </div>
        </div>    
        </div>`
      }
    });
    return result2;
  }

  window.onload = showEpisodes(dataEpisodes);