import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, withLatestFrom } from 'rxjs/operators';

import { BoardsService } from '../../../service/boards.service';
import { CreateBillboardsActions } from './create-billboard.actions-types';
import { selectCreateBillboardState } from './create-billboard.selectors';

@Injectable()
export class CreateBillboardEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store,
    private _billboardService: BoardsService
  ) {}

  createBillboardService$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(CreateBillboardsActions.createBillboard),
                withLatestFrom(this._store.select(selectCreateBillboardState)),
                concatMap(([action, store]) => {
                  return this._billboardService.createBillboard(store.billboard);
                })
              ), { dispatch: false }
  )
}
