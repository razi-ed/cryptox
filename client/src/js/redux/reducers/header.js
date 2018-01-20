const header = {
  authenticated: false,
    elevated: true,
  }
/**
 * A reducer that deals with header related states
 * @param {Object} state
 * @param {Object} action
 * @return {Object} Updated state
 */
export default function(state = header, action) {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      {
        return {...state, email: action.payload.email, authenticated: true};
      }
    case 'USER_LOGGED_OUT':
      {
        return { ...state, email: 'Guest', authenticated: false};
      }
    case 'ADD_ELEVATION_TO_APPBAR':
      {
        return {...state, elevated: true, elevation: 10};
      }
      case 'REMOVE_ELEVATION_FROM_APPBAR':
      {
        return { ...state, elevated: false, ElevationValue: 0};
      }
      case 'OPEN_APPBAR_DRAWER':
      {
        return { ...state, drawerOpened: true};
      }
      case 'CLOSE_APPBAR_DRAWER':
      {
        return { ...state, drawerOpened: false};
      }
      // case 'CHECK_AUTHENTICATED':
      // {
      //   return {...state, IsAuthenticated: true,
      //     userEmail: action.payload.email};
      //   }
      // // case 'ADD_USERNAME_CHIP_TO_APPBAR':
      //   {
      //     return {...state, IsUserNameChipVisible: true};
      //   }
      // case 'REMOVE_USERNAME_CHIP_FROM_APPBAR':
      //   {
      //     return {...state, IsUserNameChipVisible: false};
      //   }
      // case 'ADD_USER_WALLET_CHIP_TO_APPBAR':
      //   {
      //     return {...state, IsUserWalletChipVisible: true};
      //   }
      // case 'REMOVE_USER_WALLET_CHIP_FROM_APPBAR':
      //   {
      //     return {...state, IsUserWalletChipVisible: false};
      //   }
    default:
      return state;
  }
}
