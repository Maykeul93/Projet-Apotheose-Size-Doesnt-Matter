import { combineReducers } from 'redux';

// Import our other reducers
import userReducer from './user';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;