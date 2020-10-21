import { createSelector } from 'reselect';

const selectRouter = state => state;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { makeSelectLocation };
