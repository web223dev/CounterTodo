import { combineReducers } from 'redux';
import counter from './modules/counter';
import todos from './modules/todo';

const reducers = combineReducers({
  counter,
  todos
});

export default reducers;