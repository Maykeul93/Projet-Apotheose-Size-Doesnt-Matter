require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});


io.on('connection', (socket) => {
    console.log('a user connected'); 
    socket.on('disconnect', () => {
      console.log('user disconnect'); 
    })
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Server running on:', process.env.PORT);
});
