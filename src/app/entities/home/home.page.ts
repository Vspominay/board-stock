import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AVAILABLE_LOCATIONS } from './data/available-locations.data';
import { BILLBOARD_OWNERS } from './data/billboard-owers.data';
import { ModalSelectLocationComponent } from './components/modal-select-location/modal-select-location.component';
import { BILLBOARDS } from './data/billboards.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //TODO delete it after api integration
  public currentLocation!: { label: string, value: string };
  public userName: string = 'John';
  public billboardOwners = [...BILLBOARD_OWNERS];
  public billboards = [...BILLBOARDS];

  constructor(private _modalCtrl: ModalController, private _changeDetectorRef: ChangeDetectorRef) { }

  public ngOnInit() {
    //TODO will be deleted after api integration
    this.currentLocation = {
      label: AVAILABLE_LOCATIONS.labels[0],
      value: AVAILABLE_LOCATIONS.values[0]
    };
  }

  public selectLocation() {
    this._modalCtrl.create({
      component: ModalSelectLocationComponent,
      breakpoints: [0.55],
      initialBreakpoint: 0.55,
      componentProps: {
        locations: AVAILABLE_LOCATIONS,
        currentLocation: this.currentLocation.value
      },
      cssClass: ['select-modal-container'],
      mode: 'md'
    })
        .then(modalEl => {
          modalEl.present();
          return modalEl.onDidDismiss();
        })
        .then(res => {
          if (res.role === 'confirm') {
            this.currentLocation = { ...res.data };
            this._changeDetectorRef.detectChanges();
          }
        });
  }
}
