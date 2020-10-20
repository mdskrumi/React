import { take, call, put, select } from 'redux-saga/effects';

import { loadProductsSuccess, loadProductsFailed } from './actions'
import shopApi from '../../api/shopApi';



export function* loadProducts() {
  try {
    const products = yield shopApi.get('/products');
    yield put(loadProductsSuccess(products.data));
  } catch (error) {
    yield put(loadProductsFailed(error));
  }

}

// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield loadProducts();
}
