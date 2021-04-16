const game = require('../dataMapper/gameSocket');

module.exports = {
  async boundGameOnUser(idGame, idUser){
    try {
      await game.boundGameIdonUser(idUser, idGame); 
      return true;
    } catch (error)  {
      return false; 
    }
  },

  async gameRecRoom (socket, roomFront, idUser)  { 
    try {
      // Insert a game into the database & create room property
        await game.recGame(roomFront);
        const { room, id } = await game.getIdGame(roomFront);
      // bound a user with a game in database
        const isBounded = await this.boundGameOnUser(id, idUser);
        if (isBounded) {
          socket.emit('server_create_game', {
            room,
            id,
          });
          return id;
        }
        else {
          throw new Error ('Error Server: Can not bound game and user');
        }
    } catch (error) {
      socket.emit('server_create_game_error', {
        error,
      }); 
    }
  },
  async checkRoom(room) {
    try {
      const idGame = await game.roomIsExist(room);
      return idGame;
    } catch (error) {
      return false;
    }
  },
  async getAllPlayers(idGame) {
    try {
      const idPlayers = await game.getAllPlayersInOneGame(idGame);
      const players = await idPlayers.map(async (player) => {
        return (await game.playerPseudo(player.user_id));
      });
      console.log('players', players);
      return players;
    } catch (error) {
      return error;
    }
  }
}


