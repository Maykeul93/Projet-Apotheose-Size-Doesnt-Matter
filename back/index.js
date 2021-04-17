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
      //! Gestion d'erreur a revoir
      const idGame = await gameController.checkRoom(room);
      if (idGame) {
        await gameController.boundGameOnUser(idGame, id);
        const players = await gameController.getAllPlayers(idGame);
        socket.join(room);
        io.to(room).emit('server_join_game', {
          room,
          idGame,
          players,
        });
      }
      else {
        socket.emit('server_join_game_error', {
          error: 'Cette partie n\'existe pas!!',
        });
      }
      //ajouter avatar pour plus tard
    });

    socket.on('front_launch_game', ({ id, room }) => {
      console.log(id, ' lance la partie!');
      io.to(room).emit('server_launch_game');
    });

    socket.on('front_send_answer', ({ id, answer, room }) => {
      io.to(room).emit('server_send_answer', {
        id,
        answer,
      });
    });

    socket.on('disconnect', () => {
      console.log('user disconnect'); 
    });
});


server.listen(process.env.PORT || 3000, () => {
  console.log('Server running on:', process.env.PORT);
});
