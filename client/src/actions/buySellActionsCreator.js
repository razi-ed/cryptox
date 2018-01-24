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
