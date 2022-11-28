import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

import { AppState } from '../../../../../reducers';
import { GetBillboardInformation } from '../../../state/boards.actions';

@Injectable({
  providedIn: 'root'
})
export class BillboardDetailsResolver implements Resolve<any> {
  constructor(private _store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._store
               .pipe(
                 filter(() => !!route.paramMap.get('id')),
                 tap(() => {
                   this._store.dispatch(GetBillboardInformation({ id: route.paramMap.get('id') }))
                 }),
                 first()
               );
  }
}
