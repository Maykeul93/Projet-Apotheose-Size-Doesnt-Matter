import {
    stockRoomIntoState,
    launchNewGame,
    setOtherPlayers,
    resetRoom,
} from 'actions/game';

import {
    validateUserAnswer,
    setOtherPlayerAnswer,
    setGameQuestions,
    resetGameState,
    setPlayerLeaveGame,
} from 'actions/gameInterface';

const gameSocketListener = (store) => (next) => (action) => {
    switch (action.type) {
        default: {
            const { id, socket } = store.getState().user;

            if (socket) {
                // get the new room here and set the state
                socket.on('server_create_game', (data) => {
                    store.dispatch(stockRoomIntoState(data.room));
                });

                socket.on('server_join_game', (data) => { 
                    store.dispatch(stockRoomIntoState(data.room));
                    const otherPlayers = data.players.filter((player) => player.id !== id);
                    store.dispatch(setOtherPlayers(otherPlayers));
                });

                socket.on('server_launch_game', ({ idGame, questions }) => {
                    // stockage de l'id de la game
                    store.dispatch(setGameQuestions(questions));
                    store.dispatch(launchNewGame());
                });
    
                socket.on('server_send_answer', ({ id: playerId, answer }) => {
                    if ( playerId === id){
                        store.dispatch(validateUserAnswer(answer));
                    }
                    else {
                        store.dispatch(setOtherPlayerAnswer(playerId, answer));
                    }
                });

                socket.on('server_leave_game', ({ id: playerId }) => {
                    if (playerId === id){
                        store.dispatch(resetGameState());
                        store.dispatch(resetRoom());
                    }
                    else {
                        store.dispatch(setPlayerLeaveGame(playerId));
                    }
                });
            }
            next(action);
        }
    }
};

export default gameSocketListener;