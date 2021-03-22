import fairHandActionTypes from '../actions/fairHandActionTypes'
import shopReducer from './shopReducer'

const initialState = {
  shopReducer: { shops: [], shop: {}, filteredShops: [] }
}

describe('Given a shopReducer', () => {
  describe('When it is called', () => {
    it('It should return the state', () => {
      expect(shopReducer(initialState, {})).toEqual(initialState)
    })
  })

  describe('When it is called with action LOAD_ALL_SHOPS and data', () => {
    it('It should return the state and action.data', () => {
      const action = {
        type: fairHandActionTypes.LOAD_ALL_SHOPS,
        data: {}
      }

      expect(shopReducer(initialState, action)).toEqual({ ...initialState, shops: action.data, filteredShops: action.data })
    })
  })

  describe('When it is called with action FILTER_SHOP_BY_TYPE and data', () => {
    it('It should return the state and action.data', () => {
      const action = {
        type: fairHandActionTypes.FILTER_SHOP_BY_TYPE,
        data: {}
      }

      expect(shopReducer(initialState, action)).toEqual({ ...initialState, filteredShops: action.data })
    })
  })
})
