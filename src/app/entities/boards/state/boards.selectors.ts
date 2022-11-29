import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BoardsState } from './boards.reducers';
import * as fromBillboards from './boards.reducers';

export const selectBillboardsState = createFeatureSelector<BoardsState>("billboards");

export const selectAllBillboards = createSelector(
  selectBillboardsState,
  fromBillboards.selectAll
);

export const selectBillboard = (id: string) => createSelector(
  selectAllBillboards,
  (billboards) => billboards.find(billboard => billboard.id === id)
)