import axios from 'axios'
import fairHandActionTypes from './fairHandActionTypes'

export default function loadAllShops () {
  return async function fetchInfo (dispatch) {
    const { data } = await axios('http://192.168.0.41:5000/shops')
    dispatch({
      type: fairHandActionTypes.LOAD_ALL_SHOPS,
      data
    })
  }
}
