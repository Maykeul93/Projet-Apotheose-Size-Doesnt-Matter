import {
    CREATE_NEW_GAME,
    JOIN_NEW_GAME,
} from 'actions/game';

const gameMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case CREATE_NEW_GAME:
            console.log('je passe dans le middleware');
            return next(action);
        case JOIN_NEW_GAME:
            console.log('je rejoins une nouvelle partie');
            return next(action);
        default:
            next(action);
    }
};

export default gameMiddleware;