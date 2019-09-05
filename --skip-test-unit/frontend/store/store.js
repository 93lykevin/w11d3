import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';
import thunk from '../thunk/thunk';

const configureStore = (preloadedState = {}) => {
  
}





// export default (preloadedState = {}) => createStore(
//   rootReducer, preloadedState, applyMiddleware(logger, thunk)
// );