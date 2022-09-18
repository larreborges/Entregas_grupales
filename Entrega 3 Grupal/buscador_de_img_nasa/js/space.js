
document.getElementById("btnBuscar").addEventListener("click", function () {
  let buscador = "https://images-api.nasa.gov/search?q=";
  let buscado = document.getElementById("inputBuscar").value.toLowerCase();
  let buscadoTotal = buscador + buscado;
  console.log(buscadoTotal);
  const getPlanets = fetch(buscadoTotal)
    .then((response) => response.json())
    .then((response) => response);

  const planetario = async () => {
    const planetaData = await getPlanets;
    let planeta = planetaData.collection.items;
    let htmlContentToAppend = "";
    //document.getElementById("btnBuscar").addEventListener("click", function () {
      for (let i = 0; i < planeta.length; i++) {
        let title = planeta[i].data[0].title;
        let description = planeta[i].data[0].description;
        let fecha = planeta[i].data[0].date_created;
        let img = ''
        if (planeta[i].links) {
          img = planeta[i].links[0].href;
        }
        else {
        }
        htmlContentToAppend += `
                
                <div class="col">
                    <div class="card h-100">
                    <div class="">
                    <img src="${img}" class="card-img-top img-thumbnail imagen" alt="${img}">
                    <div class="card-body">
                        <h5 class="card-title">${title} </h5>
                        <p class="card-text">${description} </p>
                        <p class="card-text">${fecha}</p>
                    </div>
                    </div>
                </div>
                </div>
                `;
      }
      document.getElementById("contenedor").innerHTML = htmlContentToAppend;
    }
    planetario();
  });
  //planetario();
//});
