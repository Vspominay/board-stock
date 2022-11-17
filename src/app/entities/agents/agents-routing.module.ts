import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full'
  },
  {
    path: 'top',
    loadChildren: () => import('./top/top.module').then(m => m.TopPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentsPageRoutingModule {
}
