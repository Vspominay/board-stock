import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from '../../../modules/layouts/layouts.module';
import { SharedModule } from '../../../shared/shared.module';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    LayoutsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {
}
