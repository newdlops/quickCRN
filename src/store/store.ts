import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import createDebugger from 'redux-flipper'

const store = configureStore({
  reducer: rootReducer,
  middleware: (applyMiddleware) => {
    const middlewares = applyMiddleware()
    middlewares.push(createDebugger())
    return middlewares
  },
})

export default store
