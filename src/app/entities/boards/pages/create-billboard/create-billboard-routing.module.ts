import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBillboardPage } from './create-billboard.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBillboardPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'details',
      },
      {
        path: 'details',
        loadChildren: () => import('./pages/create-billboard-details/create-billboard-details.module').then(m => m.CreateBillboardDetailsPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./pages/create-billboard-location/create-billboard-location.module').then(m => m.CreateBillboardLocationPageModule)
      },
      {
        path: 'photos',
        loadChildren: () => import('./pages/create-billboard-photos/create-billboard-photos.module').then(m => m.CreateBillboardPhotosPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBillboardPageRoutingModule {
}
