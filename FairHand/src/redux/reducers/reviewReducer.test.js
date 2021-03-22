import fairHandActionTypes from '../actions/fairHandActionTypes'
import reviewReducer from './reviewReducer'

const initialState = {
  reviewReducer: {
    reviews: [],
    filteredReviews: []
  }
}

describe('Given a reviewReducer', () => {
  describe('When it is called', () => {
    it('It should return the state', () => {
      expect(reviewReducer(initialState, {})).toEqual(initialState)
    })
  })
  describe('When it is called with action GET_REVIEWS_BY_SHOP_NAME and data', () => {
    it('It should return the state and action.data', () => {
      const action = {
        type: fairHandActionTypes.GET_REVIEWS_BY_SHOP_NAME,
        data: {}
      }

      expect(reviewReducer(initialState, action)).toEqual({ ...initialState, reviews: action.data })
    })
  })

  describe('When it is called with action GET_REVIEWS_BY_USER_NAME and data', () => {
    it('It should return the state and action.data', () => {
      const action = {
        type: fairHandActionTypes.GET_REVIEWS_BY_USER_NAME,
        data: {}
      }

      expect(reviewReducer(initialState, action)).toEqual({ ...initialState, reviews: action.data })
    })
  })

  describe('When it is called with action ADD_REVIEW and data', () => {
    it('It should return the state and action.data', () => {
      const action = {
        type: fairHandActionTypes.ADD_REVIEW,
        data: {}
      }

      expect(reviewReducer(initialState, action)).toEqual({ ...initialState, reviews: action.data })
    })
  })

  describe('When it is called with action DELETE_REVIEW and data', () => {
    it('It should return the state and action.data', () => {
      const action = {
        type: fairHandActionTypes.DELETE_REVIEW,
        data: { allReviews: [], deleted: { _id: '' } }
      }

      expect(reviewReducer(initialState, action)).toEqual({ ...initialState, reviews: [] })
    })
  })
})
