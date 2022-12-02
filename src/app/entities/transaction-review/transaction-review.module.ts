import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxStripeModule } from 'ngx-stripe';

import { LayoutsModule } from '../../modules/layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';
import { TransactionReviewEffects } from './state/transaction-review.effects';
import { transactionReviewReducer } from './state/transaction-review.reducers';

import { TransactionReviewPageRoutingModule } from './transaction-review-routing.module';

import { TransactionReviewPage } from './transaction-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionReviewPageRoutingModule,
    LayoutsModule,
    SharedModule,
    NgxStripeModule,
    EffectsModule.forFeature([TransactionReviewEffects]),
    StoreModule.forFeature("transaction-review", transactionReviewReducer)
  ],
  declarations: [TransactionReviewPage]
})
export class TransactionReviewPageModule {
}
