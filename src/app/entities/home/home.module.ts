import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from '../../modules/layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';
import { ModalSelectLocationComponent } from './components/modal-select-location/modal-select-location.component';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    LayoutsModule
  ],
  declarations: [HomePage, ModalSelectLocationComponent]

})
export class HomePageModule {
}
