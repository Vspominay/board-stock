import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TABS } from '../../constants/tabs.constant';

import { AVAILABLE_LOCATIONS } from './components/modal-select-location/data/available-locations.data';
import { BILLBOARD_OWNERS } from './components/modal-select-location/data/billboard-owers.data';
import { ModalSelectLocationComponent } from './components/modal-select-location/modal-select-location.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public currentLocation!: { label: string, value: string };
  public userName: string = 'John';
  public billboardOwners = [...BILLBOARD_OWNERS];
  public tabs = [...TABS];

  constructor(private _modalCtrl: ModalController) { }

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
          }
        });
  }
}
