const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

require('dotenv').config();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', (socket) => {
  let name = '';
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        name = msg.name;
    });

    socket.on('disconnect', () => {
      io.emit('chat message', {name: name, message:'outUser'});
    });

});

server.listen(process.env.PORT, () => {
  console.log(`listening on * ${process.env.PORT}`);
});