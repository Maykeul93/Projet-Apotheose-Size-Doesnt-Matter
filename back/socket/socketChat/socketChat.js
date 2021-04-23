module.exports = {

initChat (io, socket) {

    socket.on('chat-message', function (message) { // j'écoute le message
    console.log('message : '+ message);
    io.emit('chat-message', message); // je renvoi le message
    
    });
},

}    
   
     




