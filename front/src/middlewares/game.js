import {
    CREATE_NEW_GAME,
    JOIN_NEW_GAME,
    stockRoomIntoState,
} from 'actions/game';

const gameMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
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
        default:
            next(action);
    }
};

export default gameMiddleware;