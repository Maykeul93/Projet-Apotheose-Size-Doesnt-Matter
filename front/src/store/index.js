import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'reducers/index';
import logger from 'middlewares/logger';
import game from 'middlewares/game';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logger, game),
  ),
);

export default store;