import {combineReducers} from 'redux';
import UserReducer from './user';

const Reducers = combineReducers({
  user: UserReducer,
});

export default Reducers;
