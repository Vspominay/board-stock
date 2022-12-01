import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardsPage } from './boards.page';
import { BillboardDetailsResolver } from './pages/billboard-details/services/billboard-details.resolver';
import { BillboardsResolver } from './service/billboards.resolver';

const routes: Routes = [
  {
    path: '',
    component: BoardsPage,
    resolve: { billboards: BillboardsResolver }
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create-billboard/create-billboard.module').then(m => m.CreateBillboardPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/billboard-details/billboard-details.module').then(m => m.BillboardDetailsPageModule),
    resolve: { details: BillboardDetailsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsPageRoutingModule {
}
