import { actionNames } from '../../enums/actionNames'

export const setUserActionCreator = (payload) => {
  return {
    type: actionNames.SET_USER,
    payload,
  }
}