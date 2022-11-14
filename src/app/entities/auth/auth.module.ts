import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

@NgModule({
  declarations: [AuthPage, AuthButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    SharedModule
  ],
})
export class AuthPageModule {
}
