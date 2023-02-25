import { createStore, applyMiddleware } from 'redux';
import myLogger from './middlewares/myLogger';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, myLogger)),
);

export default store;
