import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Platform } from '@ionic/angular';
import { icon, latLng, Map, Marker, marker, tileLayer } from 'leaflet';
import { KYIV_COORDINATES } from '../../constants/default-coordinates.constants';
import { ICoordinates } from '../../interfaces/coordinates.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input() coordinates?: ICoordinates[];
  @Input() isClickable: boolean = false;
  @Input() description?: string;
  @Input() isInteractive: boolean = true;

  @Output() onSelectLocation: EventEmitter<{
    coords: ICoordinates,
    location: string
  }> = new EventEmitter<{
    coords: ICoordinates,
    location: string
  }>();

  constructor(
    private _nativeGeocoder: NativeGeocoder,
    private _platform: Platform
  ) { }

  public ngOnInit() {}

  private _map!: Map;

  public options = {
    zoom: 10,
    maxZoom: 18,
    center: latLng([KYIV_COORDINATES.lat, KYIV_COORDINATES.lng]),

    layers: [tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {})],
  }

  public dragMarker(event: any): void {
    console.log(event);
  }

  public onMapReady(map: Map): void {
    setTimeout(() => {
      this._map = map;
      this._map.invalidateSize();
      if (this.isInteractive) {
        this._getCurrentPosition();
      }
      this._map.attributionControl.remove();

      if (this.coordinates.length && !this.isInteractive) {
        for (const coordinate of this.coordinates) {
          this.generateMarker({ lat: coordinate.lat, lng: coordinate.lng });
        }
      }
    }, 1000);
  }

  private async _getCurrentPosition() {
    await Geolocation.getCurrentPosition()
                     .then(({ coords }) => {
                       this._setDefaultLocation({ lat: coords.latitude, lng: coords.longitude });
                     })
                     .catch(() => {
                       this._setDefaultLocation({ ...KYIV_COORDINATES });
                     });
  }

  private _setDefaultLocation(coordinates: ICoordinates): void {
    if (this._map) {
      this._map.flyTo({ lat: coordinates.lat, lng: coordinates.lng });
    }
  }

  private _getAddress(lat: number, lng: number) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this._nativeGeocoder.reverseGeocode(lat, lng, options).then(results => {
      this.onSelectLocation.emit({
        location: `${results[0].countryCode && results[0].countryCode + ', '} ${results[0].administrativeArea && results[0].administrativeArea + ', '} ${results[0].thoroughfare && results[0].thoroughfare + ', '} ${results[0].subThoroughfare && results[0].subThoroughfare + ', '} ${results[0].postalCode}`,
        coords: { lat, lng }
      });
    });
  }

  public generateMarker(coords: { lat: number, lng: number }, isInteractive: boolean = true): void {
    const locationIcon = icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: "../../../../../../../assets/images/pin-location.png"
    });

    const newMarker = marker([coords.lat, coords.lng], { icon: locationIcon, draggable: this.isInteractive })
      .on('dragend', (event) => {
        this._emitCoords(event.target.getLatLng().lat, event.target.getLatLng().lng);
      });
    this._map.eachLayer(layer => layer instanceof Marker ? layer.remove() : 0);
    this._map.addLayer(newMarker);

    this._emitCoords(coords.lat, coords.lng);
  }

  private _emitCoords(lat: number, lng: number): void {
    if (this._platform.is('hybrid')) {
      this._getAddress(lat, lng);
    } else {
      this.onSelectLocation.emit({
        location: `${lat} ${lng}`,
        coords: { lat: lat, lng: lng }
      });
    }
  }
}
