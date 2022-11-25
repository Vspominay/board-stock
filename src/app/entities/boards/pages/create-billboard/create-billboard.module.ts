import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';


import { LayoutsModule } from '../../../../modules/layouts/layouts.module';
import { CreateBillboardPageRoutingModule } from './create-billboard-routing.module';
import { CreateBillboardPage } from './create-billboard.page';
import { CreateBillboardEffects } from './state/create-billboard.effects';
import { createBillboardReducer } from './state/create-billboard.reducers';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBillboardPageRoutingModule,
    LayoutsModule,
    TranslateModule,
    EffectsModule.forFeature([CreateBillboardEffects]),
    StoreModule.forFeature("createBillboard", createBillboardReducer)
  ],
  declarations: [CreateBillboardPage]
})
export class CreateBillboardPageModule {
}
