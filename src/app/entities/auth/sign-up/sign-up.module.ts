import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LayoutsModule } from '../../../modules/layouts/layouts.module';
import { SharedModule } from '../../../shared/shared.module';
import { AuthEffects } from '../state/auth.effects';
import { authReducer } from '../state/auth.reducers';

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
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature("auth", authReducer)
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {
}
