import { takeLatest, call, put, select } from 'redux-saga/effects';

import shopApi from '../../api/shopApi';

import {
  LOAD_MAN_SHIRT_PRODUCTS,
  LOAD_MAN_JEANS_PRODUCTS,
} from './constants';


import {
  loadManShirtProductsSuccess,
  loadManShirtProductsFailed,
  loadManJeansProductsSuccess,
  loadManJeansProductsFailed
} from './actions';


export function* loadManShirtProducts() {
  console.log("Loading Man Shirt");
  try {
    const products = yield shopApi.get('/products');
    yield put(loadManShirtProductsSuccess(products.data));
  } catch (error) {
    yield put(loadManShirtProductsFailed(error));
  }

}


export function* loadManJeansProducts() {
  console.log("Loading Man Jeans");
  try {
    const products = yield shopApi.get('/products');
    yield put(loadManJeansProductsSuccess(products.data));
  } catch (error) {
    yield put(loadManJeansProductsFailed(error));
  }
}



// Individual exports for testing
export default function* manPageSaga() {
  yield takeLatest(LOAD_MAN_SHIRT_PRODUCTS, loadManShirtProducts)
  yield takeLatest(LOAD_MAN_JEANS_PRODUCTS, loadManJeansProducts)
}
