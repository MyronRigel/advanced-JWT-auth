import { actionNames } from '../../enums/actionNames'

export const setIsLoadingActionCreator = (payload) => {
  return {
    type: actionNames.SET_IS_LOADING,
    payload,
  }
}