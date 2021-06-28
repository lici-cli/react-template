import { combineReducers } from 'redux';
import testReducer from './taskReducer';

const reducer = combineReducers({
  test:testReducer
})

export default reducer;
