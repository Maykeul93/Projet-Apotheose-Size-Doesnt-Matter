module.exports = {

initChat (io, socket) {
    socket.on('front_chat_send_message', function ({ id, pseudo, message, room }) { 
        io.to(room).emit('server_chat_send_message', {
            id,
            pseudo,
            message,
        });
    });
},

}    
   
     




