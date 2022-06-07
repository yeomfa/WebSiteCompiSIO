var socket = io();

var name = '';
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');
let btnMinus = document.getElementById('minus-chat');
let btnShowChat = document.getElementById('chat-ocult');
let btnConnect = document.getElementById('btnConnect');
let inName = document.getElementById('name-user');

btnConnect.addEventListener('click', () => {
    $('#cm').show();
    $('#container-connect').hide();
    $('#form').show();
    if(inName.value==''){
        name='Anonimo';
        socket.emit('chat message', `${name} se ha conectado`);
    }else{
        name = inName.value;
        socket.emit('chat message', `${name} se ha conectado`);
    }
});

document.getElementById('indicator').style.color = "green";

$('#chat').hide();
$('#cm').hide();
$('#container-connect').show();
$('#form').hide();

btnMinus.addEventListener('click', () => {
    $("#chat").hide();
    $('#chat-ocult').show();
})

btnShowChat.addEventListener('click', () => {
    $("#chat").show();
    $('#chat-ocult').hide();
    cm.scrollTop = cm.scrollHeight;
});

// SERVIDOR

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value){
        socket.emit('chat message', name + ": " + input.value);
        input.value = '';
    }
});

socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    let cm = document.getElementById('cm');
    cm.scrollTop = cm.scrollHeight;
});

// ATAJOS

window.addEventListener('keyup', (event) => {

    key = event.key;

    if (event.ctrlKey && key == 'c') {
        $('#chat').show();
        $('#container-msg').focus();
        $('#chat-ocult').hide();
    }

});

function sendMsg(msg){
    socket.emit('chat message', `${name}: ${msg}`);
}