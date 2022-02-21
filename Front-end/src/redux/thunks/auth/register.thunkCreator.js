import { $axiosInstance } from '../../../http/axios/axiosInstance'
import { setIsLoadingActionCreator } from '../../actions/auth/isLoading.actionCreator'

export const registerThunkCreator = (payload) => async (dispatch) => {
  dispatch(setIsLoadingActionCreator(true))
  try {
    await $axiosInstance.post('/users', {
      ...payload,
    })
    dispatch(setIsLoadingActionCreator(false))
  } catch (err) {
    //TODO
  }
}
