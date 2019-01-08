let socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'sumon',
        text: 'Hello from the client side'
    });
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newMessage', function(newMessage){
    console.log('new Message', newMessage);
});