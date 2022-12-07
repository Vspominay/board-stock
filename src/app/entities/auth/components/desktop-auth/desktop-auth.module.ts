import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesktopAuthPageRoutingModule } from './desktop-auth-routing.module';

import { DesktopAuthPage } from './desktop-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesktopAuthPageRoutingModule
  ],
  declarations: [DesktopAuthPage]
})
export class DesktopAuthPageModule {}
