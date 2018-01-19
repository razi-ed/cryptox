
/**
 * A ###TEMPLATE### reducer that deals with user related states
 * @param {Object} state
 * @param {Object} action
 * @return {Object} Updated state
 */
export default function user(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_EMAIL': {
        return {...state, email: action.payload.email};
    }
    default:
      return state;
  }
}
