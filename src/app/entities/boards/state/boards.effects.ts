import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';

import { BoardsService } from '../service/boards.service';
import { AllBillboardsFetched } from './boards.actions';
import { BillboardsActions } from './boards.actions-types';

@Injectable()
export class BoardsEffects {

  constructor(private _actions$: Actions, private _billboardsService: BoardsService) {}

  fetchBillboards$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(BillboardsActions.FetchAllBillboards),
                concatMap(() => this._billboardsService.getBillboards()),
                map(billboards => AllBillboardsFetched({ billboards })))
  );

}
