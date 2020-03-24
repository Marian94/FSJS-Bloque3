/*
    Este ejercicio debe correr en Chrome.

    Usando sólo un archivo HTML básico y métodos del DOM,
    crea 4 div's y píntalos de colores distintos (usando JS, no CSS!).
    agrega un evento del mouse a cada uno (no vale repetir)

    https://www.w3schools.com/jsref/obj_mouseevent.asp

    Agrega una función handler a cada evento, que cambie a los otros div's de alguna forma.
    Sé creativ@. No repitas eventos ni funciones.
*/

//tu código va aquí vvv

function addDivs () { 
    // create a new div element 
    for(let i = 0; i <=3; i++ ){
        let newDiv = document.createElement("div"); 
        let body = document.getElementById("body"); 
        let id = `Div${i+1}`;
        newDiv.setAttribute("id", id);
        newDiv.setAttribute("class", `btn${id}`);
        // add the newly created element and its content into the DOM 
        document.body.insertBefore(newDiv, body); 
    }
    addButtons();
}
function addButtons(){
     for(let i = 0; i <=3; i++ ){
        let btn = document.createElement("button");
        let id = `Div${i+1}`;
        btn.innerHTML = id
        btn.setAttribute("id", `btn${id}`);
        btn.setAttribute("class", "btnDiv");
        document.getElementById(id).appendChild(btn);
    }
}
function addEvents(id){
    if(id.indexOf("1") > -1)
        document.getElementById("Div1").style.backgroundColor = "#FF7F50";
        document.getElementById("Div1").onclick = function(){
            alert("Hola, diste click a Div1")
        }
    if(id.indexOf("2") > -1)
        document.getElementById("Div2").style.backgroundColor = "#8B008B";
        document.getElementById("Div2").onmouseover = function(){
            this.style.backgroundColor = "black";
        }
    if(id.indexOf("3") > -1)
        document.getElementById("Div3").style.backgroundColor = "#1E90FF";
        document.getElementById("Div3").onmouseenter = function(){
            let p = document.createElement("p");
            p.innerText = "Holi :)";  
            this.appendChild(p); 
        }
    if(id.indexOf("4") > -1)
        document.getElementById("Div4").style.backgroundColor = "#7FFF00";
        document.getElementById("Div4").onmousemove = function(){
           this.innerHTML = "----------------->"
        }
     
}
document.addEventListener('DOMContentLoaded', function() {
    addDivs();
    const btn_div = document.getElementsByClassName("btnDiv");
    for(let i  = 0; i < btn_div.length; i++){
        btn_div[i].addEventListener("click", function(){
            addEvents(`${this.id}`);
        });
    }

});

//tu código va aquí ^^^

//eof
