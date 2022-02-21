import { actionNames } from '../../enums/actionNames'

export const errorAuthActionCreator = (payload) => {
  return {
    type: actionNames.SET_ERROR,
    payload,
  }
}