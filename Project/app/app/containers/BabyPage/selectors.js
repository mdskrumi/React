import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the babyPage state domain
 */

const selectBabyPageDomain = state => state.babyPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BabyPage
 */

const makeSelectBabyPage = () =>
  createSelector(
    selectBabyPageDomain,
    substate => substate,
  );

export default makeSelectBabyPage;
export { selectBabyPageDomain };
