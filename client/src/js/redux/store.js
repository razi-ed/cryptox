import {applyMiddleware, createStore, compose} from 'redux';
import {Reducers} from './reducers/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {createBrowserHistory} from 'history';
import DevTools from '../../../utils/DevTools';
// import ReduxThunk from 'redux-thunk';


let initialState = {
  user: {
    email: 'Guest',
    isAuthenticated: false,
    header: {
      authenticated: false,
      elevated: true,
    }
  },
};

// const reduxMiddlewares = [templateMiddlewareFunction];

/*
Somewhere down the APP,   USING FUNCTION SIMILAR TO BELOW FUNCTION
IS FACILITATED BY REDUXTHUNKS MIDDLEWARE.
// later
function fetchUser(id) {
  return (dispatch, getState, { api, whatever }) => {
    // you can use api and something else here here
  }
}
*/

const templateMiddlewareFunction = (store) => (next) => (action) => {
  console.log('Action now being fired is ~~~> ');
  next(action);
};
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const Store = createStore(Reducers, initialState, composeEnhancers(
  applyMiddleware(templateMiddlewareFunction)));

  Store.subscribe(() => {
    console.log('Store updated, ', Store.getState());
  });
  export const History = syncHistoryWithStore(
    createBrowserHistory(),
    Store);

  module.exports = Store;
