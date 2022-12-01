import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';

import { BoardsService } from '../service/boards.service';
import { AllBillboardsFetched, BillboardInformationFetched, BillboardInformationUpdated, MarkASFetched } from './boards.actions';
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

  billboardInformation$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(BillboardsActions.GetBillboardInformation),
                concatMap((action) => this._billboardsService.getBillboardInformation(action.id)),
                map(billboard => BillboardInformationFetched({ billboard }))
              )
  )

  toggleFavorite$ = createEffect(
    () => this._actions$
              .pipe(
                ofType(BillboardsActions.ToggleFavoriteBillboard),
                concatMap(action => this._billboardsService.toggleFavoriteBillboard(action.id, action.isFavorite)),
                map(billboardStatus => {
                  MarkASFetched();
                  return BillboardInformationUpdated({ billboardStatus })
                })
              )
  )

}
