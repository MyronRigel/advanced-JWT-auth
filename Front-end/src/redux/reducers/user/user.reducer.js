import { actionNames } from '../../enums/actionNames'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  roles: [],
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.SET_USER:
      return {
        ...state,
        ...action.payload
      }
    case actionNames.SET_LOGOUT:
      return {}

    default:
      return state
  }
}