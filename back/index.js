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

const gameController = require('./controllers/gameController'); 

io.on('connection', (socket) => {
    console.log('a user connected :', socket.id); 
    socket.on('front_create_game', (idUser) => {
      const room = uniqid();
      socket.join(room);
      // requete SQL pour créer un enregistrement dans Game et y stocker la room
      const idGame = gameController.gameRecRoom(socket, room, idUser); 
    });

    socket.on('front_join_game', async ({ id, room }) => {
      // Check in the database if code Room exists
      const idGame = await gameController.checkRoom(room);
      if (idGame) {
        const otherPlayers = await gameController.getAllPlayers(idGame);
        await gameController.boundGameOnUser(idGame, id);
        socket.join(room);
        socket.emit('server_join_game', {
          room,
          // id de la partie (peut etre)
          // tableau avec tous les joueurs déjà présents
          otherPlayers,
        });
      }
      else {
        socket.emit('server_join_game_error', {
          error: 'Cette partie n\'existe pas!!',
        });
      }
      // requete api pour sélectionner tous les joueurs présents dans la partie
      // Retourner tableau d'objet des joueurs dans la réponse socket
      // Pour chaque joueur --> id, pseudo, (avatar, a voir plus tard)
    });

    socket.on('disconnect', () => {
      console.log('user disconnect'); 
    });
});



server.listen(process.env.PORT || 3000, () => {
  console.log('Server running on:', process.env.PORT);
});
