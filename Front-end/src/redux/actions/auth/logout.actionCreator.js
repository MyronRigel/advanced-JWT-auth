import { actionNames } from '../../enums/actionNames'

export const logoutActionCreator = () => {
  return {
    type: actionNames.SET_LOGOUT,
  }
}
