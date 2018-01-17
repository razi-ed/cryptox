/**
 * A ###TEMPLATE### reducer that deals with user related states
 * @param {Object} state
 * @param {Object} action
 * @return {Object} Updated state
 */
export default function user(state = {}, action) {
  state={user: {email: null},
  };
  // console.log(action);
  switch (action.type) {
    case 'CHANGE_EMAIL': {
        return {...state, email: action.payload.email};
    }
    // case 'LOG_IN_USER':
    //   {
    //     return {...state, email: action.payload.email,
    //                       IsAuthenticated: true};
    //   }
    // case 'LOG_OUT_USER':
    //   {
    //     return {...state, email: 'Guest', IsAuthenticated: false};
    //   }
    default:
      return state;
  }
}
