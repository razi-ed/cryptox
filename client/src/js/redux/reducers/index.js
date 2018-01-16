import { combineReducers } from 'redux';
import UserReducer from './user';
import { routerReducer } from 'react-router-redux';

const Reducers = combineReducers({
  user: UserReducer,
  history: HisoryReducer,
  routing: routerReducer,
});