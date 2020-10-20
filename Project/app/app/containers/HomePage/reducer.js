/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR } from './constants';

export const initialState = {
  products: [],
  loading: true,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    // console.log("Reducer", state);
    // console.log("Actions", action);
    switch (action.type) {
      case LOAD_PRODUCTS:
        return { loading: true, error: false }
      case LOAD_PRODUCTS_SUCCESS:
        return { loading: false, error: false, products: action.payload }
      case LOAD_PRODUCTS_ERROR:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  });

export default homePageReducer;
