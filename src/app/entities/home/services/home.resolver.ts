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
import { FetchHomeData } from '../state/home.actions';
import { IHomePage } from '../state/home.reducers';
import { selectHomeState } from '../state/home.selectors';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<IHomePage> {
  constructor(private _store: Store<AppState>) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHomePage> {
    return this._store.pipe(
      select(selectHomeState),
      tap(homeData => {
        if (homeData.user.name) return;

        this._store.dispatch(FetchHomeData());
      }), first()
    );
  }
}
