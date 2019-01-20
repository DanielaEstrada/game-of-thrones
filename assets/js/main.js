/*//DOM
const data = window.EPISODES.episodes;



//Inicialización de elementos de Materialize
document.addEventListener('DOMContentLoaded', function () {
  window.M.AutoInit();
});

//Imprime tarjetas de todos los personajes al cargar la página
window.onload = function () {
 */
 const containerRoot = document.getElementById("root");

const data = (DATA.characters);


const showData = (data) =>{
    let result = "";

   data.forEach(element => {

        result = containerRoot.innerHTML += `
        <div>
        <div class="card">
        <div class="box">
        <div class="img">
        <img src=${element.characterImageThumb}>
        </div>
        <h2>${element.characterName}<br></h2>        
      </div>
    </div>`
}
    );


return result;

}
window.onload = showData(data)