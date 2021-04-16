const game = require('../dataMapper/gameSocket');

module.exports = {
  async gameRecRoom (socket, roomFront)  { 
    try {
        await game.recGame(roomFront); 
        const { room, id }= await game.getIdGame(roomFront); 
        socket.emit('server_create_game', {
          room,
          id,
        });
    } catch (error) {
      socket.emit('server_create_game_error', {
        error,
      }); 
    }
  },
}  