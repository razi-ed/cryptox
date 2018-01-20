import UserReducer from './user';
import exchange from './exchangeReducer';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import user from './user';
// import HistoryReducer from '../store';
export const Reducers = combineReducers({
  user: UserReducer,
  exchange,
  user: user,
  // history: HisoryReducer, INCLUDE TO FACILITATES BACK n FORTH Navigation.
  routing: routerReducer,
});
