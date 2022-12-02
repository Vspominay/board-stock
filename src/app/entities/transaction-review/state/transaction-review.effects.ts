import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs/operators';
import { TransactionReviewService } from '../sevices/transaction-review.service';
import { PaymentIntentFetched } from './transaction-review.actions';
import { TransactionReviewActions } from './transaction-review.actions-types';

@Injectable()
export class TransactionReviewEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store,
    private _transactionReviewService: TransactionReviewService
  ) {}

  fetchPaymentIntent$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(TransactionReviewActions.FetchPaymentIntent),
                concatMap(intentParams => this._transactionReviewService.createPaymentIntent(intentParams.amount)),
                map(paymentIntent => PaymentIntentFetched({ paymentIntent }))
              )
  )
}
