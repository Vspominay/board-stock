import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { AppState } from '../../../reducers';
import { FetchNotifications } from '../state/notifications.actions';

@Injectable({
  providedIn: 'root'
})
export class NotificationsResolver implements Resolve<any> {
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      tap(() => {
        this.store.dispatch(FetchNotifications());
      }),
      first()
    );
  }
}
