//si hay lista en el local storage no hacer nada, si no hay, hacerla

let boton = document.getElementById("agregar");
let boton2 = document.getElementById("limpiar");

let cosita = localStorage.getItem('listaCompletaItem');
document.getElementById('contenedor').innerHTML = cosita
let lista = [];
lista.push(cosita);

function agregarDatos(){
    
    boton.addEventListener("click", function setDato() {
        
        let nombre = document.getElementById("item").value;
        let nombre2 = JSON.stringify(nombre);
        localStorage.setItem('listaItem', nombre2);
        JSON.parse(localStorage.getItem('listaItem'));
        document.getElementById("contenedor");
        lista.push(nombre2);
        console.log(lista);
        localStorage.setItem('listaCompletaItem', lista)
        let cosita = localStorage.getItem('listaCompletaItem');
        document.getElementById('contenedor').innerHTML = cosita

    })

}

function removerDatos() {
    
    boton2.addEventListener("click", function noSetDato() {
        localStorage.removeItem('listaItem');
        localStorage.removeItem('listaCompletaItem');
        lista = [];
        document.getElementById("contenedor").innerHTML = "";
    })

}

agregarDatos();

removerDatos();