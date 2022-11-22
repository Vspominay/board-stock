import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { IonicModule } from '@ionic/angular';
import { MapModule } from '../../../../../../modules/map/map.module';
import { SharedModule } from '../../../../../../shared/shared.module';

import { CreateBillboardLocationPageRoutingModule } from './create-billboard-location-routing.module';

import { CreateBillboardLocationPage } from './create-billboard-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBillboardLocationPageRoutingModule,
    LeafletMarkerClusterModule,
    LeafletModule,
    SharedModule,
    MapModule,
  ],
  providers: [
    NativeGeocoder
  ],
  declarations: [CreateBillboardLocationPage]
})
export class CreateBillboardLocationPageModule {
}
