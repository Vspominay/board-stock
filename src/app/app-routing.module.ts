import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './entities/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/entities/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./entities/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./entities/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'boards',
    loadChildren: () => import('./entities/boards/boards.module').then(m => m.BoardsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'favorite',
    loadChildren: () => import('./entities/favorite/favorite.module').then(m => m.FavoritePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'agents',
    loadChildren: () => import('./entities/agents/agents.module').then(m => m.AgentsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./entities/notifications/notifications.module').then(m => m.NotificationsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./entities/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: 'transaction-review',
    loadChildren: () => import('./entities/transaction-review/transaction-review.module').then(m => m.TransactionReviewPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
