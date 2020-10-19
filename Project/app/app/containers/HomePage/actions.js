/*
 *
 * HomePage actions
 *
 */

import { LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR } from './constants';

export function loadProducts() {
  return {
    type: LOAD_PRODUCTS,
    payload: null,
  };
}

export function loadProductsSuccess(products) {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function loadProductsFailed(error) {
  return {
    type: LOAD_PRODUCTS_ERROR,
    payload: error,
  };
}
