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
import { FetchAllBillboards } from '../state/boards.actions';
import { isFetched } from '../state/boards.selectors';

@Injectable({
  providedIn: 'root'
})
export class BillboardsResolver implements Resolve<IBillboardStatus[]> {

  constructor(private _store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBillboardStatus[]> {
    return this._store
               .pipe(
                 select(isFetched),
                 tap((isFetched) => {
                   if (isFetched) return;

                   this._store.dispatch(FetchAllBillboards());
                 }), first());
  }
}
