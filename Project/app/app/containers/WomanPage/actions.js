/*
 *
 * WomanPage actions
 *
 */

import {
  LOAD_WOMAN_SHIRT_PRODUCTS,
  LOAD_WOMAN_SHIRT_PRODUCTS_SUCCESS,
  LOAD_WOMAN_SHIRT_PRODUCTS_ERROR,
  LOAD_WOMAN_JEANS_PRODUCTS,
  LOAD_WOMAN_JEANS_PRODUCTS_SUCCESS,
  LOAD_WOMAN_JEANS_PRODUCTS_ERROR,
} from './constants';

export function loadWomanShirtProducts() {
  return {
    type: LOAD_WOMAN_SHIRT_PRODUCTS,
  };
}

export function loadWomanShirtProductsSuccess(products) {
  return {
    type: LOAD_WOMAN_SHIRT_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function loadWomanShirtProductsFailed(error) {
  return {
    type: LOAD_WOMAN_SHIRT_PRODUCTS_ERROR,
    payload: error,
  };
}


export function loadWomanJeansProducts() {
  return {
    type: LOAD_WOMAN_JEANS_PRODUCTS,
  };
}

export function loadWomanJeansProductsSuccess(products) {
  return {
    type: LOAD_WOMAN_JEANS_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function loadWomanJeansProductsFailed(error) {
  return {
    type: LOAD_WOMAN_JEANS_PRODUCTS_ERROR,
    payload: error,
  };
}
