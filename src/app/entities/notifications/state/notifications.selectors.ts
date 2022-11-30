import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationsState } from './notifications.reducers';
import * as fromNotifications from './notifications.reducers';

export const selectNotificationsState = createFeatureSelector<NotificationsState>("notifications");

export const selectAllNotifications = createSelector(
  selectNotificationsState,
  fromNotifications.selectAll
);
