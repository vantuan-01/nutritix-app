import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '~/app/store'

interface ProductSliceState {
  productItem: any
}

const initialState: ProductSliceState = {
  productItem: {}
}

export const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    storeProductItem: (state, action: PayloadAction<object>) => {
      state.productItem = action.payload
    }
  }
})

export const { storeProductItem } = ProductSlice.actions

export const selectProductItem = (state: RootState) => state.ProductSlice.productItem
export const ProductSliceReducer = ProductSlice.reducer

