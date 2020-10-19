import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the womanPage state domain
 */

const selectWomanPageDomain = state => state.womanPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WomanPage
 */

const makeSelectWomanPage = () =>
  createSelector(
    selectWomanPageDomain,
    substate => substate,
  );

export default makeSelectWomanPage;
export { selectWomanPageDomain };
