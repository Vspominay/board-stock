import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritePage } from './favorite.page';
import { FavoriteResolver } from './services/favorite.resolver';

const routes: Routes = [
  {
    path: '',
    component: FavoritePage,
    pathMatch: 'full',
    resolve: { favoriteBillboards: FavoriteResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritePageRoutingModule {
}
