const getData = fetch('https://japceibal.github.io/japflix_api/movies-data.json')
.then(response => response.json())
.then(response => (response))

const showCategoriesList = async () => {
    const movieData = await getData;
    let movieList = movieData

document.getElementById("btnBuscar").addEventListener("click", function(){
        
                for(let i=0; i < movieList.length; i++)   {
                    let htmlContentToAppend = ""; 
                    let informacion = document.getElementById("inputBuscar").value
                    let movieList = movieData[i]
                    let movieGenres = movieList.genres[0].name.toLowerCase()
                    let titulo = movieList.title.toLowerCase()
                    let identificador = movieList.tagline.toLowerCase()
                    console.log(informacion)
                    console.log(titulo)
        
                    if (titulo.includes(informacion) || movieGenres.includes(informacion) || 
                    identificador.includes(informacion) || movieList.overview.includes(informacion)) {

                    htmlContentToAppend += `
                        <li><b>${movieList.title}</b><li>
                        <li><small> ${movieList.tagline}</small></li>
                        <li id = "valorar"></li>
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