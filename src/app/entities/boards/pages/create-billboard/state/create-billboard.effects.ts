import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map, withLatestFrom } from 'rxjs/operators';

import { BoardsService } from '../../../service/boards.service';
import { CreateBillboardsActions } from './create-billboard.actions-types';
import { selectCreateBillboardState } from './create-billboard.selectors';

@Injectable()
export class CreateBillboardEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store,
    private _billboardService: BoardsService,
    private _router: Router
  ) {}

  createBillboardService$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(CreateBillboardsActions.createBillboard),
                withLatestFrom(this._store.select(selectCreateBillboardState)),
                concatMap(([action, store]) => this._billboardService.createBillboard(store.billboard)),
                map(billboardStatus => this._router.navigate(['/boards', billboardStatus.id]))
              ), { dispatch: false }
  )
}
