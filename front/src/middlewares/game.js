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
    setOtherPlayerAnswer,
} from 'actions/gameInterface';

import {
    SOCKET_CONNECTION,
    setSocket,
} from 'actions/socket';

const gameMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SOCKET_CONNECTION: {
            const socket = io('https://size-doesnt-matter.herokuapp.com');
            store.dispatch(setSocket(socket));

            break;
        }
        case CREATE_NEW_GAME: {
            // socket connexion to create a room
            const { socket, id } = store.getState().user;
            socket.emit('front_create_game', id);
            // get the new room here and set the state
            socket.on('server_create_game', (data) => {
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