import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '~/app/store'

interface PaginationSliceState {
  pagination: {
    _page: number
    _limit: number
    _totalRows: number
  }
}

const initialState: PaginationSliceState = {
  pagination: {
    _page: 1,
    _limit: 10,
    _totalRows: 1
  }
}

export const PaginationSlice = createSlice({
  name: 'PaginationSlice',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      state.pagination = action.payload
      // console.log('page slice', state.pagination)
    }
  }
})

export const { setPagination } = PaginationSlice.actions
export const selectPagination = (state: RootState) => state.PaginationSlice.pagination
export const PaginationSliceReducer = PaginationSlice.reducer
