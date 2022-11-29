import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LayoutsModule } from '../../../../../../modules/layouts/layouts.module';
import { SlidersModule } from '../../../../../../modules/sliders/sliders.module';

import { BillboardGalleryPageRoutingModule } from './billboard-gallery-routing.module';

import { BillboardGalleryPage } from './billboard-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillboardGalleryPageRoutingModule,
    SlidersModule,
    LayoutsModule,
  ],
  declarations: [BillboardGalleryPage]
})
export class BillboardGalleryPageModule {
}
