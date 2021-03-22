import fairHandActionTypes from '../actions/fairHandActionTypes'
import initialState from '../store/initialState'

export default function userReducer (state = initialState.userReducer, action: any) {
  switch (action.type) {
    case fairHandActionTypes.USER_SIGN_IN:
      return { ...state, user: action.data }
    case fairHandActionTypes.USER_REGISTER:
      return { ...state, user: action.data }
    case fairHandActionTypes.USER_UPDATE:
      return { ...state, user: action.data }
    case fairHandActionTypes.USER_SIGN_OUT:
      return null
    default:
      return state
  }
}
