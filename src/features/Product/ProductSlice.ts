import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '~/app/store'

interface ProductSliceState {
  productList: any
  isLoading: boolean
  filterString: {
    type: string
    name: string
  }
}

const initialState: ProductSliceState = {
  productList: [],
  isLoading: false,
  filterString: {
    type: "",
    name: ""
  }
}

export const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<object>) => {
      state.productList = action.payload
      // console.log('productList:', state.productList)
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

export const { setProductList, setFilter, setLoading } = ProductSlice.actions

export const selectProductItem = (state: RootState) => state.ProductSlice.productList
export const selectFilterString = (state: RootState) => state.ProductSlice.filterString
export const selectLoading = (state: RootState) => state.ProductSlice.isLoading
export const ProductSliceReducer = ProductSlice.reducer
