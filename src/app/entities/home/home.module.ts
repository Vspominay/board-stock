import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LayoutsModule } from '../../modules/layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';
import { ModalSelectLocationComponent } from './components/modal-select-location/modal-select-location.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { HomeEffects } from './state/home.effects';
import { homeReducer } from './state/home.reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    LayoutsModule,
    EffectsModule.forFeature([HomeEffects]),
    StoreModule.forFeature("home", homeReducer)
  ],
  declarations: [HomePage, ModalSelectLocationComponent]

})
export class HomePageModule {
}
