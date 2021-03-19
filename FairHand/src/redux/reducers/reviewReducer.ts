import fairHandActionTypes from '../actions/fairHandActionTypes'
import initialState from '../store/initialState'

export default function reviewReducer (state = initialState.reviewReducer, action) {
  let newReviews
  switch (action.type) {
    case fairHandActionTypes.GET_REVIEWS_BY_SHOP_NAME:
      return { ...state, reviews: action.data }
    case fairHandActionTypes.GET_REVIEWS_BY_USER_NAME:
      return { ...state, reviews: action.data }
    case fairHandActionTypes.ADD_REVIEW:
      return { ...state, reviews: action.data }
    case fairHandActionTypes.DELETE_REVIEW:
      newReviews = action.data.allReviews
      newReviews = newReviews.filter((review) => review._id !== action.data.deleted._id)
      return { ...state, reviews: newReviews }
    default:
      return state
  }
}
