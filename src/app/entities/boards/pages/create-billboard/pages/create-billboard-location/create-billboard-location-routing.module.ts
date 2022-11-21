import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBillboardLocationPage } from './create-billboard-location.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBillboardLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBillboardLocationPageRoutingModule {}
