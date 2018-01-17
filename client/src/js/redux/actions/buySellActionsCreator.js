/**
 * authenticate is an actionCreator ###TEMPLATE###
 * @param {string} email
 * @param {string} buyingAsset
 * @param {string} UsingAsset
 * @param {number} buyingAssetQuantity
 * @param {number} UsingAssetQuantity
 * @return {object} action
 */
export function authenticate(
  email,
  buyingAsset,
  UsingAsset,
  buyingAssetQuantity,
  UsingAssetQuantity) {
  return {
    type: 'LOG_IN',
    payload: {
      email,
      buyingAsset,
      UsingAsset,
      buyingAssetQuantity,
      UsingAssetQuantity,
    },
  };
}
