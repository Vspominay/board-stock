import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    TabsComponent
  ]
})
export class LayoutsModule {
}
