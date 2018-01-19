/**
 *
 * @param {email} email
 * @return {object} action
 */
export function changeEmail(email) {
  // console.log(event);
  return {
    type: 'CHANGE_EMAIL',
    payload: {
      email,
    },
  };
}
