import axios from 'axios'
import fairHandActionTypes from './fairHandActionTypes.ts'
import {
  loadAllShops,
  filterShopsByType,
  filterShopsByName,
  getReviewsByShopName,
  getReviewsByUserName,
  userLogin,
  userRegister,
  addReview,
  deleteReview
} from './fairHandActionCreators.ts'
import DATA from '../../../constants/DATA'
const shops = DATA

jest.mock('axios')

describe('Given a loadAllShops function', () => {
  describe('When is invoked', () => {
    it('It should dispatch an action with type LOAD_ALL_SHOPS and it\'s response', async () => {
      const response = {
        data: []
      }
      axios.get.mockReturnValueOnce(response)
      const action = {
        type: fairHandActionTypes.LOAD_ALL_SHOPS,
        data: response.data
      }
      const dispatch = jest.fn()
      const fnc = loadAllShops()
      await fnc(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a filterShopsByType function', () => {
  describe('When it is invoked with shops and Clothes', () => {
    it('It should return an action type FILTER_SHOP_BY_TYPE and the filtered shops', () => {
      const returnValue = filterShopsByType(shops, 'Shoes')
      expect(returnValue.type).toBe('FILTER_SHOP_BY_TYPE')
    })
  })
})

describe('Given a filterShopsByName function', () => {
  describe('When it is invoked with parameters shops and Brava', () => {
    it('It should return an action type FILTER_SHOP_BY_NAME and data length will be 1', () => {
      const returnValue = filterShopsByName(shops, 'Brava')
      expect(returnValue.type).toBe('FILTER_SHOP_BY_NAME')
      expect(returnValue.data.length).toBe(1)
    })
  })

  describe('When it is invoked with parameters shops and an empty string', () => {
    it('It should return an action type FILTER_SHOP_BY_NAME and data length will be 6', () => {
      const returnValue = filterShopsByName(shops, '')
      expect(returnValue.type).toBe('FILTER_SHOP_BY_NAME')
      expect(returnValue.data.length).toBe(6)
    })
  })
})

describe('Given a getReviewsByShopName function', () => {
  describe('When is invoked with its parameters', () => {
    it('It should dispatch type: fairHandActionTypes.GET_REVIEWS_BY_SHOP_NAME and data', async () => {
      const response = {
        data: []
      }
      axios.get.mockReturnValueOnce(response)
      const action = {
        type: fairHandActionTypes.GET_REVIEWS_BY_SHOP_NAME,
        data: response.data
      }
      const dispatch = jest.fn()
      const fnc = getReviewsByShopName()
      await fnc(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a getReviewsByUserName function', () => {
  describe('When is invoked with its parameters', () => {
    it('It should dispatch type: fairHandActionTypes.GET_REVIEWS_BY_USER_NAME and data', async () => {
      const response = {
        data: []
      }
      axios.get.mockReturnValueOnce(response)
      const action = {
        type: fairHandActionTypes.GET_REVIEWS_BY_USER_NAME,
        data: response.data
      }
      const dispatch = jest.fn()
      const fnc = getReviewsByUserName()
      await fnc(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a userLogin function', () => {
  describe('When is invoked with a right user data', () => {
    beforeEach(() => {
      axios.post.mockResolvedValue({ data: { email: 'amaias@gmail.com', password: 'a1234567' } })
    })

    it('It should dispatch type: fairHandActionTypes.USER_SIGN_IN and data', async () => {
      const response = {
        data: { email: 'amaias@gmail.com', password: 'a1234567' }
      }
      const action = {
        type: fairHandActionTypes.USER_SIGN_IN,
        data: response.data
      }

      const dispatch = jest.fn()
      await userLogin({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a userLogin function', () => {
  describe('When is invoked with the wrong user data', () => {
    beforeEach(() => {
      axios.post.mockRejectedValue('Error')
    })
    it('It should dispatch type: fairHandActionTypes.USER_SIGN_IN and data: 400', async () => {
      const action = {
        type: fairHandActionTypes.USER_SIGN_IN,
        data: 400
      }
      const dispatch = jest.fn()
      await userLogin({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a userRegister function', () => {
  describe('When is invoked and user does not exists', () => {
    it('It should dispatch type: USER_REGISTER and data', async () => {
      const response = {
        data: {}
      }
      axios.post.mockReturnValueOnce(response)
      const action = {
        type: fairHandActionTypes.USER_REGISTER,
        data: response.data
      }
      const dispatch = jest.fn()
      const fnc = userRegister()
      await fnc(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })

  describe('When is invoked an the user exists', () => {
    it('It should dispatch type: USER_REGISTER and no data', async () => {
      const response = {
        data: 'User already exists!'
      }
      axios.post.mockReturnValueOnce(response)
      const action = {
        type: fairHandActionTypes.USER_REGISTER
      }
      const dispatch = jest.fn()
      const fnc = userRegister()
      await fnc(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a addReview function', () => {
  describe('When is invoked with the proper parameters', () => {
    beforeEach(() => {
      axios.post.mockResolvedValue({ data: { shopName: 'Brava', review: 'Love it!' } })
    })
    it('It should dispatch a type: ADD_REVIEW and data', async () => {
      const response = {
        data: { shopName: 'Brava', review: 'Love it!' }
      }
      const action = {
        type: fairHandActionTypes.ADD_REVIEW,
        data: response.data
      }

      const dispatch = jest.fn()
      await addReview({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })

  describe('When is invoked without the proper parameters', () => {
    beforeEach(() => {
      axios.post.mockRejectedValue('Error')
    })
    it('It should dispatch type ADD_REVIEW and 400', async () => {
      const action = {
        type: fairHandActionTypes.ADD_REVIEW,
        data: 400
      }
      const dispatch = jest.fn()
      await addReview({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a deleteReview function', () => {
  describe('When is invoked with the proper parameters', () => {
    beforeEach(() => {
      axios.delete.mockResolvedValue({ data: { _id: 1 } })
    })
    it('It should dispatch a type: DELETE_REVIEW, and data', async () => {
      const response = {
        data: { allReviews: {}, deleted: { _id: 1 } }
      }
      const action = {
        type: fairHandActionTypes.DELETE_REVIEW,
        data: response.data
      }

      const dispatch = jest.fn()
      await deleteReview({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })

  describe('When is invoked without the proper parameters', () => {
    beforeEach(() => {
      axios.delete.mockRejectedValue('Error')
    })
    it('It should dispatch type DELETE_REVIEW and 400', async () => {
      const action = {
        type: fairHandActionTypes.DELETE_REVIEW,
        data: 400
      }
      const dispatch = jest.fn()
      await deleteReview({})(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})
