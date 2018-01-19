/**
 * A reducer that deals with header related states
 * @param {Object} state
 * @param {Object} action
 * @return {Object} Updated state
 */
export default function(state = {}, action) {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      {
        return {...state, email: action.payload.email, IsLoggedIn: true};
      }
    case 'USER_LOGGED_OUT':
      {
        return {...state, email: 'Guest', IsLoggedIn: false};
      }
    case 'ADD_ELEVATION_TO_APPBAR':
      {
        return {...state, IsAppBarElevated: true, ElevationValue: 10};
      }
      case 'REMOVE_ELEVATION_FROM_APPBAR':
      {
        return {...state, IsAppBarElevated: false, ElevationValue: 0};
      }
      case 'CHECK_AUTHENTICATED':
      {
        return {...state, IsAuthenticated: true,
          userEmail: action.payload.email};
        }
      case 'ADD_USERNAME_CHIP_TO_APPBAR':
        {
          return {...state, IsUserNameChipVisible: true};
        }
      case 'REMOVE_USERNAME_CHIP_FROM_APPBAR':
        {
          return {...state, IsUserNameChipVisible: false};
        }
      case 'ADD_USER_WALLET_CHIP_TO_APPBAR':
        {
          return {...state, IsUserWalletChipVisible: true};
        }
      case 'REMOVE_USER_WALLET_CHIP_FROM_APPBAR':
        {
          return {...state, IsUserWalletChipVisible: false};
        }
    default:
      return state;
  }
}
