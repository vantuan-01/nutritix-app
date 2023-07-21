import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '~/app/store'

interface ProductSliceState {
  productItem: any
  phone: number
  isLoading: boolean
}

const initialState: ProductSliceState = {
  productItem: {},
  phone: 0,
  isLoading: false
}

export const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    storeProductItem: (state, action: PayloadAction<object>) => {
      state.productItem = action.payload
      // console.log('sliceitem', state.productItem)
    },
    increasement: (state, action: PayloadAction<number>) => {
      state.phone = action.payload
      // console.log('phone', state.phone)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { storeProductItem, increasement, setLoading } = ProductSlice.actions

export const selectProductItem = (state: RootState) => state.ProductSlice.productItem
export const selectvalue = (state: RootState) => state.ProductSlice.phone
export const selectLoading = (state: RootState) => state.ProductSlice.isLoading
export const ProductSliceReducer = ProductSlice.reducer
