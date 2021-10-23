import { combineReducers } from 'redux';
import user from './user';
import questions from './questions';
import score from './score';

const rootReducer = combineReducers({
  user,
  questions,
  score,
});

export default rootReducer;
