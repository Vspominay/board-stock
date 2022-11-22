import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBillboardPhotosPage } from './create-billboard-photos.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBillboardPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBillboardPhotosPageRoutingModule {}
