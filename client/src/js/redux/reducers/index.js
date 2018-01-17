import {combineReducers} from 'redux';
import {setUser} from './user';
import {routerReducer} from 'react-router-redux';
// import HistoryReducer from '../store';
export const Reducers = combineReducers({
  user: setUser,
  // history: HisoryReducer, INCLUDE TO FACILITATES BACK n FORTH Navigation.
  routing: routerReducer,
});
