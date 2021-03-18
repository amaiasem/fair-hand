import { combineReducers } from 'redux'
import reviewReducer from './reviewReducer'
import shopReducer from './shopReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  userReducer,
  shopReducer,
  reviewReducer
})

export default rootReducer
