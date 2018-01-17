import {combineReducers} from 'redux';
import UserReducer from './user';
import {routerReducer} from 'react-router-redux';
// import HistoryReducer from '../store';
export const Reducers = combineReducers({
  user: UserReducer,
  // history: HistoryReducer,
  routing: routerReducer,
});
