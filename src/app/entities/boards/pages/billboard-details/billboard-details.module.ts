import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { IonicModule } from '@ionic/angular';

import { LayoutsModule } from '../../../../modules/layouts/layouts.module';
import { MapModule } from '../../../../modules/map/map.module';
import { SharedModule } from '../../../../shared/shared.module';
import { BillboardDetailsPageRoutingModule } from './billboard-details-routing.module';
import { BillboardDetailsPage } from './billboard-details.page';
import { BillboardImagePreviewComponent } from './components/billboard-imaga-preview/billboard-image-preview.component';
import { DetailsInfoComponent } from './components/details-info/details-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillboardDetailsPageRoutingModule,
    LayoutsModule,
    SharedModule,
    MapModule
  ],
  providers: [
    NativeGeocoder
  ],
  declarations: [BillboardDetailsPage, DetailsInfoComponent, BillboardImagePreviewComponent]
})
export class BillboardDetailsPageModule {
}
