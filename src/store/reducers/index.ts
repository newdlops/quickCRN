import { combineReducers } from 'redux'
import counterReducer from './counterSlice'
import searchReducer from './searchSlice'
import userReducer from './userSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  search: searchReducer,
  user: userReducer,
})

export default rootReducer
