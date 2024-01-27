import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productReducer from '../src/slices/productSlice'

const rootReducers = combineReducers({
    productStore: productReducer
})

export default configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})