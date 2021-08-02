import { combineReducers } from 'redux';

import colors from './colors';
import ui from './ui';

const rootReducer = combineReducers({ colors, ui });

export default rootReducer;