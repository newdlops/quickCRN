import { combineReducers } from 'redux'
import counterReducer from './counterSlice'
import searchReducer from './searchSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  search: searchReducer,
})

export default rootReducer
