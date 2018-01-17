import {applyMiddleware, createStore, compose} from 'redux';
import {Reducers} from './reducers/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {createBrowserHistory} from 'history';
import DevTools from '../../../utils/DevTools';
// import ReduxThunk from 'redux-thunk';


let initialState = {
  user: {
    email: 'Guest',
    Auth: {
      IsAuthenticated: false,
    },
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
const monitorReducer = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};


// https://github.com/gaearon/redux-devtools/blob/HEAD/docs/Walkthrough.md
const enhancer = compose(
  applyMiddleware(templateMiddlewareFunction),
  // https://github.com/zalmoxisus/redux-devtools-instrument#api
  DevTools.instrument(
  monitorReducer,
  {maxAge: 20, shouldCatchErrors: true, shouldHotReload: true})
);
/**
 *This function takes initial state and creates new store
 * @param {initialState} initialState
 */

  const Store = createStore(Reducers, initialState, enhancer);

  Store.subscribe(() => {
    console.log('Store updated, ', Store.getState());
  });
  export const History = syncHistoryWithStore(
    createBrowserHistory(),
    Store);

  module.exports = Store;
