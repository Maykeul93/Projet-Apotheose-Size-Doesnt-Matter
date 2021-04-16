import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'reducers/index';
import logger from 'middlewares/logger';
import game from 'middlewares/game';
import signUp from 'middlewares/signUp';
import profil from 'middlewares/profil';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logger, game, signUp, profil),
  ),
);

export default store;