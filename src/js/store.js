import { createStore } from 'redux';

// Import root reducer
import rootReducer from './reducers/index';

// Import data
import colors from './data/colors';
import ui from './data/ui';

// Object to store the data
const defaultState = {
  colors,
  ui
};

// === Actual store === //

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;