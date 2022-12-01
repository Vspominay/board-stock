import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { IBillboardStatus } from '../../../interfaces/billboard-status.interface';
import { AppState } from '../../../reducers';
import { FetchFavoriteBillboards } from '../../boards/state/boards.actions';
import { isFetchedFavorite } from '../../boards/state/boards.selectors';

@Injectable({
  providedIn: 'root'
})
export class FavoriteResolver implements Resolve<IBillboardStatus[]> {

  constructor(private _store: Store<AppState>) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBillboardStatus[]> {
    return this._store
               .pipe(
                 select(isFetchedFavorite),
                 tap((isFetched) => {
                   if (isFetched) return;

                   this._store.dispatch(FetchFavoriteBillboards());
                 }), first());
  }
}
