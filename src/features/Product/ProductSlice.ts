import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '~/app/store'

interface ProductSliceState {
  productList: any
  productItem: any
  isLoading: boolean
  filterString: {
    type: string
    name: string
  }
}

const initialState: ProductSliceState = {
  productList: [],
  productItem: {},
  isLoading: false,
  filterString: {
    type: '',
    name: ''
  }
}

export const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<any>) => {
      state.productList = action.payload
      // console.log('productList:', state.productList)
    },
    setProductItem: (state, action: PayloadAction<object>) => {
      state.productItem = action.payload
      console.log('productItem:', state.productItem)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setFilter: (state, action: PayloadAction<any>) => {
      state.filterString = action.payload
      // console.log('filter name:', state.filterString);
    }
  }
})

export const { setProductList, setProductItem, setFilter, setLoading } = ProductSlice.actions

export const selectProductList = (state: RootState) => state.ProductSlice.productList
export const selectProductItem = (state: RootState) => state.ProductSlice.productItem
export const selectFilterString = (state: RootState) => state.ProductSlice.filterString
export const selectLoading = (state: RootState) => state.ProductSlice.isLoading
export const ProductSliceReducer = ProductSlice.reducer
