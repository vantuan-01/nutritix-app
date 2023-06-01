import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartSlideState {
  isCartSlide: boolean
}

// Define the initial state using that type
const initialState: CartSlideState = {
  isCartSlide: false
}

export const cartSlideSlice = createSlice({
  name: 'CartSlide',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleChangeSlide: (state, action: PayloadAction<boolean>) => {
      state.isCartSlide = action.payload
    }
  }
})

export const { handleChangeSlide } = cartSlideSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const selectCartSlice = (state: RootState) => state.cartSlide.isCartSlide
export const cartSlideReducer = cartSlideSlice.reducer
