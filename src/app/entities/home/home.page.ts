import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSelectLocationComponent } from './components/modal-select-location/modal-select-location.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private _modalCtrl: ModalController) { }

  ngOnInit() {
  }

  public selectLocation() {
    this._modalCtrl.create({
      component: ModalSelectLocationComponent,
      breakpoints: [0.55],
      initialBreakpoint: 0.55,
      cssClass: ['select-modal-container'],
      mode: 'md'
    })
        .then(modalEl => {
          modalEl.present();
        });
  }
}
