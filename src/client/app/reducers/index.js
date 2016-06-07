import { combineReducers } from 'redux';
import user from './userReducer';

const rootReducer = combineReducers({
  //add reducer here
  user
});

export default rootReducer;
