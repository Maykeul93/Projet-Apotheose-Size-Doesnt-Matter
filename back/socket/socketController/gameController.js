const game = require('../socketDatamapper/gameSocket');

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
      const players = await game.getAllPlayersInOneGame(idGame);
      return players;
    } catch (error) {
      return false;
    }
  }, 

  async sendRandomQuestion () {
    try {
      const sendRandQuestion = await game.getRandomQuestion();
      return sendRandQuestion; 
    } catch (error) {
      return false; 
    }
  }, 
  async insertScoreGame (idGame, globalScore) {
    try { 
      for (let element of globalScore) {
        let id = element.id; 
        let score = element.score; 
        let position = globalScore.indexOf(element) + 1; 
        let exactAnswer = element.exactAnswer_count;   
        await game.insertHistory(id, idGame, score, position, exactAnswer); 
      }
    }catch (error) {
      return false; 
    }
  }
}


