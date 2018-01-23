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
