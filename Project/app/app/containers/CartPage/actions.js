/*
 *
 * CartPage actions
 *
 */
import { ADD_TO_CART, REMOVE_FROM_CART } from './constants';

export function addToCart(product) {
  console.log("In Cart Action", product);
  return {
    type: ADD_TO_CART,
    payload: product
  };
}


export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  };
}