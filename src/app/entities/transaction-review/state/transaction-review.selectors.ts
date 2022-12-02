import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TransactionReviewState } from './transaction-review.reducers';

export const selectTransactionReviewState = createFeatureSelector<TransactionReviewState>('transaction-review');

export const clientSecret = createSelector(
  selectTransactionReviewState,
  state => state && state.paymentIntent && state.paymentIntent.client_secret
);
