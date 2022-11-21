import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Platform } from '@ionic/angular';

import { KYIV_COORDINATES } from '../../../../../../constants/default-coordinates.constants';
import { ICoordinates } from '../../../../../../interfaces/coordinates.interface';

import { BaseCreateBillboardDirective } from '../base-create-billboard.directive';
import { tileLayer, latLng, marker, Marker, icon, Map } from 'leaflet';

@Component({
  selector: 'app-create-billboard-location',
  templateUrl: './create-billboard-location.page.html',
  styleUrls: ['./create-billboard-location.page.scss'],
})
export class CreateBillboardLocationPage extends BaseCreateBillboardDirective {

  constructor(
    private _fb: FormBuilder,
    private _nativeGeocoder: NativeGeocoder,
    private _platform: Platform
  ) {
    super();
  }

  private _map!: Map;

  public ngOnInit() {
    super.ngOnInit();
    // this.markerClusterData = this.generateMarker(this.coords);
  }

  public async getCurrentPosition() {
    await Geolocation.getCurrentPosition()
                     .then(({ coords }) => {
                       this.setDefaultLocation({ lat: coords.latitude, lng: coords.longitude });
                     })
                     .catch(() => {
                       this.setDefaultLocation({ ...KYIV_COORDINATES });
                     });
  }

  public options = {
    zoom: 5,
    maxZoom: 18,
    center: latLng([KYIV_COORDINATES.lat, KYIV_COORDINATES.lng]),

    layers: [tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {})],
  }

  public setDefaultLocation(coordinates: ICoordinates): void {
    if (this._map) {
      this._map.flyTo({ lat: coordinates.lat, lng: coordinates.lng });
    }
  }

  public onMapReady(map: Map): void {
    setTimeout(() => {
      this._map = map;
      this._map.invalidateSize();
      this.getCurrentPosition();
      this._map.attributionControl.remove();
    }, 1000);
  }

  public locationString!: string;

  getAddress(lat: number, long: number) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this._nativeGeocoder.reverseGeocode(lat, long, options).then(results => {
      this.locationString = `${results[0].countryCode && results[0].countryCode + ', '} ${results[0].administrativeArea && results[0].administrativeArea + ', '} ${results[0].thoroughfare && results[0].thoroughfare + ', '} ${results[0].subThoroughfare && results[0].subThoroughfare + ', '} ${results[0].postalCode}`;
    });
  }

  public generateMarker(coords: { lat: number, lng: number }): void {
    const locationIcon = icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: "../../../../../../../assets/images/pin-location.png"
    });

    const newMarker = marker([coords.lat, coords.lng], { icon: locationIcon, draggable: true });
    this._map.eachLayer(layer => layer instanceof Marker ? layer.remove() : 0);
    this._map.addLayer(newMarker);
    if (this._platform.is('hybrid')) {
      this.getAddress(coords.lat, coords.lng);
    }
  }

  protected initForm(): void {

  }
}
