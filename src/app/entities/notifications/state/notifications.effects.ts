import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';

import { NotificationsService } from '../services/notifications.service';
import { NotificationsActions } from './notifications-actions-types.actions';
import { AllNotificationsFetched, NotificationDeleted } from './notifications.actions';

@Injectable()
export class NotificationsEffects {
  constructor(private _actions$: Actions, private _notificationsService: NotificationsService) {}

  fetchNotifications$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(NotificationsActions.FetchNotifications),
                concatMap(() => this._notificationsService.getNotifications()),
                map(notifications => AllNotificationsFetched({ notifications }))
              )
  );

  deleteNotification$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(NotificationsActions.DeleteNotification),
                concatMap((value) => this._notificationsService.deleteNotification(value.id)
                                         .pipe(map(() => value.id))),
                map((id) => NotificationDeleted({ id }))
              )
  )
}
