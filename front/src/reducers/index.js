import { combineReducers } from 'redux';

// Import our other reducers
import userReducer from './user';
import gameReducer from './game';
import roomReducer from './room';
import signUpReducer from './signUp';
import profilReducer from './profil';

const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    room: roomReducer,
    signUp : signUpReducer,
    profil: profilReducer,
});

export default rootReducer;