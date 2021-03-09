import { combineReducers } from 'redux'
import { reviewReducer } from '../reducers/reviewReducer'
import { shopReducer } from '../reducers/shopReducer'
import { userReducer } from '../reducers/userReducer'

const rootReducer = combineReducers({
  userReducer,
  shopReducer,
  reviewReducer
})

export default rootReducer
