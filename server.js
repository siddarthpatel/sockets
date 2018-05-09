var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket){
	console.log('User connected via socket.io');

	// send a message to client
	socket.emit('message', {
		text: 'Welcome to the chat app!'
	});

	//recieve/listen to a message on server from client
	socket.on('message', function(message){
		console.log('New message from client ' + message.text);
		socket.broadcast.emit('message', message); //send/broadcast the message from the sender to other clients
	});

});

http.listen(PORT, function(){
	console.log('Server started');
});