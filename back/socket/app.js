const uniqid = require('uniqid'); 

const gameController = require('./socketController/gameController');

module.exports = {
  startGame (io, socket) {
    console.log('a user connected :', socket.id); 
    socket.on('front_create_game', async (idUser) =>  {
      const room = uniqid();
      socket.join(room);
      // Insert the romm's number to the table game (room)
      const idGame = await gameController.gameRecRoom(socket, room, idUser);
      if (idGame) {
        socket.emit('server_create_game', {
          idUser,
          room,
        });
      }
      else {
        socket.emit('server_create_game_error', {
          error: 'Creation of game id compromised',
        })
      }
    });

    //Sending to the room all players (id and pseudo)
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

    // Sending five random questions to the room
    socket.on('front_launch_game', async ({ id, room }) => {
      const idGame = await gameController.checkRoom(room);
      if (idGame) {
        const questions = await gameController.sendRandomQuestion(); 
        io.to(room).emit('server_launch_game', {questions, idGame});
      } else {
        socket.emit('server_join_game_error', {
          error: 'Cette partie n\'existe pas!!',
        });
      }
    });

    socket.on('front_send_answer', ({ id, answer, room }) => {
      io.to(room).emit('server_send_answer', {
        id,
        answer,
      });
    });

    //Sendind the id for the player who clicked to the button 'quit the game'
    socket.on('front_leave_game', ({ id, room }) => {
      io.to(room).emit('server_leave_game', {
        id
      });
      socket.leave(room); 
    });

    //! features 
    socket.on('front_send_score', ({room, userID, gameID, score, position, exactAnswer}) => {
      // recup gameID en back 
      //call controler to execute the datamapper function 
      //emit 
      io.to(room).emit('server_end_game', {
        succes: "true" 
      }); 
    }); 

    //Disconnection 
    socket.on('disconnect', () => {
      console.log('user disconnect'); 
    });
  }
    
}