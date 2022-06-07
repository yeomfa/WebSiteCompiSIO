//Variables
let num = document.getElementById("number");
let btn_search = document.getElementById("btn-search");
let fullS = document.getElementById("btn-full");
let slideFull = document.getElementById("slide");
let btnBackSlides = document.getElementById('back-slide');
let btnNext = document.getElementById('next');
let btnBack = document.getElementById('back');

//Inicializaciones de pantalla

$("#no-text").hide();

//Funciones

function UrlExists(url) {
   var http = new XMLHttpRequest();
   http.open('HEAD', url, false);
   http.send();
   return http.status!=404;
}

function loadFiles(num) {
    let t ='';
    let s = '';

    if(slideGroup == 'grammar'){
        s = 'assets/content/Compiladores/grammar/Slides/' + num + '.jpg';
        t = 'assets/content/Compiladores/grammar/Texts/' + num + '.txt';
    }else{
        s = 'assets/content/Compiladores/Slides/' + num + '.jpg';
        t = 'assets/content/Compiladores/Texts/' + num + '.txt';
    }
    
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
    sendMsg(numNext);
    loadFiles(numNext);
}

function back() {
    let numBack = numSlide;
    numBack--;

    sendMsg(numBack);
    loadFiles(numBack);

}

function toggleFullScreen() {
    slideFull.requestFullscreen();
}

// //Buscar por número

num.addEventListener('keydown', (event) => {

    let key = event.key;
    let numb = event.path[0].value;

    if (key == "Enter") {
        $('#number').blur();

        sendMsg(numb);
        loadFiles(numb);
    }

});

btn_search.addEventListener('click', (event) => {

    let numb = document.getElementById("number").value;

    sendMsg(numb);
    loadFiles(numb);  
    
});

// Pasar presentaciones con flechas

btnBack.addEventListener('click', () => {
    back();
});

btnNext.addEventListener('click', () => {
    next();
});

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

//Botón volver

btnBackSlides.addEventListener('click', () => {
    $("#main").show();
    $("#main-tool").hide();
    $("#back-slide").hide();
    $("#footer").show();
});

//Atajos

window.addEventListener('keyup', (event) => {

    key = event.key;

    if (event.ctrlKey && key == 'b') {
        $('#number').focus();
    } else if (event.shiftKey && key == 'D') {
        $('.descript').focus();
    }

});
