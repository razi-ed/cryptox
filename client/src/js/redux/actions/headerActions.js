/**
 * authenticate is an actionCreator
 * @param {string} email
 * @return {object} action
 */
export function IsAuthenticated(email) {
  return {
    type: 'CHECK_AUTHENTICATED',
    payload: {
      email,
    },
  };
}

/**
 * removeElevation is an actionCreator
 * @return {object} action
 */
export function removeElevation() {
  return {
    type: 'REMOVE_ELEVATION_FROM_APPBAR',
  };
}

/**
 * removeElevation is an actionCreator
 * @return {object} action
 */
export function openDrawer() {
  return {
    type: 'OPEN_APPBAR_DRAWER',
  };
}

/**
 * removeElevation is an actionCreator
 * @return {object} action
 */
export function closeDrawer() {
  return {
    type: 'CLOSE_APPBAR_DRAWER',
  };
}

/**
 * removeElevation is an actionCreator
 * @return {object} action
 */
export function addElevation() {
  return {
    type: 'ADD_ELEVATION_TO_APPBAR',
  };
}

/**
 * AddUserNameChip is an actionCreator
 * @return {object} action
 */
export function AddUserChip() {
  return {
    type: 'ADD_USER_CHIP_TO_APPBAR',
  };
}

/**
 * RemoveUserNameChip is an actionCreator
 * @return {object} action
 */
export function RemoveUserChip() {
  return {
    type: 'REMOVE_USER_CHIP_FROM_APPBAR',
  };
}

/**
 * AddUserNameChip is an actionCreator
 * @return {object} action
 */
export function AddUserWalletChip() {
  return {
    type: 'ADD_USER_WALLET_CHIP_TO_APPBAR',
  };
}

/**
 * RemoveUserNameChip is an actionCreator
 * @return {object} action
 */
export function RemoveUserWalletChip() {
  return {
    type: 'REMOVE_USER_WALLET_CHIP_FROM_APPBAR',
  };
}
