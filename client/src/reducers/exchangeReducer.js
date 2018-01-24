import Exchange from './Exchange';
/**
 *Reducer for trade-exchage
 * @param {*} state
 * @param {*} action
 * @return {reducers}
 */
export default function Exchage(state = Exchange, action) {
  switch (action.type) {
    case 'update_currency':
      return {...state, [action.payload.currency]: action.payload.price};
<<<<<<< HEAD
    case 'Set_baseCurrency':
      return {...state, baseCurrency: action.payload.baseCurrency};
||||||| merged common ancestors
=======
    case 'set_baseCurrency':
      return {...state, baseCurrency: [action.payload.currency]};
>>>>>>> 49d738dd503b30b0e23b4bd37f53ffb1aa711af2
    default:
      return state;
  }
};
