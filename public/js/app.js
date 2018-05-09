var socket = io();

socket.on('connect', function(){
	console.log('Connected to socket.io server!');
});

// listen/recieve a message from the server to client
socket.on('message', function (message){
	console.log('New message at client');
	console.log(message.text);
});

// //send a message to the server
// socket.emit('message', {
// 		text: 'Hello! I am a client user'
// });