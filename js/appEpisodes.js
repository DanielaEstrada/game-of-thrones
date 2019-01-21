//Función para filtrar
const filterSeason = (dataEpisodes, condition) => {
    //filter es un ciclo iterativo como el for, forech, reviw
    const filteredSeason= dataEpisodes.filter(element => {
        return element.seasonNum === condition
    })
    return filteredSeason;
  };
  window.filterSeason=filterSeason;