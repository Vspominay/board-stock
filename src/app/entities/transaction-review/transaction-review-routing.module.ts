import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillboardDetailsResolver } from '../boards/pages/billboard-details/services/billboard-details.resolver';
import { TransactionReviewPage } from './transaction-review.page';

const routes: Routes = [
  {
    path: ':id',
    component: TransactionReviewPage,
    resolve: { transactionReview: BillboardDetailsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionReviewPageRoutingModule {
}
