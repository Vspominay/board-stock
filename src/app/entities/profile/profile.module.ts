import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LayoutsModule } from '../../modules/layouts/layouts.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfilePreviewComponent } from './components/profile-preview/profile-preview.component';
import { StatisticsFieldComponent } from './components/statistics-field/statistics-field.component';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    LayoutsModule,
    SharedModule
  ],
  declarations: [ProfilePage, StatisticsFieldComponent, ProfilePreviewComponent]
})
export class ProfilePageModule {
}
