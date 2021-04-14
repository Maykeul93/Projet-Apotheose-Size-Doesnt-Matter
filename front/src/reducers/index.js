import { combineReducers } from 'redux';

// Import our other reducers
import userReducer from './user';
import gameReducer from './game';

const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
});

export default rootReducer;