import {applyMiddleware, createStore} from 'redux';
import {Reducers} from './reducers/index';
import {syncHistoryWithStore} from 'react-router-redux';
import {createBrowserHistory} from 'history';


let defaultStore = {
  token: localStorage.getItem('token'),
  user: {
    email: 'Guest',
    Auth: {
      IsAuthenticated: false,
    },
  },
};

const templateMiddlewareFunction = (store) => (next) => (action) => {
  console.log('Action now being fired is : ', action);
  next(action);
};

const middlewares = applyMiddleware(templateMiddlewareFunction);

const Store = createStore(Reducers, defaultStore, middlewares);

Store.subscribe(() => {
  console.log('Store updated, ', Store.getState());
});

export const History = syncHistoryWithStore(
  createBrowserHistory(),
  Store);

module.exports = Store;
