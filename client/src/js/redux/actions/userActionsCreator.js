/**
 *
 * @param {email} email
 * @return {action} action
 */
export function changeEmail(email) {
  return {
    type: 'CHANGE_EMAIL',
    payload: {
      email,
    },
  };
}

/**
 * @param {name} name
 * @return {action} action
 */
export function changeName(name) {
  return {
    type: 'CHANGE_NAME',
    payload: {
      name,
    },
  };
}
