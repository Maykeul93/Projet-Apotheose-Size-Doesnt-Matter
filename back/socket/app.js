const uniqid = require('uniqid'); 
const gameController = require('./socketController/gameController');


module.exports = {
  startGame (io, socket) {
    console.log('a user connected :', socket.id); 
    socket.on('front_create_game', async ({'id':idUser, 'avatar':avatarUser}) =>  {
      //Update the player'avatar by his selection in the room
      const creator = await gameController.updateAvatar(idUser, avatarUser); 
      //Create a room number random
      const room = uniqid();
      socket.join(room);
      // Insert the romm's number to the table game (room)
      const idGame = await gameController.gameRecRoom(socket, room, idUser, avatarUser);
      if (idGame) {
        //renvoyer l'avatar 
        socket.emit('server_create_game', {
          idUser,
          room,
          creator
        });
      }
      else {
        socket.emit('server_create_game_error', {
          error: 'Creation of game id compromised',
        })
      }
    });

    //Sending to the room all players (id and pseudo)
    socket.on('front_join_game', async ({ id, room, avatar }) => {
      // Check in the database if code Room exists
      //! Gestion d'erreur a revoir
      const idGame = await gameController.checkRoom(room);
      if (idGame) {
        //mettre l'avatar du user aussi 
        await gameController.updateAvatar(id, avatar);
        await gameController.boundGameOnUser(idGame, id);
        //renvoyer l'avatar dans la fonction ci dessous
        const players = await gameController.getAllPlayers(idGame); 
        if (players.length > 5) {
          await gameController.deletePlayer(idGame, id, room); 
          return socket.emit('server_join_game_error', {
            error: 'Le nombre maximal de joueur dans une partie est atteint',
          });
        }
        console.log(players.length); 
        const creator = players[0].id; 
        console.log(creator);
        socket.join(room);
        io.to(room).emit('server_join_game', {
          room,
          idGame,
          players, 
          creator
        });
      }
      else {
        socket.emit('server_join_game_error', {
          error: 'Cette partie n\'existe pas!!',
        });
      }
    });

    socket.on('front_send_is_ready', ({id:userId, room, isReady}) => {
      io.to(room).emit('server_send_is_ready', {
        userId, 
        isReady
      })
    }); 

    socket.on('front_user_change_avatar', ({ id: userId, avatar, room}) => {
      io.to(room).emit('server_user_change_avatar', {
        userId,
        avatar,
      });
    });

    // Sending five random questions to the room
    socket.on('front_launch_game', async ({ allPlayers, room }) => {
      const idGame = await gameController.checkRoom(room); 
      if (idGame) {
        const insert = await gameController.insertPlayer(idGame, room); 
        const questions = await gameController.sendRandomQuestion(); 
        io.to(room).emit('server_launch_game', {
          questions, 
          idGame
        });
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
    socket.on('front_leave_game', async ({ id, room, page }) => {
      const idGame = await gameController.checkRoom(room);
      if (page === "room") {
        await gameController.deletePlayer(idGame, id, room); 
      }
      io.to(room).emit('server_leave_game', {
        id
      });
      socket.leave(room); 
    });

    //Insert score for each player after the end of the game
    socket.on('front_send_score', async ({ room, idGame, globalScore }) => {
      const createHistory = await gameController.insertScoreGame(idGame, globalScore); 
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