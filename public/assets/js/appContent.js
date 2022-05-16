//Variables

let num_2 = document.getElementById('number_2');
let slides = document.getElementsByClassName('slide');
let btnMinus = document.getElementById('minus-chat');
let btnShowChat = document.getElementById('chat-ocult');
var numSlide = "";
var bandId = 0;

$('#chat').hide();

btnMinus.addEventListener('click', () => {
    $("#chat").hide();
    $('#chat-ocult').show();
})

btnShowChat.addEventListener('click', () => {
    $("#chat").show();
    $('#chat-ocult').hide();
});

//Inicializamos vista
$("#result").hide();
$("#main-tool").hide();

//Buscar por número
num_2.addEventListener('keyup', (event) => {

    let key = event.key;
    
    if(!document.getElementById('number_2').value){
        $("#grid").show();
        $("#result").hide();
    }else if(key == 'Enter'){
            $('#number_2').blur()
            $("#grid").hide();
            $("#result").show();
            numSlide = document.getElementById('number_2').value;

            if(bandId == 0){
                document.getElementById("0").id = numSlide;
                bandId = numSlide;
            }else{
                document.getElementById(bandId).id = numSlide
                bandId = numSlide;
            }

            document.miniSlide.src = 'assets/content/Compiladores/Slides/' + numSlide + '.jpg';
            $("#miniTitle").text(numSlide);
    }

});

//Acceder por selección
for(var i = 0; i<slides.length; i++){
    slides[i].addEventListener('click', checkDiv, false);
}

function checkDiv(){
    numSlide = this.id;
    document.slider.src = 'assets/content/Compiladores/Slides/' + numSlide + '.jpg';
    $("#description").load('assets/content/Compiladores/Texts/' + numSlide + '.txt');
    $("#num").text(numSlide);
    $("#main").hide();
    $("#main-tool").show();
    $("#footer").hide();
}

//Atajos

window.addEventListener('keyup', (event) => {

    key = event.key;

    if(key == 'c'){
        $('#chat').focus();
    }

});