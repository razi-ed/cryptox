/**
 * authenticate is an actionCreator [template]
 * @param {string} email
 * @return {object} action
 */
export function authenticate(email) {
  return {
    type: 'LOG_IN',
    payload: {
      email,
    },
  };
}