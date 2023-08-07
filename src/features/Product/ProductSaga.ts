import { call, put, select, takeLatest } from 'redux-saga/effects'
import { filterType, listProductType, paginationType, productsType } from './ProductInterface'
import { selectFilterString, setLoading, setProductItem, setProductList } from './ProductSlice'

import productsApi from '~/api/productsApi'
import { selectPagination } from '../Pagination/PaginationSlice'

function* fetchProductSaga() {
  const pagination: paginationType = yield select(selectPagination)
  yield put(setLoading(true))
  yield (document.body.style.overflow = 'hidden')
  try {
    const list: listProductType = yield call(productsApi.getByPage, pagination._page)
    if (list) {
      yield put(setProductList(list.data))
      yield put(setLoading(false))
      yield (document.body.style.overflow = '')
    }
  } catch (error) {
    console.log(error)
  }
}

function* fetchProductByFilterSaga() {
  const pagination: paginationType = yield select(selectPagination)
  const filterString: filterType = yield select(selectFilterString)
  yield put(setLoading(true))
  // yield put({ type: setLoading, true: Boolean })
  yield (document.body.style.overflow = 'hidden')
  try {
    const list: listProductType = yield call(
      productsApi.getFilterByCategory,
      filterString.type,
      filterString.name,
      pagination._page
    )
    if (list) {
      yield put(setProductList(list.data))
      yield put(setLoading(false))
      document.body.style.overflow = ''
    }
  } catch (error) {
    console.log(error)
  }
}

function* fetchProductItemsSaga(action: any) {
  yield put(setLoading(true))
  yield (document.body.style.overflow = 'hidden')
  try {
    
    const data: productsType = yield call(productsApi.getSingle, action)
    if (data) {
      yield put(setProductItem(data))
      yield put(setLoading(false))
      document.body.style.overflow = ''
    }
  } catch (error) {
    console.log(error)
  }
}

export default function* ProductSaga() {
  yield takeLatest('fetchProductByFilterSaga', fetchProductByFilterSaga)
  yield takeLatest('fetchProductSaga', fetchProductSaga)
  yield takeLatest('fetchProductItemsSaga', fetchProductItemsSaga)
}
