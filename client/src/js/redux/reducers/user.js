/**
 * A ###TEMPLATE### reducer that deals with user related states
 * @param {Object} state
 * @param {Object} action
 * @return {Object} Updated state
 */
export default function user(state = {}, action) {
  switch (action.type) {
    case 'LOG_IN_USER':
      {
        return {...state, email: action.payload.email, IsAuthenticated: true};
      }
    case 'LOG_OUT_USER':
      {
        return {...state, email: 'Guest', IsAuthenticated: false};
      }
    case 'CHANGE_NAME':
    {
      return {...state, name: action.name};
    }
    case 'SET_USER_DETAILS':
    {
      return {...state, email: action.email, name: action.name};
    }
    default:
      return state;
  }
}

/* export const setUser = (state = {}, action)=> {
  if (action.type === 'SET_USER_DETAILS') {
    console.log('in dispatch');

    return {...state, email: action.email, name: action.name};
  } else {
    return state;
  }
};

export const changeName = (state = {}, action) => {
  if (action.type === 'CHANGE_NAME') {
    return {...state, name: action.name};
  } else {
    return state;
  }
};
 */
