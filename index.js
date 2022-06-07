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
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
});

server.listen(process.env.PORT, () => {
  console.log(`listenin on * ${process.env.PORT}`);
});