import io from "socket.io-client";

import {
    CREATE_NEW_GAME,
    JOIN_NEW_GAME,
    stockRoomIntoState,
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
        case SOCKET_CONNECTION:
            const socket = io('https://size-doesnt-matter.herokuapp.com/', {
                withCredentials: true,
                headers: {
                    "Authorization": "abcd"
                }
            });
            store.dispatch(setSocket(socket));
            break;
        case CREATE_NEW_GAME:
            // connexion avec le serveur pour générer une room
            // réception de la room générée qui sera stockée dans le state
            store.dispatch(stockRoomIntoState('randomRoom'));
            break;
        case JOIN_NEW_GAME:
            // Connexion avec le serveur pour confirmer que la room entrée existe
            // réception de la confirmation de la room qui sera stockée dans le state
            console.log('je rejoins une nouvelle partie');
            store.dispatch(stockRoomIntoState('randomRoom'));
            break;
        case SEND_USER_ANSWER:
            store.dispatch(validateUserAnswer(action.value));
            return next(action);
        case LEAVE_GAME:
            // Socket request to signal player is leaving the game
            return next(action);
        default:
            next(action);
    }
};

export default gameMiddleware;