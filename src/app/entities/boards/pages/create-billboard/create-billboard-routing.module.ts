import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from './constants/routes.constant';
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
        path: ROUTES[0],
        loadChildren: () => import('./pages/create-billboard-details/create-billboard-details.module').then(m => m.CreateBillboardDetailsPageModule)
      },
      {
        path: ROUTES[1],
        loadChildren: () => import('./pages/create-billboard-location/create-billboard-location.module').then(m => m.CreateBillboardLocationPageModule)
      },
      {
        path: ROUTES[2],
        loadChildren: () => import('./pages/create-billboard-photos/create-billboard-photos.module').then(m => m.CreateBillboardPhotosPageModule)
      },
      {
        path: ROUTES[3],
        loadChildren: () => import('./pages/create-billboard-finish/create-billboard-finish.module').then(m => m.CreateBillboardFinishPageModule)
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
