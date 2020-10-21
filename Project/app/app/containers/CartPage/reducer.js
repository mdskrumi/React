/*
 *
 * CartPage reducer
 *
 */
import produce from 'immer';
import { ADD_TO_CART, REMOVE_FROM_CART } from './constants';

export const initialState = {
  productsInCart: []
}

/* eslint-disable default-case, no-param-reassign */
const cartPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case ADD_TO_CART:
        return { productsInCart: [...state.productsInCart, action.payload] }
      case REMOVE_FROM_CART:
        return state.filter(s => s !== action.payload);
      default:
        return state;
    }
  });

export default cartPageReducer;