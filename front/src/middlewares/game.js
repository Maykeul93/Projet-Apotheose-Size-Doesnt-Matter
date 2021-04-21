import io from "socket.io-client";

import {
    CREATE_NEW_GAME,
    JOIN_NEW_GAME,
    SET_LAUNCH_GAME,
    stockRoomIntoState,
    launchNewGame,
    setOtherPlayers,
    resetRoom,
} from 'actions/game';

import {
    SEND_USER_ANSWER,
    LEAVE_GAME,
    validateUserAnswer,
    setOtherPlayerAnswer,
    setGameQuestions,
    resetGameState,
    setPlayerLeaveGame,
} from 'actions/gameInterface';

import {
    SOCKET_CONNECTION,
    setSocket,
} from 'actions/socket';

const gameMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SOCKET_CONNECTION: {
            const { id } = store.getState().user;
            const socket = io('https://size-doesnt-matter.herokuapp.com');
            store.dispatch(setSocket(socket));

            socket.on('server_create_game', (data) => {
                store.dispatch(stockRoomIntoState(data.room));
            });

            socket.on('server_join_game', (data) => { 
                store.dispatch(stockRoomIntoState(data.room));
                const otherPlayers = data.players.filter((player) => player.id !== id);
                store.dispatch(setOtherPlayers(otherPlayers));
            });

            socket.on('server_launch_game', ({ idGame, questions }) => {
                store.dispatch(setGameQuestions(questions));
                store.dispatch(launchNewGame(idGame));
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

            break;
        }
        case CREATE_NEW_GAME: {
            // socket connexion to create a room
            const { socket, id } = store.getState().user;
            socket.emit('front_create_game', id);
            break;
        }
        case JOIN_NEW_GAME:{
            const { socket, id } = store.getState().user;
            const { codeRoomInput } = store.getState().room;
            // confirm that's codeRoom exist, if exist, connect the user to the room
            socket.emit('front_join_game', {
                id,
                room: codeRoomInput,
            });
           
            socket.on('server_join_game_error', ({ error }) => {
                //! dispatch de l'erreur à placer dans les ecouteurs socket
            });
            break;
        }
        case SET_LAUNCH_GAME: {
            const { socket, id } = store.getState().user;
            const { room } = store.getState().room;
            socket.emit('front_launch_game', {
                id,
                room,
            });
            break;
        }
        case SEND_USER_ANSWER: {
            const { socket, id } = store.getState().user;
            const { room } = store.getState().room;
            socket.emit('front_send_answer', {
                id,
                answer: action.value,
                room,
            });
            break;
        }
        // Envoi des score + id game
        case LEAVE_GAME: {
            const { socket, id } = store.getState().user;
            const { room } = store.getState().room;
            socket.emit('front_leave_game', {
                id,
                room,
            });
            break;
        }
        default:
            next(action);
    }
};

export default gameMiddleware;