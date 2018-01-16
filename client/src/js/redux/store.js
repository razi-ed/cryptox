import { createStore } from 'redux';
import { Reducers } from './reducers';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';


let defaultStore = {
  user: {
    email: 'Guest',
    Auth: {
      IsAuthenticated: false,
    },
  },
};

const Store = createStore(Reducers, defaultStore);

export const history = syncHistoryWithStore(
  createBrowserHistory(),
  Store);

module.exports = Store;