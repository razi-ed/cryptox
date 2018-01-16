import { applyMiddleware, createStore, compose } from 'redux';
import { Reducers } from './reducers/index';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { DevTools } from '../../../utils/DevTools';
import ReduxThunk from 'redux-thunk'


let initialState = {
  user: {
    email: 'Guest',
    Auth: {
      IsAuthenticated: false,
    },
  },
};

const reduxMiddlewares = [ /*ReduxThunk.withExtraArgument({ api, whatever }), */ templateMiddlewareFunction];

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
const monitorReducer = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};


//https://github.com/gaearon/redux-devtools/blob/HEAD/docs/Walkthrough.md
const enhancer = compose(
  applyMiddleware(...reduxMiddlewares),
  //https://github.com/zalmoxisus/redux-devtools-instrument#api
  DevTools.instrument(monitorReducer, { maxAge: 20, shouldCatchErrors: true, shouldHotReload: true })
);

export default function configureStore(initialState) {
  const Store = createStore(Reducers, initialState, enhancer)

  Store.subscribe(() => {
    console.log('Store updated, ', Store.getState());
  });

  export const History = syncHistoryWithStore(
    createBrowserHistory(),
    Store);

  module.exports = Store;