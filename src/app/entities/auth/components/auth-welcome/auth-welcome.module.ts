import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared.module';

import { AuthWelcomePageRoutingModule } from './auth-welcome-routing.module';

import { AuthWelcomePage } from './auth-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthWelcomePageRoutingModule,
    SharedModule
  ],
  declarations: [AuthWelcomePage]
})
export class AuthWelcomePageModule {
}
