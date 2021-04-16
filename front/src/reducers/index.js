import { combineReducers } from 'redux';

// Import our other reducers
import userReducer from './user';
import gameReducer from './game';
import roomReducer from './room';
import signUpReducer from './signUp';

const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    room: roomReducer,
    signUp : signUpReducer,
});

export default rootReducer;