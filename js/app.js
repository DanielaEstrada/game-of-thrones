//Función para filtrar
const filterSeason = (dataEpisodes, condition) => {
    
    if (condition == 0){
    	return dataEpisodes;
    }
    const filteredSeason= dataEpisodes.filter(element => {
        return element.seasonNum === condition
    })
    return filteredSeason;
  };
  window.filterSeason=filterSeason;