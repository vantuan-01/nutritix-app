import { cartSlideReducer } from '~/features/CartSlide/CartSlideSlice'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  cartSlide: cartSlideReducer
})

export default rootReducer