import { $axiosInstance } from '../../../http/axios/axiosInstance'
import { setUserActionCreator } from '../../actions/user/setUser.actionCreator'
import { setIsAuthActionCreator } from '../../actions/auth/setIsAuth.actionCreator'
import { setIsLoadingActionCreator } from '../../actions/auth/isLoading.actionCreator'

export const setUserThunkCreator = () => async (dispatch) => {
  dispatch(setIsLoadingActionCreator(true))
  try {
    const response = await $axiosInstance.get('/users/profile')

    const {
      firstName,
      lastName,
      email,
      roles,
    } = response.data

    dispatch(setUserActionCreator({email, roles, firstName, lastName}))
    dispatch(setIsAuthActionCreator(true))
    dispatch(setIsLoadingActionCreator(false))
  } catch (err) {
    dispatch(setIsLoadingActionCreator(false))
  }
}
