import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LayoutsModule } from '../../modules/layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';
import { StatisticsFieldComponent } from './components/statistics-field/statistics-field.component';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { ProfileEffects } from './state/profile.effects';
import { profileReducer } from './state/profile.reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    LayoutsModule,
    SharedModule,
    EffectsModule.forFeature([ProfileEffects]),
    StoreModule.forFeature("profile", profileReducer)
  ],
  exports: [],
  declarations: [ProfilePage, StatisticsFieldComponent]
})
export class ProfilePageModule {
}
