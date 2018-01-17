import {combineReducers} from 'redux';
import UserReducer from './user';
import Trade from './TradeReducer';
import {routerReducer} from 'react-router-redux';
// import HistoryReducer from '../store';
export const Reducers = combineReducers({
  user: UserReducer,
  Trade,
  // history: HisoryReducer, INCLUDE TO FACILITATES BACK n FORTH Navigation.
  routing: routerReducer,
});
