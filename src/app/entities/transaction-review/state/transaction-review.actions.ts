import { createAction, props } from '@ngrx/store';
import { PaymentIntent } from '@stripe/stripe-js';

export const FetchPaymentIntent = createAction(
  '[Transaction Review] Fetch payment intent',
  props<{ amount?: number }>()
);

export const PaymentIntentFetched = createAction(
  '[Transaction Review] Payment intent fetched',
  props<{ paymentIntent: PaymentIntent }>()
);
