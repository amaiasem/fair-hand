import fairHandActionTypes from '../actions/fairHandActionTypes'
import userReducer from './userReducer'

const initialState = {
  userReducer: { user: {} }
}

describe('Given a userReducer', () => {
  describe('When it is called', () => {
    it('It should return the state', () => {
      expect(userReducer(initialState, {})).toEqual(initialState)
    })
  })

  describe('When it is called with action USER_SIGN_IN and data', () => {
    it('It should return the state and action.data', () => {
      const action = {
        type: fairHandActionTypes.USER_SIGN_IN,
        data: {}
      }
      expect(userReducer(initialState, action)).toEqual({ ...initialState, user: action.data })
    })
  })

  describe('When it is called with action USER_REGISTER and data', () => {
    it('It should return the state and action.data', () => {
      const action = {
        type: fairHandActionTypes.USER_REGISTER,
        data: {}
      }
      expect(userReducer(initialState, action)).toEqual({ ...initialState, user: action.data })
    })
  })

  describe('When it is called with action USER_SIGN_OUT and data', () => {
    it('It should return the state and action.data', () => {
      const action = {
        type: fairHandActionTypes.USER_SIGN_OUT,
        data: {}
      }
      expect(userReducer(initialState, action)).toEqual(null)
    })
  })
})
