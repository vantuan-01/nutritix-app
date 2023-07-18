import { call, put, takeLatest } from 'redux-saga/effects'

import productsApi from '~/api/productsApi'

export function* ProductSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga)
  
  function* workerSaga(): Generator {
    try {
      const response = yield call(productsApi.getAll)
      const data = response
      
      
      // dispatch a success action to the store with the new dog
      yield put({ type: 'storeProductItem', data })
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: 'storeProductItem', error })
    }
  }
}

