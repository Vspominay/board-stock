import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    LeftMenuComponent
  ]
})
export class LayoutsModule {
}
