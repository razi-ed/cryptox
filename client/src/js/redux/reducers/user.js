/**
 * A ###TEMPLATE### reducer that deals with user related states
 * @param {Object} state
 * @param {Object} action
 * @return {Object} Updated state
 */
export default function user(state, action) {
  switch (action.type) {
    case 'LOG_IN_USER':
      {
        return {...state, email: action.payload.email, IsAuthenticated: true};
      }
    case 'LOG_OUT_USER':
      {
        state = {...state, email: 'Guest', IsAuthenticated: false};
        break;
      }
      return state;
  }
}
