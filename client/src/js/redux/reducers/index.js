import {combineReducers} from 'redux';
import UserReducer from './user';
import tokenReducer from './user';

const Reducers = combineReducers({
  token: tokenReducer,
  // user: UserReducer,
});
console.log(Reducers);

module.exports = Reducers;

// export default Reducers;
