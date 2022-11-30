import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutsModule } from '../../modules/layouts/layouts.module';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationsPageRoutingModule } from './notifications-routing.module';
import { NotificationsPage } from './notifications.page';
import { NotificationsEffects } from './state/notifications.effects';
import { notificationReducer } from './state/notifications.reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsPageRoutingModule,
    LayoutsModule,
    TranslateModule,
    EffectsModule.forFeature([NotificationsEffects]),
    StoreModule.forFeature("notifications", notificationReducer)
  ],
  declarations: [NotificationsPage, NotificationComponent]
})
export class NotificationsPageModule {
}
