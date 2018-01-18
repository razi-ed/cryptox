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

/**
 *
 * @param {name} name
 * @return {function}
 */
export function changeName(name) {
  return (dispatch) => {
    dispatch({type: 'CHANGE_NAME', name: name});
  };
}
