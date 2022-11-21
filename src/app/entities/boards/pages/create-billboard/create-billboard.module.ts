import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';


import { LayoutsModule } from '../../../../modules/layouts/layouts.module';
import { CreateBillboardPageRoutingModule } from './create-billboard-routing.module';
import { CreateBillboardPage } from './create-billboard.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBillboardPageRoutingModule,
    LayoutsModule,
    TranslateModule
  ],
  declarations: [CreateBillboardPage]
})
export class CreateBillboardPageModule {
}
