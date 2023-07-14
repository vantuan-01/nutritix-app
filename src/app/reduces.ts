import { ProductSliceReducer } from '~/features/Product/ProductSlice'
import { cartSlideReducer } from '~/features/CartSlide/CartSlideSlice'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  cartSlide: cartSlideReducer,
  ProductSlice: ProductSliceReducer
})

export default rootReducer
