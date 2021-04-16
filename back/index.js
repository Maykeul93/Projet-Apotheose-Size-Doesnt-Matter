require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
}); 
const cors = require('cors');

const uniqid = require('uniqid'); 

const bodyParser = require('body-parser'); //parse body's answer for token 

const routers = require('./routers');

// Body Parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});

// here u can filter users who can access to the API 
app.use(cors({
  origin: '*', // give autorisation to all extern users to use this API 
}));

app.use(routers); 


io.on('connection', (socket) => {
    console.log('a user connected :', socket.id); 
    socket.on('front_create_game', (id) => {
      const room = uniqid();
      socket.join(room);
      // requete SQL pour créer un enregistrement dans Game et y stocker la room
      // utilisation de l'id de l'utilisateur pour le lier via la table de liaison à la nouvelle partie
      // Si une erreur survient, envoyer l'erreur (bloc if pour envoyer l'event custom correspondant)
      socket.emit('server_create_game', {
        room,
        // id de la partie (peut etre)
      });

      // socket.emit('server_create_game_error', {
      //   error: sendError
      // });
    });

    socket.on('front_join_game', ({ id, room }) => {
      // Check in the database if code Room exists

      // if exists, connect the player to the room
      // Connect the player to the game into the Database
      // if (exist) {
        socket.on('server_join_game', {
          room,
          // id de la partie (peut etre)
        });
      // }
      // if doesn't exist, send an error to the front
      // else {
        socket.on('server_join_game_error', {
          // error: sendError
        });
      // }
    });

    socket.on('disconnect', () => {
      console.log('user disconnect'); 
    });
});



server.listen(process.env.PORT || 3000, () => {
  console.log('Server running on:', process.env.PORT);
});
