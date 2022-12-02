import { createReducer, on } from '@ngrx/store';
import { PaymentIntent } from '@stripe/stripe-js';

import { TransactionReviewActions } from './transaction-review.actions-types';

export interface TransactionReviewState {
  paymentIntent: PaymentIntent | null
}

export const transactionReviewReducer = createReducer(
  null,
  on(TransactionReviewActions.PaymentIntentFetched, (state, action) => {
    return {
      paymentIntent: { ...action.paymentIntent }
    }
  })
);
