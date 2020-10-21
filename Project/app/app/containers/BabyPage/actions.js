/*
 *
 * BabyPage actions
 *
 */

import {
  LOAD_BABY_SHIRT_PRODUCTS,
  LOAD_BABY_SHIRT_PRODUCTS_SUCCESS,
  LOAD_BABY_SHIRT_PRODUCTS_ERROR,
  LOAD_BABY_JEANS_PRODUCTS,
  LOAD_BABY_JEANS_PRODUCTS_SUCCESS,
  LOAD_BABY_JEANS_PRODUCTS_ERROR,
} from './constants';

export function loadBabyShirtProducts() {
  return {
    type: LOAD_BABY_SHIRT_PRODUCTS,
  };
}

export function loadBabyShirtProductsSuccess(products) {
  return {
    type: LOAD_BABY_SHIRT_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function loadBabyShirtProductsFailed(error) {
  return {
    type: LOAD_BABY_SHIRT_PRODUCTS_ERROR,
    payload: error,
  };
}


export function loadBabyJeansProducts() {
  return {
    type: LOAD_BABY_JEANS_PRODUCTS,
  };
}

export function loadBabyJeansProductsSuccess(products) {
  return {
    type: LOAD_BABY_JEANS_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function loadBabyJeansProductsFailed(error) {
  return {
    type: LOAD_BABY_JEANS_PRODUCTS_ERROR,
    payload: error,
  };
}
