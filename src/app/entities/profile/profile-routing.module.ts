import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { ProfileResolver } from './services/profile.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    pathMatch: 'full',
    resolve: { profile: ProfileResolver }
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/profile-edit/profile-edit.module').then(m => m.ProfileEditPageModule),
    resolve: { profile: ProfileResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {
}
