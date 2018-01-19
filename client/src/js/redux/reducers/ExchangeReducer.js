import Exchange from '../Exchange';
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
    default:
      return state;
  }
};
