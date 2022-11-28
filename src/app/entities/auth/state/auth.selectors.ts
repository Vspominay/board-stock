import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const token = createSelector(
  selectAuthState,
  authState => authState.token
);
