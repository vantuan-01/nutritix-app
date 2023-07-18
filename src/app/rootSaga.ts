// eslint-disable-next-line require-yield

import { ProductSaga } from '~/features/Product/ProductSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([ProductSaga()])
}
