import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { first, tap } from 'rxjs/operators';
import { AppState } from '../../../reducers';
import { FetchProfileData } from '../state/profile.actions';
import { selectUserInformation } from '../state/profile.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any> {
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
               .pipe(
                 select(selectUserInformation),
                 tap(({ id }) => {
                   if (id) return;
                   this.store.dispatch(FetchProfileData())
                 }), first());
  }
}
