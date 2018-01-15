import { createStore } from 'redux';
import { Reducers } from './reducers';

const Store = createStore(Reducers);

module.exports = Store;