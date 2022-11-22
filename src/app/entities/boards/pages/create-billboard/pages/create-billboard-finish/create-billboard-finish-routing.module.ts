import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBillboardFinishPage } from './create-billboard-finish.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBillboardFinishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBillboardFinishPageRoutingModule {}
