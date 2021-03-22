import axios from 'axios'
import fairHandActionTypes from './fairHandActionTypes'
import ShopInterface from '../../Interfaces/shopInterface'
import Review from '../../Interfaces/reviewInterface'

// Shop actions

export function loadAllShops () {
  return async function fetchInfo (dispatch: any) {
    const { data } = await axios.get('http://192.168.0.41:5000/shops')
    dispatch({
      type: fairHandActionTypes.LOAD_ALL_SHOPS,
      data
    })
  }
}

export function filterShopsByType (shops: ShopInterface[], typeClothes: string) {
  const filteredShops = shops.filter(shop => shop.type.includes(typeClothes) === true)

  return {
    type: fairHandActionTypes.FILTER_SHOP_BY_TYPE,
    data: filteredShops
  }
}

export function filterShopsByName (shops: ShopInterface[], shopName: string) {
  if (shopName === '') {
    return {
      type: fairHandActionTypes.FILTER_SHOP_BY_NAME,
      data: shops
    }
  } else {
    const filteredShops = shops.filter(shop => shop.shopName.includes(shopName) === true)

    return {
      type: fairHandActionTypes.FILTER_SHOP_BY_NAME,
      data: filteredShops
    }
  }
}

// Reviews actions

export function getReviewsByShopName (searchShop:string) {
  return async function fetchInfo (dispatch: any) {
    const { data } = await axios.get(`http://192.168.0.41:5000/reviews/shopName/${searchShop}`)

    dispatch({
      type: fairHandActionTypes.GET_REVIEWS_BY_SHOP_NAME,
      data
    })
  }
}

export function getReviewsByUserName (searchName:string) {
  return async function fetchInfo (dispatch: any) {
    const { data } = await axios.get(`http://192.168.0.41:5000/reviews/userName/${searchName}`)

    dispatch({
      type: fairHandActionTypes.GET_REVIEWS_BY_USER_NAME,
      data
    })
  }
}

// User actions

export function userLogin (user: object) {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post('http://192.168.0.41:5000/auth/login', user)
      dispatch({
        type: fairHandActionTypes.USER_SIGN_IN,
        data
      })
    } catch (error) {
      dispatch({
        type: fairHandActionTypes.USER_SIGN_IN,
        data: 400
      })
    }
  }
}

export function userRegister (user: object) {
  return async (dispatch: any) => {
    const { data } = await axios.post('http://192.168.0.41:5000/auth/register', user)
    if (data === 'User already exists!') {
      dispatch({
        type: fairHandActionTypes.USER_REGISTER
      })
    } else {
      dispatch({
        type: fairHandActionTypes.USER_REGISTER,
        data
      })
    }
  }
}

export function addReview (review: Review) {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post('http://192.168.0.41:5000/reviews', review)
      dispatch({
        type: fairHandActionTypes.ADD_REVIEW,
        data
      })
    } catch (error) {
      dispatch({
        type: fairHandActionTypes.ADD_REVIEW,
        data: 400
      })
    }
  }
}

export function deleteReview (allReviews: Review[], reviewID: Review) {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.delete('http://192.168.0.41:5000/reviews', {
        data: {
          _id: reviewID
        }
      })
      dispatch({
        type: fairHandActionTypes.DELETE_REVIEW,
        data: { allReviews: allReviews, deleted: data }
      })
    } catch (error) {
      dispatch({
        type: fairHandActionTypes.DELETE_REVIEW,
        data: 400
      })
    }
  }
}

export function userUpdate (user: object) {
  return async (dispatch: any) => {
    const { data } = await axios.put('http://192.168.0.41:5000/user', user)
    if (data === 'Could not update the user') {
      dispatch({
        type: fairHandActionTypes.USER_UPDATE
      })
    } else {
      dispatch({
        type: fairHandActionTypes.USER_UPDATE,
        data
      })
    }
  }
}
