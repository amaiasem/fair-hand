import fairHandActionTypes from '../actions/fairHandActionTypes'
import initialState from '../store/initialState'

export default function reviewReducer (state = initialState.reviewReducer, action) {
  switch (action.type) {
    case fairHandActionTypes.GET_REVIEWS_BY_SHOP_NAME:
      return { ...state, reviews: action.data }
    default:
      return state
  }
}
