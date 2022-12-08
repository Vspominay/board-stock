import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BoardsState } from './boards.reducers';
import * as fromBillboards from './boards.reducers';

export const selectBillboardsState = createFeatureSelector<BoardsState>("billboards");

export const selectAllBillboards = createSelector(
  selectBillboardsState,
  fromBillboards.selectAll
);

export const selectFoundBillboards = createSelector(
  selectBillboardsState,
  state => state.searchResults && state.searchResults.length ? selectSearchResultsBillboards : selectAllBillboards
);

export const selectFilteredBillboards = createSelector(
  selectBillboardsState,
  selectFoundBillboards,
  selectFoundBillboards => selectFoundBillboards.searchResults && selectFoundBillboards.searchResults.length ? selectFoundBillboards.searchResults : Object.values(selectFoundBillboards.entities)
);

export const selectSearchString = createSelector(
  selectBillboardsState,
  state => state.searchString
);

export const selectSearchResultsBillboards = createSelector(
  selectBillboardsState,
  state => state.searchResults
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
