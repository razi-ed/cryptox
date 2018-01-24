/**
 * authenticate is an actionCreator ###TEMPLATE###
 * @return {object} action
 * @param {string} currency
 * @param {object} price
 */

/**
 *to update the price of the specified currency
 *@param {string} currency
 *@param {object} price
 *@param {object} action
 *@return {object} state
 */
export function updatePrice(currency, price, action) {
  return {
    type: 'update_currency',
    payload: {
      currency, price,
    },
  };
}
<<<<<<< HEAD
/**
 *
 * @param {*} baseCurrency
 * @param {*} action
 * @return {object} state
 */
export function setbaseCurrency( baseCurrency, action) {
  return {
    type: 'Set_baseCurrency',
    payload: {
      baseCurrency,
    },
  };
}
||||||| merged common ancestors
=======
/**
 *A reducer to a set base currenct
 * @param {*} currency
 * @param {*} action
 * @return {object} state
 */
export function setbaseCurrency(currency, action) {
  return {
    type: 'set_baseCurrency',
    payload: {
      currency,
    },
  };
}
>>>>>>> 49d738dd503b30b0e23b4bd37f53ffb1aa711af2
