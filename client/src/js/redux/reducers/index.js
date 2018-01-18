import {combineReducers} from 'redux';
import UserReducer from './user';
import Exchange from './ExchangeReducer';
import {routerReducer} from 'react-router-redux';
// import HistoryReducer from '../store';
export const Reducers = combineReducers({
  user: UserReducer,
  Exchange,
  // history: HisoryReducer, INCLUDE TO FACILITATES BACK n FORTH Navigation.
  routing: routerReducer,
});
