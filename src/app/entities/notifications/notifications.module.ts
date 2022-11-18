import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutsModule } from '../../modules/layouts/layouts.module';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationsPageRoutingModule } from './notifications-routing.module';
import { NotificationsPage } from './notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsPageRoutingModule,
    LayoutsModule,
    TranslateModule
  ],
  declarations: [NotificationsPage, NotificationComponent]
})
export class NotificationsPageModule {
}
