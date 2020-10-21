/*
 *
 * HomePage actions
 *
 */

import { LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR } from './constants';

export function loadProducts() {
  // console.log("Action: Load Products called");
  return {
    type: LOAD_PRODUCTS,
  };
}

export function loadProductsSuccess(products) {
  // console.log("Action: Load Products Success called");
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function loadProductsFailed(error) {
  // console.log("Action: Load Products Error called");
  return {
    type: LOAD_PRODUCTS_ERROR,
    payload: error,
  };
}
