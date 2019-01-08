const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.emit('newMessage', {
        from: 'Anne',
        text: 'hello from the server side.',
        createdAt: 123
    });

    socket.on('disconnect', () => {
        console.log('disconnected from client');
    });
});

server.listen(port, () => {
    console.log(`server is running on port ${port}.`);
});