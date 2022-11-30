import { createAction, props } from '@ngrx/store';
import { INotification } from '../interfaces/notification.interface';

export const FetchNotifications = createAction(
  '[Notifications] Fetch all notifications'
);

export const AllNotificationsFetched = createAction(
  '[Notifications] All notifications fetched',
  props<{ notifications: INotification[] }>()
);

export const DeleteNotification = createAction(
  '[Notifications] Delete notification',
  props<{ id: string }>()
);

export const NotificationDeleted = createAction(
  '[Notifications] Notification deleted',
  props<{ id: string }>()
);
