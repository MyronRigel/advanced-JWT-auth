import { actionNames } from '../../enums/actionNames'

export const setIsAuthActionCreator = (payload) => {
  return {
    type: actionNames.SET_AUTH,
    payload,
  }
}