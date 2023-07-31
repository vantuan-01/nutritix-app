import { ProductSlice, setProductList } from './ProductSlice'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { PayloadAction } from '@reduxjs/toolkit'
import productsApi from '~/api/productsApi'

// eslint-disable-next-line require-yield
function* fetchAllProducts(): Generator {
  const data: any = yield call(productsApi.getAll)
  console.log('fetchAllProducts running')
  yield put(setProductList(data))
}

export default function* ProductSaga() {
  // yield takeLatest(ProductSlice.actions.storeProductItem.type, fetchAllProducts)
  // yield takeLatest(ProductSlice.actions.storeProductItem, fetchProductData)
}
