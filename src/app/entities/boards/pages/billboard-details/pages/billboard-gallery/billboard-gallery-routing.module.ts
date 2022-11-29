import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillboardGalleryPage } from './billboard-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: BillboardGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillboardGalleryPageRoutingModule {}
