import { take, call, put, select } from 'redux-saga/effects';

import { loadProductsSuccess } from './actions'
import shopApi from '../../api/shopApi';



export function* loadProducts() {
  const products = yield shopApi.get('/products');
  yield put(loadProductsSuccess(products.data));
}

// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield loadProducts();
}
