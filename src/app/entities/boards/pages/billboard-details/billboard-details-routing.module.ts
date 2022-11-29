import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillboardDetailsPage } from './billboard-details.page';

const routes: Routes = [
  {
    path: '',
    component: BillboardDetailsPage
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/billboard-gallery/billboard-gallery.module').then(m => m.BillboardGalleryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillboardDetailsPageRoutingModule {
}
