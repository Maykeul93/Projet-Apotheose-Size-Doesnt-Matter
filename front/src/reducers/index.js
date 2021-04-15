import { combineReducers } from 'redux';

// Import our other reducers
import userReducer from './user';
import gameReducer from './game';
import roomReducer from './room';

const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    room: roomReducer,
});

export default rootReducer;