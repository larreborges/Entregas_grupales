const getData = fetch('https://japceibal.github.io/japflix_api/movies-data.json')
.then(response => response.json())
.then(response => (response))

document.getElementById("btnBuscar").addEventListener("click", function(){

    let informacion = document.getElementById("inputBuscar").value

    if (movieList.title.includes(informacion) || movieList.genres.includes(informacion) || 
    movieList.tagline.includes(informacion) || movieList.overview.includes(informacion)) {
        


    }

})



const showCategoriesList = async () => {
    const movieData = await getData;
        let movieList = movieData
        let htmlContentToAppend = ""; 

        for(let i=0; i < movieList.length; i++)   {         
            let movieList = movieData[i]

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
        
showCategoriesList();