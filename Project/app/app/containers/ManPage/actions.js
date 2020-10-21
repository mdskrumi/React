/*
 *
 * ManPage actions
 *
 */

import {
  LOAD_MAN_SHIRT_PRODUCTS,
  LOAD_MAN_SHIRT_PRODUCTS_SUCCESS,
  LOAD_MAN_SHIRT_PRODUCTS_ERROR,
  LOAD_MAN_JEANS_PRODUCTS,
  LOAD_MAN_JEANS_PRODUCTS_SUCCESS,
  LOAD_MAN_JEANS_PRODUCTS_ERROR,
} from './constants';

export function loadManShirtProducts() {
  return {
    type: LOAD_MAN_SHIRT_PRODUCTS,
  };
}

export function loadManShirtProductsSuccess(products) {
  return {
    type: LOAD_MAN_SHIRT_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function loadManShirtProductsFailed(error) {
  return {
    type: LOAD_MAN_SHIRT_PRODUCTS_ERROR,
    payload: error,
  };
}


export function loadManJeansProducts() {
  return {
    type: LOAD_MAN_JEANS_PRODUCTS,
  };
}

export function loadManJeansProductsSuccess(products) {
  return {
    type: LOAD_MAN_JEANS_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function loadManJeansProductsFailed(error) {
  return {
    type: LOAD_MAN_JEANS_PRODUCTS_ERROR,
    payload: error,
  };
}
