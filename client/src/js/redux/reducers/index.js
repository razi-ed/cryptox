import {combineReducers} from 'redux';
import user from './user';
import {routerReducer} from 'react-router-redux';
// import HistoryReducer from '../store';
export const Reducers = combineReducers({
  user: user,
  // history: HisoryReducer, INCLUDE TO FACILITATES BACK n FORTH Navigation.
  routing: routerReducer,
});
