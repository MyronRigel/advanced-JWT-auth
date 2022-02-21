import { $axiosInstance } from '../../../http/axios/axiosInstance'
import {setUserActionCreator} from '../../actions/user/setUser.actionCreator'
import {setIsAuthActionCreator} from '../../actions/auth/setIsAuth.actionCreator'
import { errorAuthActionCreator } from '../../actions/auth/errorAuth.actionCreator'
import { setIsLoadingActionCreator } from '../../actions/auth/isLoading.actionCreator'

export const authThunkCreator = (payload) => async (dispatch) => {
  dispatch(setIsLoadingActionCreator(true))
  try {
    const response = await $axiosInstance.post('/users/login', {
      ...payload,
    })

    const {
      access_token,
      firstName,
      lastName,
      email,
      roles,
    } = response.data

    localStorage.setItem('access_token', access_token)

    dispatch(setIsAuthActionCreator(true))
    dispatch(setUserActionCreator({firstName, lastName, email, roles}))
    dispatch(setIsLoadingActionCreator(false))
  } catch (err) {
    dispatch(errorAuthActionCreator('Wrong email or password'))
  }
}
