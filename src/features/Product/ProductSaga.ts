import { ProductSlice, increasement, selectvalue, storeProductItem } from './ProductSlice'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { PayloadAction } from '@reduxjs/toolkit'
import productsApi from '~/api/productsApi'

// eslint-disable-next-line require-yield

// eslint-disable-next-line require-yield

function* fetchAllProducts(): Generator {
  const data: any = yield call(productsApi.getAll)
  console.log('fetchAllProducts running')
  yield put(storeProductItem(data))
}

function* fetchIncrease(): Generator {
  console.log('fetchIncrease running')
  yield put(increasement(1233))
}

function* fetchProductData() {
  try {
    yield all([ call(fetchIncrease)])
  } catch (error) {
    console.log('call api failed', error)
  }
}
export default function* ProductSaga() {
  // yield takeLatest(ProductSlice.actions.storeProductItem.type, fetchAllProducts)
  yield takeLatest(ProductSlice.actions.storeProductItem, fetchProductData)
}
