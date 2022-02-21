import { actionNames } from '../../enums/actionNames'

const initialState = {
  isAuth: false,
  isLoading: false,
  error: '',
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.SET_AUTH:
      return {
        isAuth: action.payload,
        isLoading: false,
      }

    case actionNames.SET_LOGOUT:
      return {
        isAuth: false,
      }

    case actionNames.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }

    case actionNames.SET_ERROR:
      return {
        error: action.payload,
        isLoading: false,
      }

    default:
      return state
  }

}