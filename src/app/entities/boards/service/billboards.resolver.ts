import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { IBillboard } from '../../../interfaces/billboard.interface';
import { FetchAllBillboards } from '../state/boards.actions';
import { selectAllBillboards } from '../state/boards.selectors';

@Injectable({
  providedIn: 'root'
})
export class BillboardsResolver implements Resolve<IBillboard[]> {

  constructor(private _store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBillboard[]> {
    return this._store
               .pipe(
                 select(selectAllBillboards),
                 tap((billboards) => {
                   if (billboards.length) return;

                   this._store.dispatch(FetchAllBillboards());
                 }), first());
  }
}
