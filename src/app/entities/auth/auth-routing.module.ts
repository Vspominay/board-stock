import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./components/auth-welcome/auth-welcome.module').then(m => m.AuthWelcomePageModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
      },
      {
        path: 'sign-in',
        loadChildren: () => import('./components/sign-in/sign-in.module').then(m => m.SignInPageModule)
      }
    ]
  },
  {
    path: 'auth-welcome',
    loadChildren: () => import('./components/auth-welcome/auth-welcome.module').then(m => m.AuthWelcomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {
}
