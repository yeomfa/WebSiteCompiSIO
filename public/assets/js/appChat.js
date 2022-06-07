var socket = io();

var name = prompt('¿Como te llamas?');
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

// SERVIDOR

socket.emit('chat message', `${name} se ha conectado`);

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
    cm.scrollTop = cm.scrollHeight
});