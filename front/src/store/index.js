import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'reducers/index';
import logger from 'middlewares/logger';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logger),
  ),
);

export default store;