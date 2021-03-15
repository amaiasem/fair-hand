import axios from 'axios'
import fairHandActionTypes from './fairHandActionTypes'

// Shop actions

export default function loadAllShops () {
  return async function fetchInfo (dispatch) {
    const { data } = await axios('http://192.168.0.41:5000/shops')
    dispatch({
      type: fairHandActionTypes.LOAD_ALL_SHOPS,
      data
    })
  }
}

export function filterShopsByType (shops, typeClothes) {
  const filteredShops = shops.filter(shop => shop.type.includes(typeClothes) === true)

  return {
    type: fairHandActionTypes.FILTER_SHOP_BY_TYPE,
    data: filteredShops
  }
}

export function filterShopsByName (shops, shopName) {
  const filteredShops = shops.filter(shop => shop.shopName.includes(shopName) === true)

  return {
    type: fairHandActionTypes.FILTER_SHOP_BY_NAME,
    data: filteredShops
  }
}

// Reviews actions

export function getReviewsByShopName (searchShop) {
  return async function fetchInfo (dispatch) {
    const { data } = await axios.get(`http://192.168.0.41:5000/reviews/shopName/${searchShop}`)
    dispatch({
      type: fairHandActionTypes.GET_REVIEWS_BY_SHOP_NAME,
      data
    })
  }
}
