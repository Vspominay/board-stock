import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/entities/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./entities/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./entities/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'boards',
    loadChildren: () => import('./entities/boards/boards.module').then(m => m.BoardsPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./entities/favorite/favorite.module').then(m => m.FavoritePageModule)
  },
  {
    path: 'agents',
    loadChildren: () => import('./entities/agents/agents.module').then(m => m.AgentsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./entities/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
