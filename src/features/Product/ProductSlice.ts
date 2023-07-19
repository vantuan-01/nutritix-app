import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '~/app/store'

interface ProductSliceState {
  productItem: any
  phone: number
  pagination: {
    _page: number
    _limit: number
    _totalRows: number
  }
}

const initialState: ProductSliceState = {
  productItem: {},
  phone: 0,
  pagination: {
    _page: 1,
    _limit: 10,
    _totalRows: 1
  }
}

export const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    storeProductItem: (state, action: PayloadAction<object>) => {
      state.productItem = action.payload
      console.log('sliceitem', state.productItem)
    },
    increasement: (state, action: PayloadAction<number>) => {
      state.phone = action.payload
      console.log('phone', state.phone)
    },
    setPagination: (state, action: PayloadAction<any>) => {
      state.pagination = action.payload
      console.log('page slice', state.pagination)
    },
  }
})

export const { storeProductItem, increasement, setPagination } = ProductSlice.actions

export const selectProductItem = (state: RootState) => state.ProductSlice.productItem
export const selectvalue = (state: RootState) => state.ProductSlice.phone
export const selectPagination = (state: RootState) => state.ProductSlice.pagination
export const ProductSliceReducer = ProductSlice.reducer
