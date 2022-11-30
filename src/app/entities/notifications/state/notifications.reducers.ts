import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { INotification } from '../interfaces/notification.interface';
import { NotificationsActions } from './notifications-actions-types.actions';

export interface NotificationsState extends EntityState<INotification> {

}

export const adapter = createEntityAdapter<INotification>(
  { selectId: model => model.id }
);

export const initialNotificationsState = adapter.getInitialState();

export const notificationReducer = createReducer(
  initialNotificationsState,
  on(NotificationsActions.AllNotificationsFetched, (state, action) => adapter.addMany(action.notifications, state)),
  on(NotificationsActions.NotificationDeleted, (state, action) => adapter.removeOne(action.id, state))
);

export const { selectAll } = adapter.getSelectors();
