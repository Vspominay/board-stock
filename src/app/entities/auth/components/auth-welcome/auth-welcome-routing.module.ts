import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthWelcomePage } from './auth-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: AuthWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthWelcomePageRoutingModule {}
