import { takeLatest, call, put, select } from 'redux-saga/effects';


import shopApi from '../../api/shopApi';

import {
  LOAD_BABY_SHIRT_PRODUCTS,
  LOAD_BABY_JEANS_PRODUCTS,
} from './constants';


import {
  loadBabyShirtProductsSuccess,
  loadBabyShirtProductsFailed,
  loadBabyJeansProductsSuccess,
  loadBabyJeansProductsFailed
} from './actions';


export function* loadBabyShirtProducts() {
  console.log("Loading Baby Shirt");
  try {
    const products = yield shopApi.get('/products');
    yield put(loadBabyShirtProductsSuccess(products.data));
  } catch (error) {
    yield put(loadBabyShirtProductsFailed(error));
  }

}


export function* loadBabyJeansProducts() {
  console.log("Loading Baby Jeans");
  try {
    const products = yield shopApi.get('/products');
    yield put(loadBabyJeansProductsSuccess(products.data));
  } catch (error) {
    yield put(loadBabyJeansProductsFailed(error));
  }
}



// Individual exports for testing
export default function* babyPageSaga() {
  yield takeLatest(LOAD_BABY_SHIRT_PRODUCTS, loadBabyShirtProducts)
  yield takeLatest(LOAD_BABY_JEANS_PRODUCTS, loadBabyJeansProducts)
}
