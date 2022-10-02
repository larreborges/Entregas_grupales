const getData = fetch(
  "https://japceibal.github.io/japflix_api/movies-data.json"
)
  .then((response) => response.json())
  .then((response) => response);

const showCategoriesList = async () => {
  const movieData = await getData;
  let movieList = movieData;

  document.getElementById("btnBuscar").addEventListener("click", function () {
    let htmlContentToAppend = "";
    let informacion = document.getElementById("inputBuscar").value;

    for (let i = 0; i < movieList.length; i++) {
      let movieList = movieData[i];
      let movieGenres = movieList.genres[0].name.toLowerCase();
      let titulo = movieList.title.toLowerCase();
      let identificador = movieList.tagline.toLowerCase();
      
      if (
        titulo.includes(informacion) ||
        movieGenres.includes(informacion) ||
        identificador.includes(informacion) ||
        movieList.overview.includes(informacion)
      ) {
        htmlContentToAppend += `
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
            <li><b>${movieList.title}</b><li>
            <li><small>${movieList.tagline}</small></li>
          </button>
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasTopLabel" style="color:black;">${movieList.title}</h5>
                  <p style="color:black;">${movieList.overview}</p>
                  <p style="color:black;">${movieList.genres.name}</p>
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> More </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Year: ${movieList.release_date} </a></li>
                          <li><a class="dropdown-item" href="#">Runtime: ${movieList.runtime} mins </a></li>
                          <li><a class="dropdown-item" href="#">Budget: $${movieList.budget} </a></li>
                          <li><a class="dropdown-item" href="#">Revenue: $${movieList.revenue} </a></li>
                        </ul>
                    </div>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
                <div class="offcanvas-body">
              </div>
            </div>  
          `;

        for (
          let index = 0;
          index <= Math.round(movieList.vote_average);
          index++
        ) {
          htmlContentToAppend += `
                <span class="fa fa-star checked"></span>
              `;
        }

        for (
          let index = Math.round(movieList.vote_average);
          index < 9;
          index++
        ) {
          htmlContentToAppend += `
                <span class="fa fa-star"></span>
              `;
        }
      }

      document.getElementById("lista").innerHTML = htmlContentToAppend;
    }
  });
};

showCategoriesList();