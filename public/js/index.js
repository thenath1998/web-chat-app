let socket = io();

socket.on('connect', function () {
    console.log('connected to server');
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

//new messages to list
socket.on('newMessage', function (newMessage) {
    let formattedTime = moment(newMessage.createdAt).format('h:mm a');
    console.log('new Message', newMessage);

    var li = jQuery('<li></li>');
    li.text(`${newMessage.from} ${formattedTime}: ${newMessage.text}`);
    jQuery('#messages').append(li);
});

//new location to list
socket.on('newLocationMessage', function (newMessage) {
    let formattedTime = moment(newMessage.createdAt).format('h:mm a');
    console.log('new Message', newMessage);

    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My current location</a>');

    li.text(`${newMessage.from} ${formattedTime} `);
    a.attr('href', newMessage.url);

    li.append(a);
    jQuery('#messages').append(li);
});


//send new messages on send click
jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    var messageTextBox = jQuery('[name=message]');
    socket.emit('createMessage', {
        from: 'User',
        text: messageTextBox.val()
    }, function () {
        messageTextBox.val('');
    });
});

//send location button 
var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser.');
    }

    locationButton.attr('disabled', 'disabled').text('Sending location...');

    navigator.geolocation.getCurrentPosition(function (position) {
        locationButton.removeAttr('disabled').text('Send location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function () {
        locationButton.removeAttr('disabled').text('Send location');
        alert('Unable to fetch location.');
    });
});