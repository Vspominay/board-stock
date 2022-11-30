import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../reducers';
import { INotification } from './interfaces/notification.interface';
import { DeleteNotification } from './state/notifications.actions';
import { selectAllNotifications } from './state/notifications.selectors';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage {

  public readonly notifications$: Observable<INotification[]> = this._store.select(selectAllNotifications);

  constructor(
    private _store: Store<AppState>,
    private _alertController: AlertController
  ) { }

  public async deleteNotification(id: string) {
    const alert = await this._alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('confirm')
            this._store.dispatch(DeleteNotification({ id }));
          },
        },
      ],
    });

    await alert.present();
  }
}
