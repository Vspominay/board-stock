import { createAction, props } from '@ngrx/store';

import { IBillboardStatus } from '../../../interfaces/billboard-status.interface';

export const FetchAllBillboards = createAction(
  '[Boards] Fetch all billboards'
);

export const AllBillboardsFetched = createAction(
  '[Boards] All billboards fetched',
  props<{ billboards: IBillboardStatus[] }>()
);

export const GetBillboardInformation = createAction(
  '[Boards] Get billboard information',
  props<{ id: string }>()
);

export const BillboardInformationFetched = createAction(
  '[Boards] Billboard information fetched',
  props<{ billboard: IBillboardStatus }>()
);

export const ToggleFavoriteBillboard = createAction(
  '[Boards] Toggle favorite billboard',
  props<{ id: string, isFavorite: boolean }>()
);

export const BillboardInformationUpdated = createAction(
  '[Boards] Billboard information updated',
  props<{ billboardStatus: IBillboardStatus }>()
);

export const MarkASFetched = createAction(
  '[Boards] Mark as fetched'
);

export const FetchFavoriteBillboards = createAction(
  '[Boards] Fetch favorites billboards'
);

export const FetchedFavoriteBillboards = createAction(
  '[Boards] Fetched favorite billboards'
);

export const SearchBillboards = createAction(
  '[Boards] Search billboard',
  props<{ searchString: string }>()
);
