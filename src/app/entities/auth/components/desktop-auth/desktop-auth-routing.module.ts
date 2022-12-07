import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopAuthPage } from './desktop-auth.page';

const routes: Routes = [
  {
    path: '',
    component: DesktopAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopAuthPageRoutingModule {}
