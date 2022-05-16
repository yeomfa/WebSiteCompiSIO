//Variables

let num = document.getElementById("number");
let btn_search = document.getElementById("btn-search");
let fullS = document.getElementById("btn-full");
let slideFull = document.getElementById("slide");

//Inicializaciones de pantalla

$("#no-text").hide();
loadFiles(numSlide);

//Funciones

function UrlExists(url) {
   var http = new XMLHttpRequest();
   http.open('HEAD', url, false);
   http.send();
   return http.status!=404;
}

function loadFiles(num) {
    if(num == ''){

    }else{  
        socket.emit('chat message', `${name}: ${num}`);
    }

    let s = 'assets/content/Compiladores/Slides/' + num + '.jpg';
    let t = 'assets/content/Compiladores/Texts/' + num + '.txt';
    
    if(UrlExists(s)){
        document.slider.src = s;
        numSlide = num;
        if(UrlExists(t)){
            $("#text").show();
            $("#no-text").hide();
            $("#description").load(t);
        }else{
            $("#text").hide();
            $("#no-text").show();
        }
        $("#num").text(num);
    }

}

function next() {
    let numNext = numSlide;
    numNext++;

    loadFiles(numNext);
}

function back() {
    let numBack = numSlide;
    numBack--;

    loadFiles(numBack);

}

function toggleFullScreen() {
    slideFull.requestFullscreen();
}

//Buscar por número

num.addEventListener('keydown', (event) => {

    let key = event.key;
    let numb = event.path[0].value;

    if (key == "Enter") {
        $('#number').blur();
        loadFiles(numb);
    }

});

btn_search.addEventListener('click', (event) => {

    let numb = document.getElementById("number").value;
    loadFiles(numb);  
    
});

// Pasar presentaciones con flechas
window.addEventListener("keydown", (event) => {

    let key = event.key;

    if (key == "ArrowRight") {
        next();
    } else if (key == "ArrowLeft") {
        back();
    }

});

// Pantalla completa

fullS.addEventListener("click", (event) => {

    toggleFullScreen();

});

//Atajos

window.addEventListener('keyup', (event) => {

    key = event.key;

    if (key == 'b') {
        $('#number').focus();
    } else if (key == 'd') {
        $('.descript').focus();
    }

});

