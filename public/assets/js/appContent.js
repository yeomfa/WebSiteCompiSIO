//Variables

let num_2 = document.getElementById('number_2');
let slides = document.getElementsByClassName('slide');
var slideGroup = '';
var numSlide = null;
var bandId = 0;

//Inicializamos vista

$("#result").hide();
$("#main-tool").hide();
$("#back-slide").hide();

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
    if(this.id=='grammar'){
        slideGroup = this.id;
        numSlide = 1;
        document.slider.src = 'assets/content/Compiladores/grammar/Slides/' + numSlide + '.jpg';
        $("#description").load('assets/content/Compiladores/grammar/Texts/' + numSlide + '.txt');
        $("#num").text(numSlide);
        $("#main").hide();
        $("#main-tool").show();
        $("#back-slide").show();
        $("#footer").hide();
        sendMsg(numSlide)
    }else{
        slideGroup = 'other'
        numSlide = this.id;
        document.slider.src = 'assets/content/Compiladores/Slides/' + numSlide + '.jpg';
        $("#description").load('assets/content/Compiladores/Texts/' + numSlide + '.txt');
        $("#num").text(numSlide);
        $("#main").hide();
        $("#main-tool").show();
        $("#back-slide").show();
        $("#footer").hide();
        sendMsg(numSlide);
    }
}