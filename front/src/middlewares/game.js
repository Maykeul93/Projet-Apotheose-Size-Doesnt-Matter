import io from "socket.io-client";

import {
    CREATE_NEW_GAME,
    JOIN_NEW_GAME,
    SET_LAUNCH_GAME,
    CHAT_SEND_MESSAGE,
    stockRoomIntoState,
    launchNewGame,
    setOtherPlayers,
    resetRoom,
    chatReceiveMessage,
} from 'actions/game';

import {
    SEND_USER_ANSWER,
    LEAVE_GAME,
    SEND_SCORE_TO_DB,
    validateUserAnswer,
    setOtherPlayerAnswer,
    setGameQuestions,
    resetGameState,
    setPlayerLeaveGame,
    setGameIsOver,
} from 'actions/gameInterface';

import {
    SOCKET_CONNECTION,
    setSocket,
} from 'actions/socket';

//TODO Créer un action pour envoyer au back les références des avatars des autres joueurs (au lancement de la partie peut-être ?)

const gameMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SOCKET_CONNECTION: {
            const { id } = store.getState().user;
            const socket = io('https://size-doesnt-matter.herokuapp.com');
            store.dispatch(setSocket(socket));

            socket.on('server_chat_send_message', (message) => {
                console.log(message);
                store.dispatch(chatReceiveMessage(message));
            });

            socket.on('server_create_game', (data) => {
                store.dispatch(stockRoomIntoState(data.room));
            });

            socket.on('server_join_game', (data) => { 
                store.dispatch(stockRoomIntoState(data.room));
                const otherPlayers = data.players.filter((player) => player.id !== id);
                store.dispatch(setOtherPlayers(otherPlayers));
            });

            socket.on('server_launch_game', ({ idGame, questions }) => {
                store.dispatch(setGameQuestions(questions, idGame));
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

            socket.on('server_end_game', ({ success }) => {
                store.dispatch(setGameIsOver());
                if (!success) {
                    console.log('erreur de serveur');
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
        case CHAT_SEND_MESSAGE: {
            const { socket, id, pseudo } = store.getState().user;
            const { room } = store.getState().room;
            socket.emit('front_chat_send_message', {
                id,
                pseudo,
                message: action.message,
                room,
            })
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
        case SEND_SCORE_TO_DB: {
            const { socket } = store.getState().user;
            const { room } = store.getState().room;
            const { idGame, score } = store.getState().game;
            socket.emit('front_send_score', {
                idGame,
                room,
                globalScore: score,
            });
            break;
        }
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