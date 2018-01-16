import {createStore} from 'redux';
import Reducers from './reducers/index';

export const defaultStore = {
  token: '',
  user: {
    email: 'Guest',
    Auth: {
      IsAuthenticated: false,
    },
  },
};
// console.log(Reducers);
const Store = createStore(Reducers, defaultStore);

Store.subscribe(() => {
  console.log(Store.getState());
});


export default Store;
