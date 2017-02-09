import { combineReducers } from 'redux';
import ingredients from './ingredientsReducer';
import toggleMode from './toggleModeReducer';

const rootReducer = combineReducers({
  ingredients,
  toggleMode
});

export default rootReducer;
