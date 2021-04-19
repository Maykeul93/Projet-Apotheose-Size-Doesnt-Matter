import {
    stockRoomIntoState,
    launchNewGame,
    setOtherPlayers,
} from 'actions/game';

import {
    validateUserAnswer,
    setOtherPlayerAnswer,
    setGameQuestions,
} from 'actions/gameInterface';

const gameSocketListener = (store) => (next) => (action) => {
    switch (action.type) {
        default: {
            const { id, socket } = store.getState().user;

            if (socket) {
                socket.on('server_launch_game', ({ questions }) => {
                    store.dispatch(setGameQuestions(questions));
                    store.dispatch(launchNewGame());
                });
    
                socket.on('server_join_game', (data) => {
                    store.dispatch(stockRoomIntoState(data.room));
                    const otherPlayers = data.players.filter((player) => player.id !== id);
                    store.dispatch(setOtherPlayers(otherPlayers));
                });
    
                socket.on('server_send_answer', ({ id: playerId, answer }) => {
                    if ( playerId === id){
                        store.dispatch(validateUserAnswer(answer));
                    }
                    else {
                        store.dispatch(setOtherPlayerAnswer(playerId, answer));
                    }
                });
            }
            next(action);
        }
    }
};

export default gameSocketListener;