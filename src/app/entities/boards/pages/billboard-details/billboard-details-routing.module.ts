import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillboardDetailsPage } from './billboard-details.page';
import { BillboardDetailsResolver } from './services/billboard-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: BillboardDetailsPage,
    resolve: { details: BillboardDetailsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillboardDetailsPageRoutingModule {
}
