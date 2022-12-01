import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IHomePage } from './home.reducers';

export const selectHomeState = createFeatureSelector<IHomePage>('home');

export const selectUser = createSelector(
  selectHomeState,
  state => state.user
);

export const selectAgents = createSelector(
  selectHomeState,
  state => state.agents
);

export const selectFeaturedBillboards = createSelector(
  selectHomeState,
  state => state.featuredBillboards
);
