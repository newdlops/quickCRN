import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../service/api'
import searchReducer from '@store/reducers/searchSlice'
import userReducer from '@store/reducers/userSlice'

export const createStore = (
  options?: ConfigureStoreOptions,
) =>
  configureStore({
    reducer: {
      search: searchReducer,
      user: userReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
    devTools: true,
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
