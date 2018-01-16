import { combineReducers } from 'redux';
import UserReducer from './user';
import { routerReducer } from 'react-router-redux';

export const Reducers = combineReducers({
  user: UserReducer,
  history: HisoryReducer,
  routing: routerReducer,
});