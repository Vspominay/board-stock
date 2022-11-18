import { Component, OnInit } from '@angular/core';
import { NOTIFICATIONS } from './data/notitifications.data';
import { INotification } from './interfaces/notification.interface';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  public readonly notifications: INotification[] = [...NOTIFICATIONS];

  constructor() { }

  ngOnInit() {
  }

}
