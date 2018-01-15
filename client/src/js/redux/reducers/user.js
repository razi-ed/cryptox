/**
 * A template reducer that deals with user related states
 * @param {Object} state
 * @param {Object} action
 * @return {Object} Updated state
 */
export default function user(state, action) {
  switch (action.type) {
    case 'LOG_IN':
      {
        state.email = action.email;
        state.IsAuthenticated = true;
        break;
      }
    case 'LOG_OUT':
      {
        state.email = 'Guest';
        state.IsAuthenticated = false;
        break;
      }
  }