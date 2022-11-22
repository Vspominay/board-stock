import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';
import { CreateBillboardFinishPageRoutingModule } from './create-billboard-finish-routing.module';
import { CreateBillboardFinishPage } from './create-billboard-finish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBillboardFinishPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CreateBillboardFinishPage]
})
export class CreateBillboardFinishPageModule {
}
