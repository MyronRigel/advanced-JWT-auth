import { $axiosInstance } from '../../../http/axios/axiosInstance'
import { logoutActionCreator } from '../../actions/auth/logout.actionCreator'
import { setIsLoadingActionCreator } from '../../actions/auth/isLoading.actionCreator'

export const logoutThunkCreator = () => async (dispatch) => {
  dispatch(setIsLoadingActionCreator(true))
  try {
    dispatch(logoutActionCreator())

    await $axiosInstance.post('/users/logout')
    localStorage.removeItem('access_token')
    dispatch(setIsLoadingActionCreator(false))
  } catch (err) {
    //TODO
  }
}
