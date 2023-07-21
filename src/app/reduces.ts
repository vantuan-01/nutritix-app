import { PaginationSlice, PaginationSliceReducer } from './../features/Pagination/PaginationSlice';

import { ProductSliceReducer } from '~/features/Product/ProductSlice'
import { cartSlideReducer } from '~/features/CartSlide/CartSlideSlice'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  cartSlide: cartSlideReducer,
  ProductSlice: ProductSliceReducer,
  PaginationSlice: PaginationSliceReducer
})

export default rootReducer
