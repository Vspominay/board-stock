import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PhotoPickerModule } from '../../../../../../modules/photo-picker/photo-picker.module';

import { CreateBillboardPhotosPageRoutingModule } from './create-billboard-photos-routing.module';

import { CreateBillboardPhotosPage } from './create-billboard-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBillboardPhotosPageRoutingModule,
    TranslateModule,
    PhotoPickerModule
  ],
  declarations: [CreateBillboardPhotosPage]
})
export class CreateBillboardPhotosPageModule {
}
