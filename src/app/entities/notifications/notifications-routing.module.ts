import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsPage } from './notifications.page';
import { NotificationsResolver } from './services/notifications.resolver';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage,
    resolve: { notifications: NotificationsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsPageRoutingModule {
}
