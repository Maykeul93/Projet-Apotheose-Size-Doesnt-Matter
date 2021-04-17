import io from "socket.io-client";

import {
    CREATE_NEW_GAME,
    JOIN_NEW_GAME,
    stockRoomIntoState,
    launchNewGame,
    SET_LAUNCH_GAME,
    setOtherPlayers,
} from 'actions/game';

import {
    SEND_USER_ANSWER,
    validateUserAnswer,
    LEAVE_GAME,
} from 'actions/gameInterface';

import {
    SOCKET_CONNECTION,
    setSocket,
} from 'actions/socket';

const gameMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SOCKET_CONNECTION: {
            const socketConnection = io('https://size-doesnt-matter.herokuapp.com');
            store.dispatch(setSocket(socketConnection));
            break;
        }
        case CREATE_NEW_GAME: {
            // socket connexion to create a room
            const { socket, id } = store.getState().user;
            socket.emit('front_create_game', id);
            // get the new room here and set the state
            socket.on('server_create_game', (data) => {
                console.log(data);
                store.dispatch(stockRoomIntoState(data.room));
            });
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
            socket.on('server_join_game', (data) => {
                store.dispatch(stockRoomIntoState(data.room));
                console.log(data);
                //! Soucis de players à revoir
                const players = data.players.map((player) => player.id !== id);
                console.log(players);
                store.dispatch(setOtherPlayers(players));
                // dispatch otherPlayers pour afficher tous les joueurs dans le salon
            })
            socket.on('server_join_game_error', ({ error }) => {
                // dispatch de l'erreur
            });
            break;
        }
        case SET_LAUNCH_GAME: {
            const { socket, id } = store.getState().user;
            const { room } = store.getState().room;
            // envoie id de la game
            socket.emit('front_launch_game', { id, room });

            socket.on('server_launch_game', () => {
                // Reception des questions/réponses
                store.dispatch(launchNewGame());
            });
            break;
        }
        case SEND_USER_ANSWER: {
            // socket.emit --> envoi de la réponse au back
            const { socket, id } = store.getState().user;
            const { room } = store.getState().room;
            socket.emit('front_send_answer', {
                id,
                answer: action.value,
                room,
            });

            socket.on('server_send_answer', ({ id, answer }) => {
                console.log(id, ' a répondu : ', answer);
                //! A modifier
                store.dispatch(validateUserAnswer(action.value));
            });
            break;
        }
        case LEAVE_GAME:
            // Socket request to signal player is leaving the game
            return next(action);
        default:
            next(action);
    }
};

export default gameMiddleware;