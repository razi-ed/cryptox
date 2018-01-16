import { createStore } from 'redux';
import { Reducers } from './reducers';

let defaultStore = {
  user: {
    email: 'Guest',
    Auth: {
      IsAuthenticated: false,
    },
  },
};

const Store = createStore(Reducers, defaultStore);

module.exports = Store;