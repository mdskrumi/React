import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the manPage state domain
 */

const selectManPageDomain = state => state.manPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ManPage
 */

const makeSelectManPage = () =>
  createSelector(
    selectManPageDomain,
    substate => substate,
  );

export default makeSelectManPage;
export { selectManPageDomain };
