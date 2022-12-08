import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { IBillboardStatus } from '../../../interfaces/billboard-status.interface';
import { BillboardsActions } from './boards.actions-types';

export interface BoardsState extends EntityState<IBillboardStatus> {
  isFetched: boolean,
  isFetchedFavorite: boolean,
  searchString: string
  searchResults: IBillboardStatus[]
}

export const adapter = createEntityAdapter<IBillboardStatus>(
  { selectId: model => model.id }
);

export const initialBillboardsState = adapter.getInitialState();

export const billboardsReducer = createReducer(
  initialBillboardsState,
  on(BillboardsActions.AllBillboardsFetched, (state, action) => {
    return adapter.addMany(action.billboards, state);
  }),
  on(BillboardsActions.BillboardInformationFetched, (state, action) => {
    return adapter.addOne(action.billboard, state);
  }),
  on(BillboardsActions.BillboardInformationUpdated, (state, action) => {
    return adapter.updateOne({ id: action.billboardStatus.id, changes: action.billboardStatus }, state);
  }),
  on(BillboardsActions.MarkASFetched, (state) => {
    return {
      ...state,
      isFetched: true
    }
  }),
  on(BillboardsActions.FetchedFavoriteBillboards, (state) => {
    return {
      ...state,
      isFetchedFavorite: true
    }
  }),
  on(BillboardsActions.SearchBillboardsCompleted, (state, action) => {
    return {
      ...state,
      searchResults: action.billboards
    }
  }),
  on(BillboardsActions.ResetSearchResults, (state) => {
    return {
      ...state,
      searchResults: [],
      searchString: ''
    }
  }),
  on(BillboardsActions.SetSearchValue, (state, action) => {
    console.log(action)
    return {
      ...state,
      searchString: action.searchString
    }
  })
);

export const { selectAll } = adapter.getSelectors();
