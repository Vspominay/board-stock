import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/profile-edit/profile-edit.module').then(m => m.ProfileEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {
}
