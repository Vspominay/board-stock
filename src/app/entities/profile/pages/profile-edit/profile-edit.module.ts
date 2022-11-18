import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutsModule } from '../../../../modules/layouts/layouts.module';
import { SharedModule } from '../../../../shared/shared.module';

import { ProfileEditPageRoutingModule } from './profile-edit-routing.module';

import { ProfileEditPage } from './profile-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEditPageRoutingModule,
    LayoutsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileEditPage]
})
export class ProfileEditPageModule {
}
