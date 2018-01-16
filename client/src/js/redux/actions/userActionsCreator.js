/**
 * authenticate is an actionCreator ###TEMPLATE###
 * @param {string} email
 * @return {object} action
 */
export function authenticate(email) {
  return {
    type: 'LOG_IN_USER',
    payload: {
      email,
    },
  };
}