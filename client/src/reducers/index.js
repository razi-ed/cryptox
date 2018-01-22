import {combineReducers} from 'redux';
import UserReducer from './user';
import exchange from './exchangeReducer';
import {routerReducer} from 'react-router-redux';
// import HistoryReducer from '../store';
export const Reducers = combineReducers({
  user: UserReducer,
  exchange,
  // history: HisoryReducer, INCLUDE TO FACILITATES BACK n FORTH Navigation.
  routing: routerReducer,
});
