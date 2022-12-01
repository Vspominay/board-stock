import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeResolver } from './services/home.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full',
    resolve: { homePage: HomeResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {
}
