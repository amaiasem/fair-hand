import fairHandActionTypes from '../actions/fairHandActionTypes'
import reviewReducer from './reviewReducer'
import REVIEWS from '../../../constants/REVIEWS'

let initialState = {
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
    beforeEach(() => {
      initialState = {
        reviewReducer: {
          reviews: REVIEWS,
          filteredReviews: REVIEWS
        }
      }
    })
    it('It should return the state and action.data', () => {
      const action = {
        type: fairHandActionTypes.DELETE_REVIEW,
        data: {
          allReviews: REVIEWS,
          deleted: {
            _id: '604df3aa897c154888911c05',
            userId: '604618428c3a860ab4d51695',
            userName: 'John',
            shopName: 'Brava Fabrics',
            image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            review: 'Diseño hecho en Barcelona y eso es sinónimo de buen diseño. A la ciudad le faltan más tiendas como esta. La marca, en las últimas colecciones han hecho una giro hacia una ropa más comercial y moderna que permite llegar a más público.',
            __v: 0
          }
        }
      }
      const remainingReviews = {
        _id: '604df2f8897c154888911c04',
        userId: '604618428c3a860ab4d51694',
        userName: 'Paula',
        shopName: 'Brava Fabrics',
        image: 'https://www.westernunion.com/content/dam/wu/jm/responsive/send-money-in-person-from-jamaica-resp.png',
        review: 'Hablar de Brava Fabrics es hablar de las camisas más bonitas de Barcelona.',
        __v: 0
      }

      expect(reviewReducer(initialState, action)).toEqual({ ...initialState, reviews: [remainingReviews] })
    })
  })
})
