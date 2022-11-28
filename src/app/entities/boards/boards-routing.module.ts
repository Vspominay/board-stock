import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardsPage } from './boards.page';

const routes: Routes = [
  {
    path: '',
    component: BoardsPage
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create-billboard/create-billboard.module').then(m => m.CreateBillboardPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/billboard-details/billboard-details.module').then(m => m.BillboardDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsPageRoutingModule {
}
