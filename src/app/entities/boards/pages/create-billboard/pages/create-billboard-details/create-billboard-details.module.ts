import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../../shared/shared.module';

import { CreateBillboardDetailsPageRoutingModule } from './create-billboard-details-routing.module';

import { CreateBillboardDetailsPage } from './create-billboard-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBillboardDetailsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [CreateBillboardDetailsPage]
})
export class CreateBillboardDetailsPageModule {
}
