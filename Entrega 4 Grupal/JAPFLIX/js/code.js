const getData = fetch('https://japceibal.github.io/japflix_api/movies-data.json')
.then(response => response.json())
.then(response => (response))

const showCategoriesList = async () => {
    const movieData = await getData;
    let movieList = movieData

document.getElementById("btnBuscar").addEventListener("click", function(){
    let htmlContentToAppend = "";
                for(let i=0; i < movieList.length; i++)   {
                     
                    let informacion = document.getElementById("inputBuscar").value
                    let movieList = movieData[i]
                    let movieGenres = movieList.genres[0].name.toLowerCase()
                    let titulo = movieList.title.toLowerCase()
                    let identificador = movieList.tagline.toLowerCase()
        
                    if (titulo.includes(informacion) || movieGenres.includes(informacion) || 
                    identificador.includes(informacion) || movieList.overview.includes(informacion)) {

                    htmlContentToAppend += `
                        <li><b>${movieList.title}</b><li>
                        <li><small>${movieList.tagline}</small></li>
                        <li id = "valorar"></li>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

                        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasTopLabel" style="color:black;" >${movieList.title}</h5>
                                <p style="color:black;">${movieList.overview}</p>
                                <p> </p>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    </div>
                                </div>
                        `
        
                        for (let index = 0; index < movieList.vote_average; index++) {
                            htmlContentToAppend += `
                            <span class="fa fa-star checked"></span>
                            `
                        }
        
                        for (let index = movieList.vote_average; index < 10; index++) {
                            htmlContentToAppend += `
                            <span class="fa fa-star"></span>
                            `
                        }
                    }
                    
                    document.getElementById("lista").innerHTML = htmlContentToAppend;
                    
            }
                
    }

)}

showCategoriesList();