var socket = io();

var name = '';
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');
let btnMinus = document.getElementById('minus-chat');
let btnShowChat = document.getElementById('chat-ocult');
let btnConnect = document.getElementById('btnConnect');
let btnDisconn = document.getElementById('btnDisconn');
let inName = document.getElementById('name-user');

btnConnect.addEventListener('click', (e) => {
    $('#cm').show();
    $('#container-connect').hide();
    $('#form').show();
    if(inName.value==''){
        name='Anonimo';
        sendMsgAction({name: name, message: 'newUser'});
    }else{
        name = inName.value;
        sendMsgAction({name: name, message: 'newUser'});
    }

    document.getElementById('indicator').style.color = "green";
});

btnDisconn.addEventListener('click', () => {
    $('#cm').hide();
    $('#container-connect').show();
    $('#form').hide();
    sendMsgAction({name: name, message: 'outUser'});
    name='';

    document.getElementById('indicator').style.color = "red";
})

$('#chat').hide();
$('#cm').hide();
$('#container-connect').show();
$('#form').hide();
$('#alert-chat').hide();

btnMinus.addEventListener('click', () => {
    $("#chat").hide();
    $('#chat-ocult').show();
})

btnShowChat.addEventListener('click', () => {
    $("#chat").show();
    $('#chat-ocult').hide();
    $('#alert-chat').hide();
    cm.scrollTop = cm.scrollHeight;
});

$('#close-alert-chat').click(function(){
    $('#alert-chat').hide();
});

// SERVIDOR

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value){
        sendMsgAction({name: name, message: input.value});
        input.value = '';
    }
});

socket.on('chat message', function(msg) {
    let color = 'black' ;
    let classU = '';
    if (name == msg.name){
        color = 'blue';
        classU = 'im';
    }
    if (name == ''){
        
    }else{
        let item = '';
        if(msg.message != 'newUser' && msg.message != 'outUser'){
            item = `<li>
                        <div class="message ${classU}">
                            <span class="name-user" style="color:${color}">${msg.name}</span>
                            <p class="conten-msg">${msg.message}</p>
                        </div>
                    </li>`;
        }else if(msg.message == 'newUser'){
            classU = 'act';
            item = `<li>
                        <div class="message ${classU}">
                            <p><span class="" style="font-weight: bold">${msg.name}</span> se ha conectado</p>
                        </div>
                    </li>`; 
        }else{
            classU = 'act';
            item = `<li>
                        <div class="message ${classU}">
                            <p><span class="" style="font-weight: bold">${msg.name}</span> se ha desconectado</p>
                        </div>
                    </li>`; 
        }
        
        $('#messages').append(item);
        let cm = document.getElementById('cm');
        cm.scrollTop = cm.scrollHeight;
    }
});

// ATAJOS

window.addEventListener('keyup', (event) => {

    key = event.key;

    if (event.ctrlKey && key == 'c') {
        $('#chat').show();
        $('#container-msg').focus();
        $('#chat-ocult').hide();
        cm.scrollTop = cm.scrollHeight;
    }

});

function sendMsg(msg){
    let messageComp = 'Diapositiva ' + msg;
    if(msg<=0){

    }else if(name==''){

    }else{
        socket.emit('chat message', {name: name, message: messageComp});
    }
}

function sendMsgAction(msg){
    if(msg<=0){

    }else if(name==''){

    }else{
        socket.emit('chat message',msg);
    }
}

let timeout;

myFunction();

function myFunction() {
  timeout = setTimeout(alertFunc, 15000);
}

function alertFunc() {
    if(name == ''){
        $('#alert-chat').show();
    }
}