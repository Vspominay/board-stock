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
  (billboards) => billboards.length && billboards.find(billboard => billboard.id === id)
);

export const selectGallery = (id: string) => createSelector(
  selectBillboard(id),
  billboardStatus => {
    if (billboardStatus) return [billboardStatus.billboard.mainImage, ...billboardStatus.billboard.images];
  }
);

export const selectFavoriteBillboards = createSelector(
  selectAllBillboards,
  (billboardStatuses) => billboardStatuses.filter(billboard => billboard.isFavorite)
);

export const isFetched = createSelector(
  selectAllBillboards,
  billboardsState => billboardsState['isFetched']
);

export const isFetchedFavorite = createSelector(
  selectAllBillboards,
  billboardState => billboardState['isFetchedFavorite']
)
