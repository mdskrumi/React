import { take, call, put, select } from 'redux-saga/effects';
import { addToCart, removeFromCart } from './actions';
import { ADD_TO_CART } from './constants';



export function* add(product) {
  console.log("saga");
  yield put(addToCart(product));
}

// Individual exports for testing
export default function* cartPageSaga() {
  // See example in containers/HomePage/saga.js
  yield take(ADD_TO_CART, add);
}
