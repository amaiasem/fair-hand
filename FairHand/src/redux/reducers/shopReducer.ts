import fairHandActionTypes from '../actions/fairHandActionTypes'
import initialState from '../store/initialState'

export default function shopReducer (state = initialState.shopReducer, action: any) {
  switch (action.type) {
    case fairHandActionTypes.LOAD_ALL_SHOPS:
      return { ...state, shops: action.data, filteredShops: action.data }

    case fairHandActionTypes.FILTER_SHOP_BY_TYPE:
      return { ...state, filteredShops: [...action.data] }

    case fairHandActionTypes.FILTER_SHOP_BY_NAME:
      return { ...state, filteredShops: [...action.data] }

    default:
      return state
  }
}
