import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
import { Store } from '@ngrx/store';
import { StripeElementsOptions } from '@stripe/stripe-js';
import { Observable, Subject } from 'rxjs';
import { filter, switchMap, takeUntil, tap } from 'rxjs/operators';

import { IBillboardStatus } from '../../interfaces/billboard-status.interface';
import { AppState } from '../../reducers';
import { selectBillboard } from '../boards/state/boards.selectors';
import { FetchPaymentIntent } from './state/transaction-review.actions';
import { clientSecret } from './state/transaction-review.selectors';

@Component({
  selector: 'app-transaction-review',
  templateUrl: './transaction-review.page.html',
  styleUrls: ['./transaction-review.page.scss'],
  providers: [Stripe]
})
export class TransactionReviewPage implements OnInit, OnDestroy {

  public billboardStatus$: Observable<IBillboardStatus> = this._route.paramMap
                                                              .pipe(
                                                                switchMap(paramMap => this._store.select(selectBillboard(paramMap.get('id')))),
                                                                filter(billboardStatus => !!billboardStatus),
                                                                tap(billboardStatus => this._retrievePaymentIntent(billboardStatus.billboard.price))
                                                              );


  private _destroy$: Subject<void> = new Subject<void>();

  public elementsOptions: StripeElementsOptions = {
    locale: 'en',
    clientSecret: ''
  };

  constructor(
    private _stripe: Stripe,
    private _route: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef,
    private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select(clientSecret)
        .pipe(filter(value => !!value), takeUntil(this._destroy$))
        .subscribe(clientSecret => {
          this.elementsOptions.clientSecret = clientSecret;
          this._changeDetectorRef.detectChanges();
        });
  }

  public ngSubmit(): void {
    this._stripe.createCardToken({ number: '', expMonth: 12, cvc: '220', expYear: 2023 })
        .then(token => console.log(token.id))
        .catch(error => console.error(error));
  }

  private _retrievePaymentIntent(amount: number): void {
    this._store.dispatch(FetchPaymentIntent({ amount }));
  }

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
