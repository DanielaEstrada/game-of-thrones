//DOM
const data = (DATA.characters);
const containerRoot = document.getElementById("root");

  //Mostrando data
  const showData = (data) =>{
    let result = "";

    //Función para ver data
    //Limpiando el div
    containerRoot.innerHTML = "";
    data.forEach(element => {
      if (element.characterName !=="") {
        result = containerRoot.innerHTML += `
        <div>
        <div class="card">
        <div class="box">
        <div class="img">
        <img src=${element.characterImageThumb}>
        </div>
        <h2>${element.characterName}<br></h2>        
        </div>
        </div>
        </div>`
      }
    });
    return result;
  }
  window.onload = showData(data);