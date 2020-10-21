import { takeLatest, call, put, select } from 'redux-saga/effects';

import shopApi from '../../api/shopApi';

import {
  LOAD_WOMAN_SHIRT_PRODUCTS,
  LOAD_WOMAN_JEANS_PRODUCTS,
} from './constants';

import {
  loadWomanShirtProductsSuccess,
  loadWomanShirtProductsFailed,
  loadWomanJeansProductsSuccess,
  loadWomanJeansProductsFailed
} from './actions';


export function* loadWomanShirtProducts() {
  console.log("Loading Woman Shirt");
  try {
    const products = yield shopApi.get('/products');
    yield put(loadWomanShirtProductsSuccess(products.data));
  } catch (error) {
    yield put(loadWomanShirtProductsFailed(error));
  }

}


export function* loadWomanJeansProducts() {
  console.log("Loading Woman Jeans");
  try {
    const products = yield shopApi.get('/products');
    yield put(loadWomanJeansProductsSuccess(products.data));
  } catch (error) {
    yield put(loadWomanJeansProductsFailed(error));
  }
}




// Individual exports for testing
export default function* womanPageSaga() {
  yield takeLatest(LOAD_WOMAN_SHIRT_PRODUCTS, loadWomanShirtProducts)
  yield takeLatest(LOAD_WOMAN_JEANS_PRODUCTS, loadWomanJeansProducts)
}
