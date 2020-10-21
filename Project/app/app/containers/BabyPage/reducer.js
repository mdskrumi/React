/*
 *
 * BabyPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_BABY_SHIRT_PRODUCTS,
  LOAD_BABY_SHIRT_PRODUCTS_SUCCESS,
  LOAD_BABY_SHIRT_PRODUCTS_ERROR,
  LOAD_BABY_JEANS_PRODUCTS,
  LOAD_BABY_JEANS_PRODUCTS_SUCCESS,
  LOAD_BABY_JEANS_PRODUCTS_ERROR,
} from './constants';

export const initialState = {
  products: [],
  loading: true,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const babyPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_BABY_SHIRT_PRODUCTS:
        return { loading: true, error: false, products: [] };
      case LOAD_BABY_SHIRT_PRODUCTS_SUCCESS:
        return { loading: false, error: false, products: action.payload }
      case LOAD_BABY_SHIRT_PRODUCTS_ERROR:
        return { loading: false, error: action.payload }
      case LOAD_BABY_JEANS_PRODUCTS:
        return { loading: true, error: false, products: [] };
      case LOAD_BABY_JEANS_PRODUCTS_SUCCESS:
        return { loading: false, error: false, products: action.payload }
      case LOAD_BABY_JEANS_PRODUCTS_ERROR:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  });

export default babyPageReducer;
