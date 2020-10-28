import { takeEvery, take, call, put, select } from 'redux-saga/effects';
import { addToCart, removeFromCart } from './actions';
import { ADD_TO_CART } from './constants';



export function* add(product) {
  yield put(addToCart(product));
}

// Individual exports for testing
export default function* mainPageSaga() {
  yield take(ADD_TO_CART, add);
}
